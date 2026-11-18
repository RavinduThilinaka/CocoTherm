"use client";

import React, { useState, useEffect } from "react";
import { Leaf, Menu, X, Phone, MessageSquare, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3"
        : "bg-white border-b border-stone-100 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:bg-emerald-800 transition-colors">
              <Leaf className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-stone-900">
                  Coco<span className="text-emerald-700">Therm</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  InsulBoard
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium -mt-0.5">
                Cooler Homes. Greener World.
              </p>
            </div>
          </a>

          {/* Standard Clean Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
            <a
              href="#"
              className="text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Home
            </a>


            <a
              href="#board-exploder"
              className="hover:text-emerald-700 transition-colors"
            >
              3D Anatomy
            </a>

            <a
              href="#products"
              className="hover:text-emerald-700 transition-colors"
            >
              Products
            </a>
            <a
              href="#calculator"
              className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 text-stone-800 font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Savings Calculator
            </a>
            <a
              href="#climate-advisor"
              className="hover:text-emerald-700 transition-colors"
            >
              Districts
            </a>
            <a
              href="#process"
              className="hover:text-emerald-700 transition-colors"
            >
              Process
            </a>
            <a
              href="#comparison"
              className="hover:text-emerald-700 transition-colors"
            >
              Why Us
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/94771234567?text=Hello%20CocoTherm%20Team%2C%20I%20would%20like%20to%20inquire%20about%20insulation%20boards."
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-emerald-800 hover:bg-emerald-50 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-lg px-5 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-stone-700">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-700 py-1"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-700 py-1"
            >
              About &amp; Sri Lankan Context
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-700 py-1"
            >
              Products &amp; Prices (LKR 800 - 1,400)
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-700 py-1 text-emerald-800 font-bold flex items-center gap-2"
            >
              ⚡ Savings &amp; Cost Calculator
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-700 py-1"
            >
              How It Works (8-Step Zero Waste)
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-700 py-1"
            >
              Why CocoTherm (Vs Synthetics &amp; Fibreglass)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-700 py-1"
            >
              Contact Homagama Plant
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm shadow-md text-center"
            >
              Get a Free Quote &amp; Sample Kit
            </button>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-stone-100 text-stone-800 font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              Chat on WhatsApp: +94 77 123 4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
