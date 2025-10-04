// Safari Builder JavaScript

// State management
let safariBuilder = {
    currentStep: 1,
    totalSteps: 7,
    selectedDestinations: [],
    startDate: null,
    endDate: null,
    groupSize: {
        adults: 2,
        children: 0,
        infants: 0
    },
    accommodationLevel: 'mid-range',
    addOns: [],
    totalPrice: 0,
    bookingData: {}
};

// Destination data
const destinations = {
    'masai-mara': {
        name: 'Masai Mara',
        basePrice: 450,
        description: 'Famous for the Great Migration and Big Five wildlife',
        activities: ['Game Drives', 'Cultural Visits', 'Balloon Safari', 'Nature Walks']
    },
    'amboseli': {
        name: 'Amboseli National Park',
        basePrice: 380,
        description: 'Stunning elephant herds with Mt. Kilimanjaro backdrop',
        activities: ['Elephant Watching', 'Photography', 'Cultural Visits', 'Nature Walks']
    },
    'tsavo': {
        name: 'Tsavo National Parks',
        basePrice: 420,
        description: 'Kenya\'s largest wilderness with red elephants',
        activities: ['Wildlife Viewing', 'Bird Watching', 'Rock Climbing', 'Bush Walks']
    }
};

// Accommodation pricing
const accommodationPricing = {
    'budget': { multiplier: 0.7, name: 'Budget' },
    'mid-range': { multiplier: 1.0, name: 'Mid-Range' },
    'luxury': { multiplier: 1.8, name: 'Luxury' }
};

// Initialize safari builder
function openSafariBuilder() {
    document.getElementById('safariBuilderModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateProgressBar();
    setMinDate();
}

function closeSafariBuilder() {
    document.getElementById('safariBuilderModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    resetBuilder();
}

function resetBuilder() {
    safariBuilder.currentStep = 1;
    safariBuilder.selectedDestinations = [];
    safariBuilder.addOns = [];
    updateProgressBar();
    showStep(1);
    clearSelections();
}

function clearSelections() {
    // Clear destination selections
    document.querySelectorAll('.destination-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Reset form inputs
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('adultsCount').textContent = '2';
    document.getElementById('childrenCount').textContent = '0';
    document.getElementById('infantsCount').textContent = '0';
}

// Step navigation
function nextStep() {
    if (validateCurrentStep()) {
        if (safariBuilder.currentStep < safariBuilder.totalSteps) {
            safariBuilder.currentStep++;
            updateProgressBar();
            showStep(safariBuilder.currentStep);
            
            // Generate itinerary when reaching step 4
            if (safariBuilder.currentStep === 4) {
                generateItinerary();
            }
            
            // Calculate pricing when reaching step 5
            if (safariBuilder.currentStep === 5) {
                calculatePricing();
                setupAddOnListeners();
            }
        }
    }
}

function previousStep() {
    if (safariBuilder.currentStep > 1) {
        safariBuilder.currentStep--;
        updateProgressBar();
        showStep(safariBuilder.currentStep);
    }
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step-container').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    document.getElementById(`step${stepNumber}`).classList.add('active');
    
    // Update navigation buttons
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (safariBuilder.currentStep === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    if (safariBuilder.currentStep === safariBuilder.totalSteps) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
        nextBtn.textContent = safariBuilder.currentStep === 6 ? 'Complete Booking' : 'Next';
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const currentStepSpan = document.getElementById('currentStep');
    
    const progressPercentage = (safariBuilder.currentStep / safariBuilder.totalSteps) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    currentStepSpan.textContent = safariBuilder.currentStep;
}

// Validation
function validateCurrentStep() {
    switch (safariBuilder.currentStep) {
        case 1:
            if (safariBuilder.selectedDestinations.length === 0) {
                alert('Please select at least one destination.');
                return false;
            }
            break;
        case 2:
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            
            if (!startDate || !endDate) {
                alert('Please select both start and end dates.');
                return false;
            }
            
            if (new Date(startDate) >= new Date(endDate)) {
                alert('End date must be after start date.');
                return false;
            }
            
            safariBuilder.startDate = startDate;
            safariBuilder.endDate = endDate;
            break;
        case 3:
            const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children;
            if (totalGuests === 0) {
                alert('Please add at least one adult.');
                return false;
            }
            break;
        case 6:
            return validateCheckoutForm();
    }
    return true;
}

function validateCheckoutForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!firstName || !lastName || !email || !phone) {
        alert('Please fill in all required contact information.');
        return false;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Destination selection
function setupDestinationSelection() {
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('click', function() {
            const destination = this.dataset.destination;
            toggleDestination(destination, this);
        });
    });
}

function toggleDestination(destination, cardElement) {
    const index = safariBuilder.selectedDestinations.indexOf(destination);
    
    if (index > -1) {
        // Remove destination
        safariBuilder.selectedDestinations.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        // Add destination
        safariBuilder.selectedDestinations.push(destination);
        cardElement.classList.add('selected');
    }
}

// Group size controls
function incrementCounter(type) {
    safariBuilder.groupSize[type]++;
    updateCounterDisplay(type);
}

function decrementCounter(type) {
    if (safariBuilder.groupSize[type] > 0) {
        // Don't allow adults to go below 1
        if (type === 'adults' && safariBuilder.groupSize[type] === 1) {
            return;
        }
        safariBuilder.groupSize[type]--;
        updateCounterDisplay(type);
    }
}

function updateCounterDisplay(type) {
    document.getElementById(`${type}Count`).textContent = safariBuilder.groupSize[type];
}

// Date handling
function setMinDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const minDate = tomorrow.toISOString().split('T')[0];
    document.getElementById('startDate').min = minDate;
    document.getElementById('endDate').min = minDate;
}

// Itinerary generation
function generateItinerary() {
    const days = calculateDays();
    const itineraryHtml = createItineraryHtml(days);
    document.getElementById('itineraryPreview').innerHTML = itineraryHtml;
    
    // Setup accommodation level listener
    document.getElementById('accommodationLevel').addEventListener('change', function() {
        safariBuilder.accommodationLevel = this.value;
    });
}

function calculateDays() {
    const start = new Date(safariBuilder.startDate);
    const end = new Date(safariBuilder.endDate);
    const timeDifference = end.getTime() - start.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1; // Include both start and end days
}

function createItineraryHtml(days) {
    const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children + safariBuilder.groupSize.infants;
    const destinationNames = safariBuilder.selectedDestinations.map(dest => destinations[dest].name).join(' & ');
    
    let html = `
        <div class="itinerary-header">
            <div class="itinerary-title">${days}-Day ${destinationNames} Safari</div>
            <div class="itinerary-subtitle">For ${totalGuests} guests • ${formatDate(safariBuilder.startDate)} to ${formatDate(safariBuilder.endDate)}</div>
        </div>
        <div class="day-by-day">
    `;
    
    for (let day = 1; day <= days; day++) {
        html += createDayItinerary(day, days);
    }
    
    html += '</div>';
    return html;
}

function createDayItinerary(day, totalDays) {
    const currentDate = new Date(safariBuilder.startDate);
    currentDate.setDate(currentDate.getDate() + day - 1);
    
    let activities = '';
    
    if (day === 1) {
        activities = 'Arrival and transfer to camp/lodge. Welcome lunch and afternoon game drive. Evening briefing and dinner.';
    } else if (day === totalDays) {
        activities = 'Final morning game drive. Breakfast and check-out. Transfer to departure point.';
    } else {
        const destination = destinations[safariBuilder.selectedDestinations[0]];
        activities = `Full day game drive in ${destination.name}. Early morning and evening drives with rest during midday. All meals included.`;
    }
    
    return `
        <div class="day-item">
            <div class="day-header">Day ${day} - ${formatDate(currentDate.toISOString().split('T')[0])}</div>
            <div class="day-activities">${activities}</div>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Pricing calculation
function calculatePricing() {
    let basePrice = 0;
    const days = calculateDays();
    const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children;
    
    // Calculate base price from selected destinations
    safariBuilder.selectedDestinations.forEach(dest => {
        basePrice += destinations[dest].basePrice * days;
    });
    
    // Apply accommodation multiplier
    const accommodationMultiplier = accommodationPricing[safariBuilder.accommodationLevel].multiplier;
    basePrice *= accommodationMultiplier;
    
    // Apply per-person pricing
    const adultPrice = basePrice * safariBuilder.groupSize.adults;
    const childPrice = basePrice * safariBuilder.groupSize.children * 0.7; // 30% discount for children
    
    safariBuilder.totalPrice = adultPrice + childPrice;
    
    updatePricingDisplay();
}

function updatePricingDisplay() {
    const days = calculateDays();
    const accommodationName = accommodationPricing[safariBuilder.accommodationLevel].name;
    
    let html = `
        <div class="price-item">
            <span>Safari Package (${days} days)</span>
            <span>$${safariBuilder.totalPrice.toFixed(0)}</span>
        </div>
    `;
    
    // Add-ons will be calculated and added here
    let addOnTotal = 0;
    safariBuilder.addOns.forEach(addon => {
        const price = calculateAddOnPrice(addon);
        addOnTotal += price;
        html += `
            <div class="price-item">
                <span>${getAddOnName(addon)}</span>
                <span>$${price}</span>
            </div>
        `;
    });
    
    const finalTotal = safariBuilder.totalPrice + addOnTotal;
    
    html += `
        <div class="price-item">
            <span>Total Price</span>
            <span>$${finalTotal.toFixed(0)}</span>
        </div>
    `;
    
    document.getElementById('priceBreakdown').innerHTML = html;
}

function setupAddOnListeners() {
    document.querySelectorAll('.addon-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const addonId = this.id;
            
            if (this.checked) {
                if (!safariBuilder.addOns.includes(addonId)) {
                    safariBuilder.addOns.push(addonId);
                }
            } else {
                const index = safariBuilder.addOns.indexOf(addonId);
                if (index > -1) {
                    safariBuilder.addOns.splice(index, 1);
                }
            }
            
            updatePricingDisplay();
        });
    });
}

function calculateAddOnPrice(addonId) {
    const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children;
    
    switch (addonId) {
        case 'airportPickup':
            return 50; // Per group
        case 'balloonRide':
            return 450 * totalGuests; // Per person
        case 'extraNight':
            return 200; // Per night
        case 'culturalVisit':
            return 75 * totalGuests; // Per person
        default:
            return 0;
    }
}

function getAddOnName(addonId) {
    const names = {
        'airportPickup': 'Airport Pickup & Drop-off',
        'balloonRide': 'Hot Air Balloon Safari',
        'extraNight': 'Extra Night in Nairobi',
        'culturalVisit': 'Maasai Village Cultural Visit'
    };
    return names[addonId] || addonId;
}

// Checkout and confirmation
function completeBooking() {
    // Collect all booking data
    safariBuilder.bookingData = {
        destinations: safariBuilder.selectedDestinations,
        startDate: safariBuilder.startDate,
        endDate: safariBuilder.endDate,
        groupSize: safariBuilder.groupSize,
        accommodationLevel: safariBuilder.accommodationLevel,
        addOns: safariBuilder.addOns,
        totalPrice: calculateFinalPrice(),
        contactInfo: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            specialRequests: document.getElementById('specialRequests').value
        },
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        bookingReference: generateBookingReference()
    };
    
    // Show confirmation
    showBookingConfirmation();
    safariBuilder.currentStep = 7;
    updateProgressBar();
    showStep(7);
}

function calculateFinalPrice() {
    let total = safariBuilder.totalPrice;
    safariBuilder.addOns.forEach(addon => {
        total += calculateAddOnPrice(addon);
    });
    return total;
}

function generateBookingReference() {
    return 'DAV' + Date.now().toString().slice(-8);
}

function showBookingConfirmation() {
    const bookingData = safariBuilder.bookingData;
    const days = calculateDays();
    const destinationNames = bookingData.destinations.map(dest => destinations[dest].name).join(' & ');
    
    const html = `
        <div class="booking-reference">
            <h4>Booking Reference: ${bookingData.bookingReference}</h4>
        </div>
        <div class="booking-details">
            <h5>${days}-Day ${destinationNames} Safari</h5>
            <p><strong>Dates:</strong> ${formatDate(bookingData.startDate)} to ${formatDate(bookingData.endDate)}</p>
            <p><strong>Guests:</strong> ${bookingData.groupSize.adults} Adults, ${bookingData.groupSize.children} Children</p>
            <p><strong>Accommodation:</strong> ${accommodationPricing[bookingData.accommodationLevel].name}</p>
            <p><strong>Total Price:</strong> $${bookingData.totalPrice.toFixed(0)}</p>
            <p><strong>Contact:</strong> ${bookingData.contactInfo.firstName} ${bookingData.contactInfo.lastName}</p>
            <p><strong>Email:</strong> ${bookingData.contactInfo.email}</p>
        </div>
    `;
    
    document.getElementById('bookingSummary').innerHTML = html;
}

// Voucher and communication functions
function downloadVoucher() {
    // This would integrate with a PDF generation library
    alert('Voucher download will be implemented with PDF generation library');
}

function sendToWhatsApp() {
    const bookingData = safariBuilder.bookingData;
    const message = `🦁 Davag Safari Booking Confirmed!\n\nBooking Ref: ${bookingData.bookingReference}\nSafari: ${calculateDays()}-Day ${bookingData.destinations.map(dest => destinations[dest].name).join(' & ')}\nDates: ${formatDate(bookingData.startDate)} to ${formatDate(bookingData.endDate)}\nTotal: $${bookingData.totalPrice.toFixed(0)}\n\nGet ready for an amazing adventure!`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function emailConfirmation() {
    const bookingData = safariBuilder.bookingData;
    const subject = `Safari Booking Confirmation - ${bookingData.bookingReference}`;
    const body = `Dear ${bookingData.contactInfo.firstName},\n\nYour safari booking has been confirmed!\n\nBooking Reference: ${bookingData.bookingReference}\nDates: ${formatDate(bookingData.startDate)} to ${formatDate(bookingData.endDate)}\nTotal Price: $${bookingData.totalPrice.toFixed(0)}\n\nWe'll contact you soon with more details.\n\nBest regards,\nDavag Safaris Team`;
    
    const mailtoUrl = `mailto:${bookingData.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupDestinationSelection();
    setMinDate();
    
    // Handle modal clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('safari-builder-overlay')) {
            closeSafariBuilder();
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('safariBuilderModal').style.display === 'block') {
            closeSafariBuilder();
        }
    });
    
    // Custom event handler for completing booking from step 6
    document.getElementById('nextBtn').addEventListener('click', function() {
        if (safariBuilder.currentStep === 6) {
            completeBooking();
        }
    });
});