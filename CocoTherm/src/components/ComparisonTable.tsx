"use client";

import React from "react";
import { Check, X, Shield, Sparkles, TrendingUp } from "lucide-react";
import { COMPARISON_DATA } from "@/data/projectData";

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Market Leadership &bull; Compare Performance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why CocoTherm Beats Imported Synthetics &amp; Fibreglass
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Currently, imported synthetic insulation controls ~45% of the Sri Lankan market and
            fibreglass holds ~30%. CocoTherm disrupts both by being 100% natural, local, healthier,
            and significantly more affordable.
          </p>
        </div>

        {/* Market Share Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Imported Synthetics */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Current Competitor 1
            </span>
            <div className="text-3xl font-black text-stone-700 mt-1">~45% Market</div>
            <h4 className="font-bold text-stone-900 mt-1 text-sm">
              Imported Synthetics (Polystyrene / Polyurethane)
            </h4>
            <p className="text-xs text-stone-500 mt-2">
              High foreign exchange costs, petrochemical based, flammable, and non-biodegradable in
              landfills.
            </p>
          </div>

          {/* Card 2: Fibreglass */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Current Competitor 2
            </span>
            <div className="text-3xl font-black text-stone-700 mt-1">~30% Market</div>
            <h4 className="font-bold text-stone-900 mt-1 text-sm">
              Fibreglass / Glass Wool
            </h4>
            <p className="text-xs text-stone-500 mt-2">
              Causes severe itching, respiratory hazards during installation, and loses R-value when
              exposed to tropical humidity.
            </p>
          </div>

          {/* Card 3: CocoTherm */}
          <div className="p-6 rounded-2xl bg-emerald-800 text-white border border-emerald-900 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
              The Disruptor
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
              Our Value Proposition
            </span>
            <div className="text-3xl font-black text-white mt-1">From LKR 800</div>
            <h4 className="font-bold text-emerald-100 mt-1 text-sm">
              CocoTherm Natural Coir Board
            </h4>
            <p className="text-xs text-emerald-100/80 mt-2">
              100% Sri Lankan coconut waste, biodegradable, itch-free, plant binders, and saves up to
              30% on electricity bills.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="py-4 px-6 font-bold text-stone-300 w-1/4">Comparison Metric</th>
                  <th className="py-4 px-6 font-bold bg-emerald-800 text-white w-1/3 border-x border-emerald-700">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-300" />
                      <span>CocoTherm InsulBoard</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 font-semibold text-stone-300 w-1/5">
                    Imported Synthetics (~45%)
                  </th>
                  <th className="py-4 px-6 font-semibold text-stone-300 w-1/5">
                    Fibreglass (~30%)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {COMPARISON_DATA.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-stone-50/60"}
                  >
                    <td className="py-4 px-6 font-bold text-stone-900 text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-semibold text-emerald-950 bg-emerald-50/70 border-x border-emerald-200/80 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.cocotherm}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600 text-xs">
                      {row.importedSynthetics}
                    </td>
                    <td className="py-4 px-6 text-stone-600 text-xs">
                      {row.fibreglass}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary note */}
        <div className="mt-6 text-center text-xs text-stone-500">
          Source: Sri Lanka sustainable building insulation market analysis, Homagama R&amp;D project
          documentation.
        </div>
      </div>
    </section>
  );
}
