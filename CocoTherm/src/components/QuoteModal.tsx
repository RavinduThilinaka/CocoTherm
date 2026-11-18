"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  MapPin,
  Layers,
} from "lucide-react";
import { PRODUCTS } from "@/data/projectData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialArea?: number;
  initialCost?: number;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialProduct = "Roof Insulation Panel",
  initialArea = 500,
  initialCost = 500000,
}: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Colombo");
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [area, setArea] = useState(initialArea);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) setSelectedProduct(initialProduct);
    if (initialArea) setArea(initialArea);
  }, [initialProduct, initialArea]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*CocoTherm InsulBoard Inquiry*%0A%0A*Name:* ${name || "Customer"}%0A*Phone:* ${phone || "Not provided"}%0A*Location:* ${location}%0A*Product:* ${selectedProduct}%0A*Area:* ${area} sq ft%0A*Notes:* ${message || "Please provide formal quotation."}`;
    window.open(`https://wa.me/94771234567?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-stone-900 text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Direct Factory Consultation
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Request a Free Quote &amp; Sample Kit
            </h3>
            <p className="text-xs text-emerald-100/80 mt-0.5">
              Manufactured in Homagama &bull; Islandwide Delivery
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">
                Thank You, {name || "Valued Customer"}!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Your quotation request for <strong>{area} sq ft</strong> of{" "}
                <strong>{selectedProduct}</strong> has been logged. Our technical team in Homagama
                will contact you within 2 working hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Continue on WhatsApp Now
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Perera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="077 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Project Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Colombo, Kandy, Galle, Homagama"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Approximate Area (Sq Ft)
                  </label>
                  <input
                    type="number"
                    min="50"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Select Board Type
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name} — LKR {prod.pricePerSqFt} / sq ft
                    </option>
                  ))}
                  <option value="Sample Kit">Request Free Sample Kit Box (All 4 types)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Additional Notes / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your roof/wall structure (asbestos, tile, zinc-alu, etc.)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quotation Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Send Direct WhatsApp Message (+94 77 123 4567)</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center pt-1">
                🔒 We respect your privacy. No spam. Free consultation &amp; installation guidance included.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
