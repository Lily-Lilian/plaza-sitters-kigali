-- Create tables for Plaza Sitters Kigali

-- Parents table
CREATE TABLE parents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  whatsapp VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  neighborhood VARCHAR(100) NOT NULL,
  num_kids INTEGER NOT NULL DEFAULT 1,
  kids_ages TEXT,
  is_blacklisted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sitters table
CREATE TABLE sitters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  whatsapp VARCHAR(20),
  neighborhoods TEXT[] NOT NULL,
  hourly_rate DECIMAL(10, 2) NOT NULL DEFAULT 10000,
  is_available BOOLEAN DEFAULT TRUE,
  rating DECIMAL(3, 2),
  total_bookings INTEGER DEFAULT 0,
  emergency_kit BOOLEAN DEFAULT TRUE,
  languages TEXT[] DEFAULT ARRAY['Kinyarwanda', 'English'],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID REFERENCES parents(id),
  sitter_id UUID REFERENCES sitters(id),
  parent_name VARCHAR(255) NOT NULL,
  parent_phone VARCHAR(20) NOT NULL,
  parent_email VARCHAR(255),
  date DATE NOT NULL,
  time TIME NOT NULL,
  duration INTEGER NOT NULL,
  num_kids INTEGER NOT NULL DEFAULT 1,
  location VARCHAR(100) NOT NULL,
  special_notes TEXT,
  urgency VARCHAR(20) NOT NULL DEFAULT 'normal',
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  total_price DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(20) DEFAULT 'cash',
  payment_status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT urgency_check CHECK (urgency IN ('normal', 'emergency')),
  CONSTRAINT status_check CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  CONSTRAINT payment_status_check CHECK (payment_status IN ('pending', 'paid', 'partial'))
);

-- Availability table
CREATE TABLE availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sitter_id UUID REFERENCES sitters(id) NOT NULL,
  date DATE NOT NULL,
  time_slots TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(sitter_id, date)
);

-- Reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id) NOT NULL UNIQUE,
  parent_id UUID REFERENCES parents(id) NOT NULL,
  sitter_id UUID REFERENCES sitters(id) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_bookings_date ON bookings(date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_parent_phone ON bookings(parent_phone);
CREATE INDEX idx_sitters_neighborhoods ON sitters USING GIN(neighborhoods);
CREATE INDEX idx_availability_date ON availability(date);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_parents_updated_at BEFORE UPDATE ON parents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sitters_updated_at BEFORE UPDATE ON sitters
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_availability_updated_at BEFORE UPDATE ON availability
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE sitters ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Public read access for sitters (so parents can see available sitters)
CREATE POLICY "Sitters are viewable by everyone" ON sitters
  FOR SELECT USING (true);

-- Bookings policies (for now, allow insert for everyone, restrict updates)
CREATE POLICY "Anyone can create a booking" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own bookings" ON bookings
  FOR SELECT USING (parent_phone = current_user OR true); -- Adjust based on auth

-- Sample data for testing
INSERT INTO sitters (name, phone, whatsapp, neighborhoods, hourly_rate, languages) VALUES
  ('Divine', '+250788123457', '+250788123457', ARRAY['Kimihurura', 'Kacyiru'], 10000, ARRAY['Kinyarwanda', 'English', 'French']),
  ('Sarah', '+250788123458', '+250788123458', ARRAY['Nyarutarama', 'Kimihurura'], 12000, ARRAY['Kinyarwanda', 'English']),
  ('Claudine', '+250788123459', '+250788123459', ARRAY['Remera', 'Kicukiro'], 10000, ARRAY['Kinyarwanda', 'French']),
  ('Mama Claude', '+250788123460', '+250788123460', ARRAY['Gisozi', 'Kimisagara'], 15000, ARRAY['Kinyarwanda', 'English', 'French']),
  ('Esperance', '+250788123461', '+250788123461', ARRAY['Kanombe', 'Kibagabaga'], 10000, ARRAY['Kinyarwanda', 'English']),
  ('Jeanne', '+250788123462', '+250788123462', ARRAY['Gikondo', 'Kicukiro'], 12000, ARRAY['Kinyarwanda', 'French']);