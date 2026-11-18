"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/data/projectData";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions &bull; Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Got questions about durability, moisture resistance, installation, or ordering? Here are
            the facts.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-emerald-50/40 border-emerald-300 shadow-xs"
                    : "bg-stone-50 border-stone-200 hover:bg-stone-100/70"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? "bg-emerald-700 text-white rotate-180"
                        : "bg-stone-200 text-stone-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-emerald-100/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
