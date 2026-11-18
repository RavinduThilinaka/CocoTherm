"use client";

import React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Leaf,
  DollarSign,
  Trash2,
  ShieldAlert,
  Flame,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="about" className="py-20 bg-stone-50 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5" /> Sri Lankan Context &bull; Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            The Problem We Solve. <br className="hidden sm:inline" />
            The Sustainable Future We Build.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Millions of coconut husks in Sri Lanka end up dumped or burned every year. At the same
            time, our buildings absorb intense solar radiation, forcing 24/7 air conditioning and
            reliance on toxic imported synthetic materials.
          </p>
        </div>

        {/* 2-Column Comparison with Real Visual Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: The Problem */}
          <div className="rounded-3xl bg-white border border-red-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group">
            <div>
              {/* Image Banner */}
              <div className="relative rounded-2xl overflow-hidden h-48 mb-6 border border-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
                  alt="Coconut waste problem in Sri Lanka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-red-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold bg-red-600/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> The Current Situation
                  </span>
                  <span className="text-xs text-red-100">Millions of Husks Wasted</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                High AC Bills &amp; Toxic Imported Insulation
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Surging CEB Electricity Tariffs:</strong>
                    Uninsulated zinc-aluminium, tile, and asbestos roofs bake under 35°C tropical heat,
                    forcing air conditioners to run at maximum duty cycle.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">45% Imported Synthetics &amp; 30% Fibreglass:</strong>
                    Petrochemical styrofoam and glass wool are mostly imported, draining valuable foreign
                    exchange. They cause skin itching and emit toxic gases during fire hazards.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Trash2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Abundant Untapped Coconut Waste:</strong>
                    Sri Lanka produces tons of coconut coir waste that is either incinerated or left
                    to rot in canals, missing a massive circular economic opportunity.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-100 flex items-center justify-between text-xs text-red-700 font-bold bg-red-50/70 p-3 rounded-xl">
              <span>⚠️ Result: Forex drainage &amp; uncomfortably hot buildings</span>
              <span className="text-[11px] bg-red-200 px-2 py-0.5 rounded">High Carbon</span>
            </div>
          </div>

          {/* Card 2: The Solution (CocoTherm) */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-900 to-stone-900 text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden relative group">
            <div>
              {/* Image Banner */}
              <div className="relative rounded-2xl overflow-hidden h-48 mb-6 border border-emerald-700/50">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                  alt="Natural organic coconut coir fibres"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold bg-emerald-600/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> The CocoTherm Solution
                  </span>
                  <span className="text-xs text-emerald-200">100% Sri Lankan Coir</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                CocoTherm Natural InsulBoard
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-emerald-100/90">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-700 text-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Cut AC Electricity Bills by Up to 30%:</strong>
                    Our boards create an insulating thermal barrier that drops interior temperatures
                    by 5°C - 7°C, letting air conditioning run at minimal cost.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-700 text-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Plant-Based Starch Binders &amp; Zero Formaldehyde:</strong>
                    Zero glass itch, safe to touch with bare hands, moisture-resistant coating, and
                    100% biodegradable at end of life.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-700 text-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Manufactured in Homagama, Sri Lanka:</strong>
                    Direct factory pricing starting from LKR 800/sq ft. Upcycling local coconut husk
                    waste into export-quality green building insulation.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-700/60 flex items-center justify-between text-xs text-emerald-200 font-bold bg-emerald-800/60 p-3 rounded-xl border border-emerald-600/30">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-300" /> Moisture-Proof &amp; Fire-Retardant
              </span>
              <span className="text-[11px] bg-emerald-500 text-stone-950 px-2 py-0.5 rounded font-black">
                Zero Waste Closed Loop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
