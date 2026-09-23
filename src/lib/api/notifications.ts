import { supabase } from '../supabase';
import { format } from 'date-fns';

interface BookingDetails {
  id: string;
  parent_name: string;
  parent_phone: string;
  parent_email?: string;
  date: string;
  time: string;
  duration: number;
  num_kids: number;
  location: string;
  total_price: number;
  urgency: string;
  status: string;
  special_notes?: string;
}

export const notificationsApi = {
  // Send confirmation notifications (SMS + Email)
  async sendBookingConfirmation(booking: BookingDetails) {
    const results = {
      sms: { success: false, error: null as any },
      email: { success: false, error: null as any }
    };

    // Format booking date nicely
    const formattedDate = format(new Date(booking.date), 'EEEE, MMMM d, yyyy');
    
    // SMS Message
    const smsMessage = `✅ Booking Confirmed!\n\n` +
      `Dear ${booking.parent_name},\n` +
      `Your booking is confirmed for:\n` +
      `📅 ${formattedDate}\n` +
      `🕐 ${booking.time} (${booking.duration}h)\n` +
      `📍 ${booking.location}\n` +
      `👶 ${booking.num_kids} kid(s)\n` +
      `💵 RWF ${booking.total_price.toLocaleString()}\n\n` +
      `A sitter will be assigned soon. Thank you for choosing Kigali Little Angels!`;

    // Email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #ef4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; width: 120px; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmed! ✅</h1>
            </div>
            <div class="content">
              <p>Dear ${booking.parent_name},</p>
              <p>Great news! Your babysitting booking has been confirmed. We're excited to provide quality care for your little one(s).</p>
              
              <div class="booking-details">
                <h2 style="color: #1f2937; margin-bottom: 20px;">Booking Details</h2>
                <div class="detail-row">
                  <span class="detail-label">📅 Date:</span>
                  <span>${formattedDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🕐 Time:</span>
                  <span>${booking.time} (${booking.duration} hours)</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">📍 Location:</span>
                  <span>${booking.location}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">👶 Children:</span>
                  <span>${booking.num_kids}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">💵 Total:</span>
                  <span>RWF ${booking.total_price.toLocaleString()}</span>
                </div>
                ${booking.special_notes ? `
                <div class="detail-row">
                  <span class="detail-label">📝 Notes:</span>
                  <span>${booking.special_notes}</span>
                </div>
                ` : ''}
              </div>
              
              <p><strong>What's Next?</strong></p>
              <ul>
                <li>We'll assign a qualified sitter to your booking</li>
                <li>You'll receive the sitter's details before your booking</li>
                <li>The sitter will arrive 10 minutes early</li>
              </ul>
              
              <p>If you need to make any changes, please contact us at +250787507249.</p>
              
              <div style="text-align: center;">
                <a href="https://wa.me/250787507249" class="button">Message us on WhatsApp</a>
              </div>
            </div>
            <div class="footer">
              <p>Thank you for trusting Kigali Little Angels with your childcare needs!</p>
              <p>WhatsApp or call: 0787 507 249</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `Booking Confirmed!\n\n` +
      `Dear ${booking.parent_name},\n\n` +
      `Your babysitting booking has been confirmed.\n\n` +
      `Booking Details:\n` +
      `Date: ${formattedDate}\n` +
      `Time: ${booking.time} (${booking.duration} hours)\n` +
      `Location: ${booking.location}\n` +
      `Children: ${booking.num_kids}\n` +
      `Total: RWF ${booking.total_price.toLocaleString()}\n` +
      `${booking.special_notes ? `Notes: ${booking.special_notes}\n` : ''}\n` +
      `We'll assign a qualified sitter and send you their details soon.\n\n` +
      `Thank you for choosing Kigali Little Angels!`;

    // Send SMS
    try {
      console.log('Sending confirmation SMS to:', booking.parent_phone);
      if (supabase && supabase.functions) {
        const { data, error } = await supabase.functions.invoke('send-sms', {
          body: { phone: booking.parent_phone, message: smsMessage }
        });
        
        if (error) throw error;
        results.sms.success = true;
      }
    } catch (error) {
      console.error('SMS notification error:', error);
      results.sms.error = error;
    }

    // Send Email (if email address is provided)
    if (booking.parent_email) {
      try {
        console.log('Sending confirmation email to:', booking.parent_email);
        if (supabase && supabase.functions) {
          const { data, error } = await supabase.functions.invoke('send-email', {
            body: { 
              to: booking.parent_email,
              subject: `Booking Confirmed - ${formattedDate}`,
              html: emailHtml,
              text: emailText
            }
          });
          
          if (error) throw error;
          results.email.success = true;
        }
      } catch (error) {
        console.error('Email notification error:', error);
        results.email.error = error;
      }
    }

    return results;
  },

  // Send cancellation notifications
  async sendBookingCancellation(booking: BookingDetails) {
    const formattedDate = format(new Date(booking.date), 'EEEE, MMMM d, yyyy');
    
    const smsMessage = `❌ Booking Cancelled\n\n` +
      `Dear ${booking.parent_name},\n` +
      `Your booking for ${formattedDate} at ${booking.time} has been cancelled.\n\n` +
      `If you have any questions, please contact us at +250787507249.`;

    const results = {
      sms: { success: false, error: null as any },
      email: { success: false, error: null as any }
    };

    // Send SMS
    try {
      if (supabase && supabase.functions) {
        const { data, error } = await supabase.functions.invoke('send-sms', {
          body: { phone: booking.parent_phone, message: smsMessage }
        });
        
        if (error) throw error;
        results.sms.success = true;
      }
    } catch (error) {
      console.error('SMS cancellation error:', error);
      results.sms.error = error;
    }

    return results;
  }
};