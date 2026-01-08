import { supabase } from '../supabase';
import type { Booking } from '../supabase';

// Demo mode handler when Supabase is not configured
const demoBooking = (bookingData: any): Booking => ({
  id: `demo-${Date.now()}`,
  ...bookingData,
  status: 'pending',
  created_at: new Date().toISOString()
});

export const bookingsApi = {
  // Create a new booking
  async createBooking(bookingData: {
    parent_name: string;
    parent_phone: string;
    parent_email?: string;
    date: string;
    time: string;
    duration: number;
    num_kids: number;
    location: string;
    special_notes?: string;
    urgency: 'normal' | 'emergency';
    total_price: number;
  }): Promise<{ data: Booking | null; error: any }> {
    // If Supabase is not configured, return demo data
    if (!supabase) {
      console.log('Demo mode: Booking would be created with:', bookingData);
      const mockBooking = demoBooking(bookingData);
      
      // Show demo notification
      alert(`Demo Mode: Booking created!\n\nIn production, this would:\n- Save to database\n- Send WhatsApp to Grace\n- Match with available sitters\n\nBooking ID: ${mockBooking.id}`);
      
      return { data: mockBooking, error: null };
    }
    
    try {
      // First, check if parent exists or create new
      const { data: existingParents } = await supabase
        .from('parents')
        .select('id')
        .eq('phone', bookingData.parent_phone)
        .limit(1);

      let parent_id = existingParents?.[0]?.id;

      if (!parent_id) {
        // Create new parent
        const { data: newParent, error: parentError } = await supabase
          .from('parents')
          .insert({
            name: bookingData.parent_name,
            phone: bookingData.parent_phone,
            email: bookingData.parent_email,
            neighborhood: bookingData.location,
            num_kids: bookingData.num_kids
          })
          .select('id')
          .single();

        if (parentError) throw parentError;
        parent_id = newParent.id;
      }

      // Create the booking
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          ...bookingData,
          parent_id,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      // Send SMS notification to admin
      const adminPhone = import.meta.env.VITE_ADMIN_WHATSAPP || '+250787507249';
      const message = `New booking from ${bookingData.parent_name}!\n📅 ${bookingData.date} at ${bookingData.time}\n⏱️ Duration: ${bookingData.duration}h\n📍 ${bookingData.location}\n👶 ${bookingData.num_kids} kid(s)\n💵 RWF ${bookingData.total_price.toLocaleString()}\n${bookingData.urgency === 'emergency' ? '🚨 EMERGENCY REQUEST' : ''}`;
      
      // For now, log the SMS that would be sent
      console.log('SMS Notification:', { phone: adminPhone, message });
      
      // Try to send via Edge Function if available
      try {
        if (supabase.functions) {
          const { data: smsData, error: smsError } = await supabase.functions.invoke('send-sms', {
            body: { phone: adminPhone, message }
          });
          
          if (smsError) {
            console.error('SMS notification failed:', smsError);
          }
        }
      } catch (smsError) {
        // Edge function not deployed yet, that's okay
        console.log('Edge function not available, SMS logged to console');
      }

      return { data, error: null };
    } catch (error) {
      console.error('Error creating booking:', error);
      return { data: null, error };
    }
  },

  // Get available sitters for a specific date and location
  async getAvailableSitters(date: string, location: string) {
    if (!supabase) {
      // Return mock sitters in demo mode
      return {
        data: [
          { id: '1', name: 'Divine', phone: '+250788123457', neighborhoods: ['Kimihurura'], hourly_rate: 10000 },
          { id: '2', name: 'Sarah', phone: '+250788123458', neighborhoods: ['Nyarutarama'], hourly_rate: 12000 }
        ],
        error: null
      };
    }
    
    try {
      const { data, error } = await supabase
        .from('sitters')
        .select('*')
        .eq('is_available', true)
        .contains('neighborhoods', [location]);

      if (error) throw error;

      // TODO: Filter by actual availability for the specific date
      // This would check the availability table

      return { data, error: null };
    } catch (error) {
      console.error('Error fetching available sitters:', error);
      return { data: null, error };
    }
  },

  // Get booking by ID
  async getBooking(bookingId: string) {
    if (!supabase) {
      return { data: null, error: 'Supabase not configured' };
    }
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          sitter:sitters(name, phone, whatsapp),
          parent:parents(name, phone, email)
        `)
        .eq('id', bookingId)
        .single();

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Error fetching booking:', error);
      return { data: null, error };
    }
  },

  // Get bookings by parent phone
  async getParentBookings(phone: string) {
    if (!supabase) {
      return { data: [], error: null };
    }
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          sitter:sitters(name, phone, whatsapp)
        `)
        .eq('parent_phone', phone)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Error fetching parent bookings:', error);
      return { data: null, error };
    }
  },

  // Cancel a booking
  async cancelBooking(bookingId: string) {
    if (!supabase) {
      console.log('Demo mode: Would cancel booking:', bookingId);
      return { data: { id: bookingId, status: 'cancelled' }, error: null };
    }
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .update({ status: 'cancelled' })
        .eq('id', bookingId)
        .select()
        .single();

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Error cancelling booking:', error);
      return { data: null, error };
    }
  }
};