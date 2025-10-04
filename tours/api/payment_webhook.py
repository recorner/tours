# File: your_app/your_app/api/payment_webhook.py
import frappe
import json
from frappe import _

@frappe.whitelist(allow_guest=True)
def process_payment_webhook():
    """Handle payment gateway webhooks"""
    
    try:
        # Get webhook payload
        data = json.loads(frappe.request.data)
        
        # Extract gateway reference (adjust based on your gateway)
        gateway_ref = data.get('reference') or data.get('id')
        status = data.get('status')
        
        if not gateway_ref:
            frappe.throw(_("No reference found in webhook"))
            
        # Find corresponding Booking Payment
        payment = frappe.get_doc('Booking Payment', {'gateway_reference': gateway_ref})
        
        if payment:
            # Update status
            payment.status = map_gateway_status(status)  # Custom mapping function
            payment.webhook_payload = json.dumps(data)
            payment.attempts += 1
            payment.save(ignore_permissions=True)
            
            return {"status": "success", "message": "Payment updated"}
        else:
            frappe.throw(_("Payment record not found"))
            
    except Exception as e:
        frappe.log_error(str(e), "Webhook Processing Error")
        return {"status": "error", "message": str(e)}

def map_gateway_status(gateway_status):
    """Map gateway status to internal status"""
    status_mapping = {
        'completed': 'Succeeded',
        'failed': 'Failed', 
        'pending': 'Processing',
        'cancelled': 'Failed'
    }
    return status_mapping.get(gateway_status.lower(), 'Processing')