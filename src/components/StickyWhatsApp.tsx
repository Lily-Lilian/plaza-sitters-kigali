import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

// Always-visible booking button on phones.
const StickyWhatsApp = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-border">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white font-bold py-3.5"
      >
        <MessageCircle className="w-5 h-5" />
        Book on WhatsApp
      </a>
    </div>
  );
};

export default StickyWhatsApp;
