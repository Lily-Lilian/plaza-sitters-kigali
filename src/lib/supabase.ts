import { createClient } from '@supabase/supabase-js';

// These should be in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if we have valid Supabase credentials
const hasValidCredentials = 
  supabaseUrl && 
  supabaseUrl !== 'your_supabase_project_url' && 
  supabaseUrl.startsWith('http') &&
  supabaseAnonKey && 
  supabaseAnonKey !== 'your_supabase_anon_key';

if (!hasValidCredentials) {
  console.warn(`
    ⚠️ Supabase is not configured!
    
    To enable booking functionality:
    1. Create a free account at https://supabase.com
    2. Create a new project
    3. Update your .env file with:
       VITE_SUPABASE_URL=https://your-project.supabase.co
       VITE_SUPABASE_ANON_KEY=your-anon-key
    
    For now, the booking form will work in demo mode.
  `);
}

// Create a dummy client for development without Supabase
export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database types
export interface Booking {
  id?: string;
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
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  total_price: number;
  sitter_id?: string;
  created_at?: string;
}

export interface Parent {
  id?: string;
  name: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  neighborhood: string;
  num_kids: number;
  kids_ages?: string;
  is_blacklisted?: boolean;
  created_at?: string;
}

export interface Sitter {
  id?: string;
  name: string;
  phone: string;
  whatsapp?: string;
  neighborhoods: string[];
  hourly_rate: number;
  is_available: boolean;
  rating?: number;
  total_bookings?: number;
  created_at?: string;
}

export interface Availability {
  id?: string;
  sitter_id: string;
  date: string;
  time_slots: string[];
  created_at?: string;
}