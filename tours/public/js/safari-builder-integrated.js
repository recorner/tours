// Safari Builder Integrated JavaScript

// Enhanced destination database with comprehensive information
const destinationsDatabase = {
  'masai-mara': {
    name: 'Masai Mara National Reserve',
    location: 'Narok County, Kenya',
    description: 'World-famous for the Great Migration and incredible Big Five wildlife viewing opportunities.',
    image: 'assets/img/dest/dest1.jpg',
    basePrice: 485,
    tags: ['big-five', 'migration', 'cultural', 'photography'],
    highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Balloon Safari'],
    bestMonths: ['July', 'August', 'September', 'October'],
    activities: ['Game Drives', 'Cultural Visits', 'Hot Air Balloon', 'Photography'],
    wildlife: ['Lions', 'Leopards', 'Elephants', 'Rhinos', 'Buffalos', 'Wildebeest', 'Zebras', 'Cheetahs'],
    accommodation: {
      budget: 'Mara River Camp',
      midRange: 'Mara Serena Safari Lodge',
      luxury: 'Angama Mara'
    }
  },
  'amboseli': {
    name: 'Amboseli National Park',
    location: 'Kajiado County, Kenya',
    description: 'Famous for large elephant herds and spectacular views of Mount Kilimanjaro.',
    image: 'assets/img/dest/dest2.jpg',
    basePrice: 420,
    tags: ['big-five', 'photography', 'cultural'],
    highlights: ['Elephants', 'Mt. Kilimanjaro Views', 'Photography', 'Maasai Culture'],
    bestMonths: ['June', 'July', 'August', 'September', 'January', 'February'],
    activities: ['Game Drives', 'Elephant Watching', 'Photography', 'Cultural Visits'],
    wildlife: ['Elephants', 'Lions', 'Cheetahs', 'Giraffes', 'Zebras', 'Buffalos', 'Hippos'],
    accommodation: {
      budget: 'Kimana Amboseli Camp',
      midRange: 'Amboseli Serena Safari Lodge',
      luxury: 'Tortilis Camp'
    }
  },
  'tsavo-east': {
    name: 'Tsavo East National Park',
    location: 'Taita-Taveta County, Kenya',
    description: 'Kenya\'s largest park, famous for red elephants and diverse landscapes.',
    image: 'assets/img/dest/dest3.jpg',
    basePrice: 380,
    tags: ['big-five', 'adventure', 'photography'],
    highlights: ['Red Elephants', 'Galana River', 'Lugard Falls', 'Mudanda Rock'],
    bestMonths: ['June', 'July', 'August', 'September', 'December', 'January'],
    activities: ['Game Drives', 'Bird Watching', 'Photography', 'River Safaris'],
    wildlife: ['Elephants', 'Lions', 'Buffalos', 'Giraffes', 'Zebras', 'Antelopes', 'Crocodiles'],
    accommodation: {
      budget: 'Ndololo Safari Camp',
      midRange: 'Sentrim Tsavo Camp',
      luxury: 'Ashnil Aruba Lodge'
    }
  },
  'tsavo-west': {
    name: 'Tsavo West National Park',
    location: 'Taita-Taveta County, Kenya',
    description: 'Rugged wilderness with volcanic landscapes and diverse wildlife.',
    image: 'assets/img/dest/dest1.jpg',
    basePrice: 390,
    tags: ['big-five', 'adventure', 'photography'],
    highlights: ['Mzima Springs', 'Shetani Lava Flow', 'Rhino Sanctuary', 'Chaimu Crater'],
    bestMonths: ['June', 'July', 'August', 'September', 'December', 'January'],
    activities: ['Game Drives', 'Rhino Tracking', 'Springs Visit', 'Volcano Tours'],
    wildlife: ['Black Rhinos', 'Elephants', 'Lions', 'Leopards', 'Hippos', 'Crocodiles'],
    accommodation: {
      budget: 'Ngulia Safari Lodge',
      midRange: 'Kilaguni Serena Safari Lodge',
      luxury: 'Finch Hattons'
    }
  },
  'samburu': {
    name: 'Samburu National Reserve',
    location: 'Samburu County, Kenya',
    description: 'Semi-arid reserve known for unique northern species and Samburu culture.',
    image: 'assets/img/dest/dest2.jpg',
    basePrice: 450,
    tags: ['cultural', 'photography', 'adventure'],
    highlights: ['Samburu Special Five', 'Ewaso River', 'Cultural Visits', 'Unique Wildlife'],
    bestMonths: ['June', 'July', 'August', 'September', 'December', 'January', 'February'],
    activities: ['Game Drives', 'Cultural Visits', 'River Walks', 'Bird Watching'],
    wildlife: ['Grevy\'s Zebra', 'Reticulated Giraffe', 'Beisa Oryx', 'Somali Ostrich', 'Gerenuk'],
    accommodation: {
      budget: 'Samburu Public Campsite',
      midRange: 'Samburu Serena Safari Lodge',
      luxury: 'Elephant Bedroom Camp'
    }
  },
  'lake-nakuru': {
    name: 'Lake Nakuru National Park',
    location: 'Nakuru County, Kenya',
    description: 'Famous for flamingos, rhinos, and diverse birdlife around the alkaline lake.',
    image: 'assets/img/dest/dest3.jpg',
    basePrice: 320,
    tags: ['photography', 'conservation'],
    highlights: ['Flamingos', 'White Rhinos', 'Baboon Cliff', 'Bird Watching'],
    bestMonths: ['July', 'August', 'January', 'February', 'March'],
    activities: ['Game Drives', 'Bird Watching', 'Photography', 'Rhino Tracking'],
    wildlife: ['Flamingos', 'White Rhinos', 'Black Rhinos', 'Lions', 'Leopards', 'Buffalos'],
    accommodation: {
      budget: 'Nakuru County Lodge',
      midRange: 'Lake Nakuru Sopa Lodge',
      luxury: 'The Cliff'
    }
  },
  'aberdares': {
    name: 'Aberdare National Park',
    location: 'Nyandarua County, Kenya',
    description: 'Mountain park with waterfalls, bamboo forests, and unique highland wildlife.',
    image: 'assets/img/dest/dest1.jpg',
    basePrice: 360,
    tags: ['adventure', 'photography'],
    highlights: ['Karura Falls', 'Tree Hotels', 'Mountain Wildlife', 'Cool Climate'],
    bestMonths: ['December', 'January', 'February', 'June', 'July', 'August'],
    activities: ['Game Drives', 'Waterfall Visits', 'Tree Lodge Experience', 'Hiking'],
    wildlife: ['Elephants', 'Buffalos', 'Black Rhinos', 'Leopards', 'Bongo Antelopes'],
    accommodation: {
      budget: 'Aberdare County Lodge',
      midRange: 'Aberdare Country Club',
      luxury: 'The Ark'
    }
  },
  'hell-gate': {
    name: 'Hell\'s Gate National Park',
    location: 'Nakuru County, Kenya',
    description: 'Unique park allowing walking and cycling among wildlife with dramatic landscapes.',
    image: 'assets/img/dest/dest2.jpg',
    basePrice: 280,
    tags: ['adventure', 'photography'],
    highlights: ['Walking Safari', 'Cycling', 'Rock Climbing', 'Geothermal Features'],
    bestMonths: ['All year round'],
    activities: ['Walking', 'Cycling', 'Rock Climbing', 'Photography'],
    wildlife: ['Zebras', 'Giraffes', 'Buffalos', 'Warthogs', 'Antelopes', 'Baboons'],
    accommodation: {
      budget: 'Fisherman\'s Camp',
      midRange: 'Lake Naivasha Sopa Resort',
      luxury: 'Great Rift Valley Lodge'
    }
  }
};

// State management
let safariBuilder = {
  currentStep: 1,
  totalSteps: 6,
  selectedDestinations: [],
  startDate: null,
  endDate: null,
  groupSize: {
    adults: 2,
    children: 0,
    infants: 0
  },
  specialInterests: [],
  accommodationLevel: 'mid-range',
  transportType: '4x4',
  addOns: [],
  totalPrice: 0,
  bookingData: {}
};

let filteredDestinations = Object.keys(destinationsDatabase);

// Initialize the safari builder
document.addEventListener('DOMContentLoaded', function() {
  initializeSafariBuilder();
  setupEventListeners();
  renderDestinations();
  setMinDate();
  updateProgress();
});

function initializeSafariBuilder() {
  // Set initial state
  showStep(1);
  updateProgress();
}

function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('destinationSearch');
  if (searchInput) {
    searchInput.addEventListener('input', handleDestinationSearch);
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterDestinations(this.dataset.filter);
    });
  });

  // Date inputs
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  
  if (startDateInput) {
    startDateInput.addEventListener('change', function() {
      safariBuilder.startDate = this.value;
      if (endDateInput) {
        endDateInput.min = this.value;
      }
    });
  }
  
  if (endDateInput) {
    endDateInput.addEventListener('change', function() {
      safariBuilder.endDate = this.value;
    });
  }

  // Special interests
  document.querySelectorAll('.interest-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const interest = this.value;
      if (this.checked) {
        if (!safariBuilder.specialInterests.includes(interest)) {
          safariBuilder.specialInterests.push(interest);
        }
      } else {
        const index = safariBuilder.specialInterests.indexOf(interest);
        if (index > -1) {
          safariBuilder.specialInterests.splice(index, 1);
        }
      }
    });
  });

  // Accommodation selection
  document.querySelectorAll('input[name="accommodation"]').forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        safariBuilder.accommodationLevel = this.value;
        calculatePricing();
      }
    });
  });

  // Transport selection
  document.querySelectorAll('input[name="transport"]').forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        safariBuilder.transportType = this.value;
        calculatePricing();
      }
    });
  });

  // Add-ons
  document.querySelectorAll('.addon-checkbox').forEach(checkbox => {
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
      
      calculatePricing();
    });
  });
}

// Destination search and filtering
function handleDestinationSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  
  if (searchTerm.length === 0) {
    filteredDestinations = Object.keys(destinationsDatabase);
  } else {
    filteredDestinations = Object.keys(destinationsDatabase).filter(destId => {
      const dest = destinationsDatabase[destId];
      return (
        dest.name.toLowerCase().includes(searchTerm) ||
        dest.location.toLowerCase().includes(searchTerm) ||
        dest.description.toLowerCase().includes(searchTerm) ||
        dest.highlights.some(h => h.toLowerCase().includes(searchTerm)) ||
        dest.wildlife.some(w => w.toLowerCase().includes(searchTerm)) ||
        dest.activities.some(a => a.toLowerCase().includes(searchTerm))
      );
    });
  }
  
  renderDestinations();
}

function filterDestinations(filterType) {
  if (filterType === 'all') {
    filteredDestinations = Object.keys(destinationsDatabase);
  } else {
    filteredDestinations = Object.keys(destinationsDatabase).filter(destId => {
      const dest = destinationsDatabase[destId];
      return dest.tags.includes(filterType);
    });
  }
  
  renderDestinations();
}

function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  filteredDestinations.forEach(destId => {
    const dest = destinationsDatabase[destId];
    const isSelected = safariBuilder.selectedDestinations.includes(destId);
    
    const card = document.createElement('div');
    card.className = `destination-card ${isSelected ? 'selected' : ''}`;
    card.dataset.destination = destId;
    
    card.innerHTML = `
      <div class="destination-image">
        <img src="${dest.image}" alt="${dest.name}">
        <div class="destination-badge">${dest.highlights[0]}</div>
      </div>
      <div class="destination-info">
        <h4 class="destination-name">${dest.name}</h4>
        <p class="destination-location">📍 ${dest.location}</p>
        <p class="destination-description">${dest.description}</p>
        <div class="destination-highlights">
          ${dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
        <div class="destination-price">
          <span class="price-amount">$${dest.basePrice}</span>
          <span class="price-duration">per person/day</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => toggleDestination(destId, card));
    grid.appendChild(card);
  });
}

function toggleDestination(destId, cardElement) {
  const index = safariBuilder.selectedDestinations.indexOf(destId);
  
  if (index > -1) {
    // Remove destination
    safariBuilder.selectedDestinations.splice(index, 1);
    cardElement.classList.remove('selected');
  } else {
    // Add destination
    safariBuilder.selectedDestinations.push(destId);
    cardElement.classList.add('selected');
  }
  
  updateSelectedDestinationsSummary();
}

function updateSelectedDestinationsSummary() {
  const summary = document.getElementById('selectedSummary');
  const count = document.getElementById('selectedCount');
  const list = document.getElementById('selectedList');
  
  if (safariBuilder.selectedDestinations.length === 0) {
    summary.style.display = 'none';
    return;
  }
  
  summary.style.display = 'block';
  count.textContent = `${safariBuilder.selectedDestinations.length} selected`;
  
  list.innerHTML = safariBuilder.selectedDestinations.map(destId => {
    const dest = destinationsDatabase[destId];
    return `
      <div class="selected-item">
        ${dest.name}
        <button class="remove-destination" onclick="removeDestination('${destId}')">×</button>
      </div>
    `;
  }).join('');
}

function removeDestination(destId) {
  const index = safariBuilder.selectedDestinations.indexOf(destId);
  if (index > -1) {
    safariBuilder.selectedDestinations.splice(index, 1);
    updateSelectedDestinationsSummary();
    
    // Update visual state of card
    const card = document.querySelector(`[data-destination="${destId}"]`);
    if (card) {
      card.classList.remove('selected');
    }
  }
}

// Step navigation
function nextStep() {
  if (validateCurrentStep()) {
    if (safariBuilder.currentStep < safariBuilder.totalSteps) {
      safariBuilder.currentStep++;
      showStep(safariBuilder.currentStep);
      updateProgress();
      
      // Special actions for certain steps
      if (safariBuilder.currentStep === 4) {
        generateItinerary();
      } else if (safariBuilder.currentStep === 5) {
        calculatePricing();
      } else if (safariBuilder.currentStep === 6) {
        generateFinalSummary();
      }
      
      // Scroll to top of new step
      scrollToStep(safariBuilder.currentStep);
    } else {
      // Complete booking
      completeBooking();
    }
  }
}

function previousStep() {
  if (safariBuilder.currentStep > 1) {
    safariBuilder.currentStep--;
    showStep(safariBuilder.currentStep);
    updateProgress();
    scrollToStep(safariBuilder.currentStep);
  }
}

function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll('.safari-step').forEach(step => {
    step.classList.remove('active');
  });
  
  // Show current step
  const currentStep = document.getElementById(`step${stepNumber}`);
  if (currentStep) {
    currentStep.classList.add('active');
  }
  
  // Update navigation buttons
  updateNavigationButtons();
}

function scrollToStep(stepNumber) {
  const stepElement = document.getElementById(`step${stepNumber}`);
  if (stepElement) {
    stepElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prevStepBtn');
  const nextBtn = document.getElementById('nextStepBtn');
  
  if (prevBtn) {
    prevBtn.style.display = safariBuilder.currentStep === 1 ? 'none' : 'inline-flex';
  }
  
  if (nextBtn) {
    if (safariBuilder.currentStep === safariBuilder.totalSteps) {
      nextBtn.innerHTML = 'Complete Booking <i class="fas fa-check"></i>';
    } else {
      nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
    }
  }
}

function updateProgress() {
  const progressFill = document.getElementById('progressBarFill');
  const progressPercentage = document.getElementById('progressPercentage');
  
  const progress = (safariBuilder.currentStep / safariBuilder.totalSteps) * 100;
  
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
  
  if (progressPercentage) {
    progressPercentage.textContent = `${Math.round(progress)}%`;
  }
  
  // Update step indicators
  document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
    const stepNumber = index + 1;
    indicator.classList.remove('active', 'completed');
    
    if (stepNumber === safariBuilder.currentStep) {
      indicator.classList.add('active');
    } else if (stepNumber < safariBuilder.currentStep) {
      indicator.classList.add('completed');
    }
  });
}

// Validation
function validateCurrentStep() {
  switch (safariBuilder.currentStep) {
    case 1:
      if (safariBuilder.selectedDestinations.length === 0) {
        alert('Please select at least one destination for your safari.');
        return false;
      }
      break;
    case 2:
      if (!safariBuilder.startDate || !safariBuilder.endDate) {
        alert('Please select both departure and return dates.');
        return false;
      }
      if (new Date(safariBuilder.startDate) >= new Date(safariBuilder.endDate)) {
        alert('Return date must be after departure date.');
        return false;
      }
      break;
    case 3:
      if (safariBuilder.groupSize.adults === 0) {
        alert('Please add at least one adult to your group.');
        return false;
      }
      break;
    case 6:
      return validateBookingForm();
  }
  return true;
}

function validateBookingForm() {
  const firstName = document.getElementById('firstName')?.value.trim();
  const lastName = document.getElementById('lastName')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  
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

// Group size controls
function incrementCounter(type) {
  safariBuilder.groupSize[type]++;
  updateCounterDisplay(type);
  if (safariBuilder.currentStep >= 5) {
    calculatePricing();
  }
}

function decrementCounter(type) {
  if (safariBuilder.groupSize[type] > 0) {
    if (type === 'adults' && safariBuilder.groupSize[type] === 1) {
      return; // Don't allow adults to go below 1
    }
    safariBuilder.groupSize[type]--;
    updateCounterDisplay(type);
    if (safariBuilder.currentStep >= 5) {
      calculatePricing();
    }
  }
}

function updateCounterDisplay(type) {
  const counter = document.getElementById(`${type}Count`);
  if (counter) {
    counter.textContent = safariBuilder.groupSize[type];
  }
}

// Date handling
function setMinDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const minDate = tomorrow.toISOString().split('T')[0];
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  
  if (startDateInput) startDateInput.min = minDate;
  if (endDateInput) endDateInput.min = minDate;
}

// Itinerary generation
function generateItinerary() {
  const container = document.getElementById('itineraryContainer');
  if (!container) return;
  
  const days = calculateDays();
  const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children + safariBuilder.groupSize.infants;
  const destinationNames = safariBuilder.selectedDestinations.map(destId => 
    destinationsDatabase[destId].name
  ).join(' & ');
  
  container.innerHTML = `
    <div class="itinerary-header">
      <div class="itinerary-title">${days}-Day ${destinationNames} Safari</div>
      <div class="itinerary-subtitle">For ${totalGuests} guests • ${formatDate(safariBuilder.startDate)} to ${formatDate(safariBuilder.endDate)}</div>
    </div>
    <div class="itinerary-days">
      ${generateDayByDayItinerary(days)}
    </div>
  `;
}

function generateDayByDayItinerary(totalDays) {
  let itinerary = '';
  
  for (let day = 1; day <= totalDays; day++) {
    const currentDate = new Date(safariBuilder.startDate);
    currentDate.setDate(currentDate.getDate() + day - 1);
    
    let activities = '';
    const destIndex = Math.floor((day - 1) / Math.ceil(totalDays / safariBuilder.selectedDestinations.length));
    const currentDest = destinationsDatabase[safariBuilder.selectedDestinations[destIndex]] || destinationsDatabase[safariBuilder.selectedDestinations[0]];
    
    if (day === 1) {
      activities = `Arrival in Kenya and transfer to ${currentDest.name}. Welcome lunch and afternoon game drive to spot ${currentDest.wildlife.slice(0, 3).join(', ')}. Evening briefing and dinner at the lodge.`;
    } else if (day === totalDays) {
      activities = `Final morning game drive for last wildlife sightings. Breakfast and check-out from ${currentDest.name}. Transfer to departure point with packed lunch.`;
    } else {
      activities = `Full day exploring ${currentDest.name}. Early morning game drive focusing on ${currentDest.wildlife[day % currentDest.wildlife.length]}. Return to lodge for breakfast and rest. Afternoon game drive visiting ${currentDest.highlights[day % currentDest.highlights.length]}. All meals included.`;
    }
    
    itinerary += `
      <div class="day-card">
        <div class="day-header">Day ${day} - ${formatDate(currentDate.toISOString().split('T')[0])}</div>
        <div class="day-activities">${activities}</div>
      </div>
    `;
  }
  
  return itinerary;
}

function calculateDays() {
  const start = new Date(safariBuilder.startDate);
  const end = new Date(safariBuilder.endDate);
  const timeDifference = end.getTime() - start.getTime();
  return Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
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
  const adults = safariBuilder.groupSize.adults;
  const children = safariBuilder.groupSize.children;
  const infants = safariBuilder.groupSize.infants;
  
  // Calculate base price from selected destinations
  safariBuilder.selectedDestinations.forEach(destId => {
    const dest = destinationsDatabase[destId];
    basePrice += dest.basePrice * days;
  });
  
  // Apply accommodation multiplier
  const accommodationMultipliers = {
    'budget': 0.7,
    'mid-range': 1.0,
    'luxury': 1.8
  };
  basePrice *= accommodationMultipliers[safariBuilder.accommodationLevel];
  
  // Apply transport multiplier
  if (safariBuilder.transportType === 'private') {
    basePrice *= 1.3;
  }
  
  // Calculate per-person pricing
  const adultPrice = basePrice * adults;
  const childPrice = basePrice * children * 0.7; // 30% discount for children
  const infantPrice = basePrice * infants * 0.1; // 90% discount for infants
  
  safariBuilder.totalPrice = adultPrice + childPrice + infantPrice;
  
  updatePricingDisplay();
}

function updatePricingDisplay() {
  const pricingDetails = document.getElementById('pricingDetails');
  const totalAmount = document.getElementById('totalAmount');
  
  if (!pricingDetails || !totalAmount) return;
  
  const days = calculateDays();
  const accommodationNames = {
    'budget': 'Budget',
    'mid-range': 'Mid-Range',
    'luxury': 'Luxury'
  };
  
  let html = `
    <div class="price-item">
      <span class="price-label">Safari Package (${days} days)</span>
      <span class="price-value">$${Math.round(safariBuilder.totalPrice)}</span>
    </div>
    <div class="price-item">
      <span class="price-label">${accommodationNames[safariBuilder.accommodationLevel]} Accommodation</span>
      <span class="price-value">Included</span>
    </div>
  `;
  
  // Add-ons pricing
  let addOnTotal = 0;
  safariBuilder.addOns.forEach(addonId => {
    const price = calculateAddOnPrice(addonId);
    addOnTotal += price;
    html += `
      <div class="price-item">
        <span class="price-label">${getAddOnName(addonId)}</span>
        <span class="price-value">$${price}</span>
      </div>
    `;
  });
  
  pricingDetails.innerHTML = html;
  
  const finalTotal = safariBuilder.totalPrice + addOnTotal;
  totalAmount.textContent = `$${Math.round(finalTotal)}`;
}

function calculateAddOnPrice(addonId) {
  const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children;
  
  switch (addonId) {
    case 'airportTransfer':
      return 50;
    case 'balloonSafari':
      return 450 * totalGuests;
    case 'culturalVisit':
      return 75 * totalGuests;
    case 'extraNight':
      return 200;
    default:
      return 0;
  }
}

function getAddOnName(addonId) {
  const names = {
    'airportTransfer': 'Airport Transfer',
    'balloonSafari': 'Hot Air Balloon Safari',
    'culturalVisit': 'Maasai Village Visit',
    'extraNight': 'Extra Night in Nairobi'
  };
  return names[addonId] || addonId;
}

// Final summary generation
function generateFinalSummary() {
  const summary = document.getElementById('finalBookingSummary');
  if (!summary) return;
  
  const days = calculateDays();
  const destinationNames = safariBuilder.selectedDestinations.map(destId => 
    destinationsDatabase[destId].name
  ).join(' & ');
  
  const totalGuests = safariBuilder.groupSize.adults + safariBuilder.groupSize.children + safariBuilder.groupSize.infants;
  
  let addOnTotal = 0;
  safariBuilder.addOns.forEach(addonId => {
    addOnTotal += calculateAddOnPrice(addonId);
  });
  
  const finalTotal = safariBuilder.totalPrice + addOnTotal;
  
  summary.innerHTML = `
    <div class="summary-item">
      <strong>Safari:</strong> ${days}-Day ${destinationNames}
    </div>
    <div class="summary-item">
      <strong>Dates:</strong> ${formatDate(safariBuilder.startDate)} to ${formatDate(safariBuilder.endDate)}
    </div>
    <div class="summary-item">
      <strong>Guests:</strong> ${safariBuilder.groupSize.adults} Adults, ${safariBuilder.groupSize.children} Children, ${safariBuilder.groupSize.infants} Infants
    </div>
    <div class="summary-item">
      <strong>Accommodation:</strong> ${safariBuilder.accommodationLevel.charAt(0).toUpperCase() + safariBuilder.accommodationLevel.slice(1)} Level
    </div>
    ${safariBuilder.addOns.length > 0 ? `
    <div class="summary-item">
      <strong>Add-ons:</strong> ${safariBuilder.addOns.map(getAddOnName).join(', ')}
    </div>
    ` : ''}
    <div class="summary-item">
      <strong>Total Price:</strong> $${Math.round(finalTotal)}
    </div>
  `;
}

// Booking completion
function completeBooking() {
  if (!validateBookingForm()) return;
  
  // Collect booking data
  safariBuilder.bookingData = {
    destinations: safariBuilder.selectedDestinations,
    startDate: safariBuilder.startDate,
    endDate: safariBuilder.endDate,
    groupSize: safariBuilder.groupSize,
    specialInterests: safariBuilder.specialInterests,
    accommodationLevel: safariBuilder.accommodationLevel,
    transportType: safariBuilder.transportType,
    addOns: safariBuilder.addOns,
    totalPrice: calculateFinalPrice(),
    contactInfo: {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      specialRequests: document.getElementById('specialRequests').value
    },
    paymentMethod: document.querySelector('input[name="payment"]:checked')?.value || 'mpesa',
    bookingReference: generateBookingReference(),
    bookingDate: new Date().toISOString()
  };
  
  // Show success modal
  showSuccessModal();
}

function calculateFinalPrice() {
  let total = safariBuilder.totalPrice;
  safariBuilder.addOns.forEach(addonId => {
    total += calculateAddOnPrice(addonId);
  });
  return Math.round(total);
}

function generateBookingReference() {
  return 'DAV' + Date.now().toString().slice(-8);
}

function showSuccessModal() {
  const modal = new bootstrap.Modal(document.getElementById('successModal'));
  const bookingRefElement = document.getElementById('bookingReference');
  
  if (bookingRefElement) {
    bookingRefElement.textContent = safariBuilder.bookingData.bookingReference;
  }
  
  modal.show();
}

// Confirmation actions
function downloadVoucher() {
  // This would integrate with a PDF generation library
  alert('Safari voucher download functionality will be implemented with a PDF library.');
}

function sendToWhatsApp() {
  const bookingData = safariBuilder.bookingData;
  const days = calculateDays();
  const destinationNames = bookingData.destinations.map(destId => 
    destinationsDatabase[destId].name
  ).join(' & ');
  
  const message = `🦁 Davag Safari Booking Confirmed!\n\nBooking Ref: ${bookingData.bookingReference}\nSafari: ${days}-Day ${destinationNames}\nDates: ${formatDate(bookingData.startDate)} to ${formatDate(bookingData.endDate)}\nGuests: ${bookingData.groupSize.adults} Adults, ${bookingData.groupSize.children} Children\nTotal: $${bookingData.totalPrice}\n\nGet ready for an amazing adventure in Kenya! 🇰🇪`;
  
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function emailConfirmation() {
  const bookingData = safariBuilder.bookingData;
  const subject = `Safari Booking Confirmation - ${bookingData.bookingReference}`;
  const body = `Dear ${bookingData.contactInfo.firstName},\n\nYour Kenyan safari booking has been confirmed!\n\nBooking Reference: ${bookingData.bookingReference}\nDates: ${formatDate(bookingData.startDate)} to ${formatDate(bookingData.endDate)}\nTotal Price: $${bookingData.totalPrice}\n\nWe'll contact you soon with detailed itinerary and preparation information.\n\nBest regards,\nDavag Safaris Team\n\nExperience the Wild Heart of Kenya!`;
  
  const mailtoUrl = `mailto:${bookingData.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}