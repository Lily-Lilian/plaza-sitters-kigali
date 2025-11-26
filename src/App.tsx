import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookNow from "./pages/BookNow";
import FirstTimeGuide from "./pages/FirstTimeGuide";
import NotFound from "./pages/NotFound";
import { AdminDashboard } from "./pages/AdminDashboard";
import DemoNotice from "./components/DemoNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/first-time-guide" element={<FirstTimeGuide />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <DemoNotice />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
