import { AlertCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const DemoNotice = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const isConfigured = import.meta.env.VITE_SUPABASE_URL && 
                      import.meta.env.VITE_SUPABASE_URL !== 'your_supabase_project_url';
  
  if (isConfigured || !isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 shadow-lg z-50">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold text-yellow-800 mb-1">Demo Mode Active</h4>
          <p className="text-sm text-yellow-700 mb-2">
            The booking system is in demo mode. Bookings won't be saved to a database.
          </p>
          <p className="text-xs text-yellow-600">
            To enable real bookings, configure Supabase in your .env file.
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="p-1"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default DemoNotice;