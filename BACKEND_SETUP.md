# Backend Setup Guide for Plaza Sitters Kigali

## 1. Supabase Setup

### Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and create an account
2. Create a new project (choose a region close to Rwanda, e.g., Europe)
3. Save your project URL and anon key

### Set up Database Tables
1. In your Supabase dashboard, go to SQL Editor
2. Copy and paste the contents of `supabase/schema.sql`
3. Run the SQL to create all tables and sample data

### Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Update with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

## 2. Test the Booking System

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/book-now`
3. Fill out the booking form
4. Check your Supabase dashboard to see the booking in the `bookings` table

## 3. WhatsApp Integration (Optional)

To send WhatsApp notifications when bookings are created:

### Option 1: Twilio (Recommended)
1. Create a Twilio account
2. Get WhatsApp Business API access
3. Create a Supabase Edge Function to send notifications

### Option 2: Manual Process
1. Set up Supabase Realtime to listen for new bookings
2. Create a simple admin dashboard to view new bookings
3. Manually WhatsApp parents with sitter details

## 4. Admin Dashboard

Create a simple admin page to:
- View all bookings
- Assign sitters to bookings
- Update booking status
- View sitter availability

## 5. Security Considerations

1. Enable Row Level Security (RLS) on all tables
2. Set up proper authentication for admin users
3. Use environment variables for all sensitive data
4. Enable SSL on your Supabase project

## Next Steps

1. **SMS/WhatsApp Notifications**: Integrate Twilio or Africa's Talking
2. **Payment Integration**: Add MoMo or card payments
3. **Sitter App**: Create a mobile app for sitters to manage availability
4. **Analytics**: Track popular times, areas, and sitters

## Troubleshooting

### Booking not saving?
- Check browser console for errors
- Verify Supabase URL and anon key are correct
- Check Supabase logs for any errors

### Need help?
Contact the developer or check Supabase documentation at https://supabase.com/docs