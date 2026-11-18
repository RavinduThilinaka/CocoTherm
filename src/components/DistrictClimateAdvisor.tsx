"use client";

import React, { useState } from "react";
import {
  MapPin,
  Sun,
  Droplets,
  Zap,
  TrendingDown,
  ArrowRight,
  ShieldAlert,
  Compass,
} from "lucide-react";

interface DistrictInfo {
  name: string;
  province: string;
  climateZone:
  | "Wet Zone"
  | "Dry Zone"
  | "Intermediate"
  | "Hill Country"
  | "Wet Zone Coastal";
  avgSummerTemp: string;
  relativeHumidity: string;
  recommendedBoard: string;
  boardThickness: string;
  primaryBenefit: string;
  estimatedYearlySavings: string;
  paybackMonths: string;
}

const SRI_LANKA_DISTRICTS: Record<string, DistrictInfo> = {
  colombo: {
    name: "Colombo & Gampaha",
    province: "Western Province",
    climateZone: "Wet Zone",
    avgSummerTemp: "32.5°C (Feels like 38°C)",
    relativeHumidity: "78% - 88%",
    recommendedBoard: "2-Inch CocoTherm Roof Insulation Board",
    boardThickness: "50 mm (2\") High Density",
    primaryBenefit:
      "Blocks intense downward radiant heat from upper-floor residential roofs; drastically reduces 24/7 air conditioner compressor power surge.",
    estimatedYearlySavings: "LKR 72,000 — 128,000 / year",
    paybackMonths: "14 months",
  },
  kandy: {
    name: "Kandy & Matale",
    province: "Central Province",
    climateZone: "Hill Country",
    avgSummerTemp: "28.5°C",
    relativeHumidity: "82% - 92%",
    recommendedBoard: "1-Inch Moisture-Sealed CocoTherm Roof & Wall",
    boardThickness: "25 mm (1\") Botanical Coating",
    primaryBenefit:
      "Stops moisture and dampness penetration during heavy valley rainfall while damping tin roof reverberation in boutique villas.",
    estimatedYearlySavings: "LKR 48,000 — 84,000 / year",
    paybackMonths: "16 months",
  },
  galle: {
    name: "Galle & Matara",
    province: "Southern Province",
    climateZone: "Wet Zone Coastal",
    avgSummerTemp: "31.8°C",
    relativeHumidity: "80% - 90%",
    recommendedBoard: "CocoTherm High-Density Acoustic & Roof Panel",
    boardThickness: "25 mm & 50 mm Options",
    primaryBenefit:
      "Protects luxury beach villas and eco-hotels from salt-mist deterioration, lowering AC cooling costs during peak tourist months.",
    estimatedYearlySavings: "LKR 95,000 — 160,000 / year",
    paybackMonths: "12 months",
  },
  anuradhapura: {
    name: "Anuradhapura & Polonnaruwa",
    province: "North Central Province",
    climateZone: "Dry Zone",
    avgSummerTemp: "36.2°C",
    relativeHumidity: "60% - 72%",
    recommendedBoard: "2-Inch Ultra-Thermal Heat Reflective Board",
    boardThickness: "50 mm Heavy Thermal Core",
    primaryBenefit:
      "Provides maximum resistance against extreme solar baking. Prevents concrete slab and metal roofs from storing scorching heat into the night.",
    estimatedYearlySavings: "LKR 84,000 — 145,000 / year",
    paybackMonths: "11 months",
  },
  jaffna: {
    name: "Jaffna & Kilinochchi",
    province: "Northern Province",
    climateZone: "Dry Zone",
    avgSummerTemp: "35.5°C",
    relativeHumidity: "65% - 75%",
    recommendedBoard: "2-Inch CocoTherm Thermal Barrier",
    boardThickness: "50 mm Rigid Core",
    primaryBenefit:
      "Essential protection against prolonged solar intensity and high daytime ceiling heat transfer in commercial stores and residences.",
    estimatedYearlySavings: "LKR 80,000 — 135,000 / year",
    paybackMonths: "13 months",
  },
  nuwaraeliya: {
    name: "Nuwara Eliya & Badulla",
    province: "Central Highlands",
    climateZone: "Hill Country",
    avgSummerTemp: "21.0°C (Night 9°C)",
    relativeHumidity: "85% - 95%",
    recommendedBoard: "1-Inch Condensation Barrier Wall & Ceiling Board",
    boardThickness: "25 mm Vapour-Sealed",
    primaryBenefit:
      "Prevents interior room heat from escaping during cold nights, while eliminating condensation mould under tin roof rafters.",
    estimatedYearlySavings: "LKR 42,000 — 68,000 / year (Room Heating)",
    paybackMonths: "17 months",
  },
};

interface DistrictClimateAdvisorProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function DistrictClimateAdvisor({
  onOpenQuoteModal,
}: DistrictClimateAdvisorProps) {
  const [selectedKey, setSelectedKey] = useState<string>("colombo");
  const active = SRI_LANKA_DISTRICTS[selectedKey];

  return (
    <section id="climate-advisor" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" /> Sri Lanka Regional Climate Advisor
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Tailored for Your District&apos;s Climate
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Select your location in Sri Lanka to see climate-specific heat indices, recommended board
            thickness, and estimated annual CEB electricity bill savings.
          </p>

          {/* District selector pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {Object.entries(SRI_LANKA_DISTRICTS).map(([key, district]) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${selectedKey === key
                  ? "bg-emerald-800 text-white shadow-md scale-105"
                  : "bg-white text-stone-700 hover:bg-stone-200 border border-stone-300"
                  }`}
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{district.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected District Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-stone-200 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: District Climate Stats (5 cols) */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {active.province}
                </span>
                <span className="text-xs font-semibold text-stone-500">{active.climateZone}</span>
              </div>

              <h3 className="text-2xl font-black text-stone-900">{active.name}</h3>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-stone-700 font-semibold">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span>Peak Daytime Summer Temp</span>
                  </div>
                  <span className="font-mono font-bold text-amber-900 text-sm">
                    {active.avgSummerTemp}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-stone-700 font-semibold">
                    <Droplets className="w-4 h-4 text-sky-600" />
                    <span>Average Relative Humidity</span>
                  </div>
                  <span className="font-mono font-bold text-sky-900 text-sm">
                    {active.relativeHumidity}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  <TrendingDown className="w-4 h-4" />
                  <span>Projected Savings</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-950 mt-1">
                  {active.estimatedYearlySavings}
                </div>
                <div className="text-xs text-emerald-700 mt-0.5">
                  Typical Payback Period: ~{active.paybackMonths}
                </div>
              </div>
            </div>

            {/* Right Column: Tailored Product Recommendation (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Recommended Configuration
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                  {active.recommendedBoard}
                </h4>
                <div className="text-xs font-mono font-bold text-emerald-700 mt-1">
                  Specification: {active.boardThickness}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 text-sm leading-relaxed">
                <span className="font-bold text-stone-900">Climate Defense: </span>
                {active.primaryBenefit}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900">Direct Delivery</div>
                  <div className="text-stone-500 mt-0.5">Dispatched from Homagama Factory</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900">Installation Support</div>
                  <div className="text-stone-500 mt-0.5">Approved regional contractors</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(active.recommendedBoard)}
                  className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Request Custom Quote for {active.name.split("&")[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#calculator"
                  className="px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
                >
                  Fine-tune in Calculator
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}