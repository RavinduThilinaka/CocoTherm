"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Phone, MessageSquare, ShieldCheck } from "lucide-react";

interface FloatingActionBarProps {
  onOpenQuoteModal: () => void;
}

export default function FloatingActionBar({ onOpenQuoteModal }: FloatingActionBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-xl bg-stone-900/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-stone-700 flex items-center justify-between gap-2 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="hidden sm:flex items-center gap-2 pl-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-stone-200">
          CocoTherm Factory Homagama
        </span>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <a
          href="#calculator"
          className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Calculator className="w-3.5 h-3.5 text-emerald-400" />
          <span>Calculator</span>
        </a>

        <a
          href="https://wa.me/94771234567?text=Hello%20CocoTherm%20Team%2C%20I%20am%20interested%20in%20natural%20insulation%20boards."
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
}
