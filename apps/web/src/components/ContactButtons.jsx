
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

function ContactButtons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <a
        href="tel:+917710310888"
        className="flex items-center justify-center gap-3 bg-primary text-primary-foreground p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] group"
      >
        <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-200">
          <Phone className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="font-bold text-base leading-tight">Call Now</div>
          <div className="text-xs opacity-90 font-medium">Talk to our product expert</div>
        </div>
      </a>

      <a
        href="https://wa.me/917710310888"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] p-4 rounded-xl shadow-sm hover:shadow-md hover:brightness-110 transition-all duration-200 active:scale-[0.98] group"
      >
        <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-200">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="font-bold text-base leading-tight">WhatsApp Now</div>
          <div className="text-xs opacity-90 font-medium">Chat with us on WhatsApp</div>
        </div>
      </a>
    </div>
  );
}

export default ContactButtons;
