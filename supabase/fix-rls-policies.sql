-- Fix RLS policies to allow public access for now
-- In production, you'd want proper authentication

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can create a booking" ON bookings;
DROP POLICY IF EXISTS "Users can view their own bookings" ON bookings;

-- Parents table - allow inserts and selects
CREATE POLICY "Allow public to insert parents" ON parents
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to select parents" ON parents
  FOR SELECT USING (true);

CREATE POLICY "Allow public to update parents" ON parents
  FOR UPDATE USING (true);

-- Bookings table - allow all operations
CREATE POLICY "Allow public to insert bookings" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to select bookings" ON bookings
  FOR SELECT USING (true);

CREATE POLICY "Allow public to update bookings" ON bookings
  FOR UPDATE USING (true);

-- Reviews table - allow inserts and selects
CREATE POLICY "Allow public to insert reviews" ON reviews
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to select reviews" ON reviews
  FOR SELECT USING (true);

-- Availability table - allow all operations for sitters
CREATE POLICY "Allow public to manage availability" ON availability
  FOR ALL USING (true);