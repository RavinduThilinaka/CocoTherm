"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  Zap,
  TrendingDown,
  Clock,
  Sparkles,
  ArrowRight,
  Check,
  Share2,
  TreePine,
} from "lucide-react";
import { PRODUCTS } from "@/data/projectData";

interface EnergyCalculatorProps {
  onSelectProductForQuote: (productName: string, area: number, totalCost: number) => void;
}

export default function EnergyCalculator({
  onSelectProductForQuote,
}: EnergyCalculatorProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>("roof-insulation");
  const [areaSqFt, setAreaSqFt] = useState<number>(650);
  const [boardSizeOption, setBoardSizeOption] = useState<"2x4" | "4x8">("2x4");
  const [buildingType, setBuildingType] = useState<string>("residential");
  const [hoursPerDayAc, setHoursPerDayAc] = useState<number>(8);

  const selectedProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[1],
    [selectedProductId]
  );

  // Calculations
  const sqFtPerBoard = boardSizeOption === "2x4" ? 8 : 32;
  const rawBoards = Math.ceil((areaSqFt * 1.05) / sqFtPerBoard); // with 5% cutting contingency
  const totalCostLKR = areaSqFt * selectedProduct.pricePerSqFt;

  // AC Energy & Cost Model for Sri Lanka (CEB tariff ~ LKR 55/kWh avg tier)
  // 1 ton (12,000 BTU) AC covers roughly 150-180 sq ft in tropical climate
  // Draws approx 1.1 kW.
  const tonsNeeded = areaSqFt / 160;
  const kwDraw = tonsNeeded * 1.1;
  const monthlyKwhUninsulated = kwDraw * hoursPerDayAc * 30 * 0.75; // duty cycle 75%
  // With CocoTherm 30% reduction (or 25% for wall)
  const reductionFactor = selectedProductId === "roof-insulation" ? 0.3 : 0.25;
  const kwhSavedMonthly = monthlyKwhUninsulated * reductionFactor;
  const cebTariffRate = buildingType === "commercial" ? 65 : 55; // LKR per kWh
  const monthlySavingsLKR = Math.round(kwhSavedMonthly * cebTariffRate);
  const annualSavingsLKR = monthlySavingsLKR * 12;

  // Payback period in months
  const paybackMonths =
    monthlySavingsLKR > 0 ? (totalCostLKR / monthlySavingsLKR).toFixed(1) : "0";

  // Environmental impact estimates
  const husksRecycled = Math.round(areaSqFt * 1.25);
  const co2SavedKgYearly = Math.round(kwhSavedMonthly * 12 * 0.68); // ~0.68 kg CO2 per kWh in SL grid

  const handleShareWhatsApp = () => {
    const text = `*CocoTherm InsulBoard Estimate*%0AProduct: ${selectedProduct.name}%0AArea: ${areaSqFt} sq ft%0ATotal Cost: LKR ${totalCostLKR.toLocaleString()}%0AEst. Monthly AC Saving: LKR ${monthlySavingsLKR.toLocaleString()}%0APayback: ~${paybackMonths} months%0AFactoried in Homagama, Sri Lanka.%0ACheck details at CocoTherm.`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> Interactive Sri Lanka Energy &amp; ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Electricity Savings &amp; Board Requirements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300">
            See exactly how much you invest, how many boards you need, and how much you will
            save on your monthly CEB electricity bill.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-stone-700 shadow-xl space-y-6">
            {/* Step 1: Building Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "residential", label: "Residential Home" },
                  { id: "resort", label: "Eco Resort / Villa" },
                  { id: "commercial", label: "Commercial / Office" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setBuildingType(type.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      buildingType === type.id
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40 border border-emerald-400"
                        : "bg-stone-700/60 text-stone-300 hover:bg-stone-700 border border-stone-600"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Product Board */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">
                  2. Choose CocoTherm Board
                </label>
                <span className="text-xs text-amber-400 font-medium">
                  {selectedProduct.badge || "Factory Direct"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedProductId === prod.id
                        ? "bg-emerald-950/70 border-emerald-500 shadow-md text-white"
                        : "bg-stone-700/40 border-stone-600/80 hover:bg-stone-700/70 text-stone-300"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-sm text-stone-100">{prod.name}</div>
                      {selectedProductId === prod.id && (
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <div className="mt-2 flex justify-between items-center text-xs">
                      <span className="text-stone-400">LKR {prod.pricePerSqFt} / sq ft</span>
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-stone-800 text-emerald-300 border border-stone-600">
                        {prod.id === "roof-insulation" ? "Up to -30% AC" : "Up to -25% AC"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Area to Insulate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">
                  3. Total Surface Area (Roof or Walls)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="50"
                    max="10000"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Math.max(50, Number(e.target.value) || 50))}
                    className="w-24 px-2.5 py-1 text-sm font-bold text-right bg-stone-900 border border-stone-600 rounded-lg text-emerald-400 focus:outline-hidden focus:border-emerald-400"
                  />
                  <span className="text-xs text-stone-400 font-semibold">sq ft</span>
                </div>
              </div>

              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] text-stone-400 mt-1.5">
                <span>100 sq ft (Single Room)</span>
                <span>650 sq ft (Typical Apartment / Roof)</span>
                <span>3,000+ sq ft (Bungalow / Villa)</span>
              </div>
            </div>

            {/* Step 4: Board Size Preference & AC Usage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Board Size Dimension
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setBoardSizeOption("2x4")}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border cursor-pointer ${
                      boardSizeOption === "2x4"
                        ? "bg-emerald-600 text-white border-emerald-400"
                        : "bg-stone-700/50 text-stone-300 border-stone-600"
                    }`}
                  >
                    2 ft × 4 ft (8 sq ft)
                  </button>
                  <button
                    onClick={() => setBoardSizeOption("4x8")}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border cursor-pointer ${
                      boardSizeOption === "4x8"
                        ? "bg-emerald-600 text-white border-emerald-400"
                        : "bg-stone-700/50 text-stone-300 border-stone-600"
                    }`}
                  >
                    4 ft × 8 ft (32 sq ft)
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">
                    Daily AC Usage
                  </label>
                  <span className="text-xs text-emerald-400 font-bold">
                    {hoursPerDayAc} hrs / day
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="2"
                  value={hoursPerDayAc}
                  onChange={(e) => setHoursPerDayAc(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Real-time Calculation Summary (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-emerald-950 via-stone-800 to-stone-900 rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-stone-700">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Calculation Summary
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {selectedProduct.name}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                  {areaSqFt} sq ft
                </span>
              </div>

              {/* Cost & Boards Metrics */}
              <div className="py-6 space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">
                      Estimated Material Cost (Factory Direct)
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      LKR {totalCostLKR.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400 pb-1">
                    @ LKR {selectedProduct.pricePerSqFt}/sq ft
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-stone-300 font-medium">Required Boards ({boardSizeOption} ft):</span>
                  <span className="text-emerald-400 font-bold text-base">
                    ~{rawBoards} Boards{" "}
                    <span className="text-[11px] text-stone-400 font-normal">(incl. 5% cut)</span>
                  </span>
                </div>

                {/* Savings Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-emerald-900/60 border border-emerald-600/40">
                    <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-semibold">
                      <TrendingDown className="w-4 h-4" /> Monthly AC Saving
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">
                      LKR {monthlySavingsLKR.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-emerald-200/70 mt-0.5">
                      ~{Math.round(kwhSavedMonthly)} kWh / month
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-800/90 border border-amber-500/30">
                    <div className="flex items-center gap-1.5 text-amber-300 text-xs font-semibold">
                      <Zap className="w-4 h-4" /> Annual Savings
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">
                      LKR {annualSavingsLKR.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-amber-200/70 mt-0.5">
                      Per Year in CEB Bills
                    </div>
                  </div>
                </div>

                {/* Payback duration */}
                <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-stone-300">Estimated Payback Period:</span>
                  </div>
                  <span className="text-sm font-extrabold text-emerald-400">
                    ~{paybackMonths} Months
                  </span>
                </div>

                {/* Eco Impact Stats */}
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-stone-300">
                    <TreePine className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Coconut Husks Upcycled:</span>
                  </div>
                  <span className="font-bold text-emerald-300">~{husksRecycled} Husks</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-stone-700">
                <button
                  onClick={() =>
                    onSelectProductForQuote(
                      selectedProduct.name,
                      areaSqFt,
                      totalCostLKR
                    )
                  }
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Official Factory Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Share Estimate to WhatsApp</span>
                </button>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 text-center">
              *Calculations are based on average tropical heat dissipation and standard Sri Lankan CEB
              rates. Actual savings vary by ceiling height, room volume, and window glazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
