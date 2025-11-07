import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { bookingsApi } from '@/lib/api/bookings';

export function useBooking() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createBooking = async (bookingData: {
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
  }) => {
    setIsLoading(true);
    
    try {
      const { data, error } = await bookingsApi.createBooking(bookingData);
      
      if (error) {
        toast({
          title: "Booking failed",
          description: "There was an error creating your booking. Please try again.",
          variant: "destructive"
        });
        return { success: false, data: null };
      }

      toast({
        title: "Booking submitted!",
        description: "We'll WhatsApp you within 10 minutes with your sitter details.",
      });

      return { success: true, data };
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
      return { success: false, data: null };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createBooking,
    isLoading
  };
}