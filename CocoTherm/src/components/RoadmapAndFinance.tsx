"use client";

import React from "react";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Factory,
  Globe2,
  CheckCircle,
  Clock,
  Coins,
} from "lucide-react";
import { TIMELINE_MILESTONES, FINANCIAL_HIGHLIGHTS } from "@/data/projectData";

export default function RoadmapAndFinance() {
  return (
    <section id="roadmap" className="py-20 bg-stone-100/60 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" /> Project Timeline &amp; Financials &bull; Strategy &amp; Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Strategic Roadmap (2026 - 2031) &amp; Economics
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            A transparent, pragmatic financial and operational path from Homagama pilot facility to
            regional export across South Asian tropical markets.
          </p>
        </div>

        {/* 5-Year Roadmap Timeline */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-stone-300 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.year}
                className={`rounded-2xl p-5 border transition-all ${
                  milestone.year === "2026"
                    ? "bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/30"
                    : "bg-white text-stone-900 border-stone-200 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xl font-black ${
                      milestone.year === "2026" ? "text-emerald-300" : "text-emerald-800"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      milestone.year === "2026"
                        ? "bg-emerald-600 text-white"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {milestone.badge}
                  </span>
                </div>

                <h4
                  className={`font-bold text-sm leading-snug mb-2 ${
                    milestone.year === "2026" ? "text-white" : "text-stone-900"
                  }`}
                >
                  {milestone.title}
                </h4>

                <p
                  className={`text-xs leading-relaxed ${
                    milestone.year === "2026" ? "text-emerald-100/80" : "text-stone-600"
                  }`}
                >
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Money in Short (Financial Summary) */}
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
              The Money, In Short &bull; Financial Highlights
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              Capital Structure &amp; 3-Year Sales Forecast
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Low fixed overheads, circular zero-waste inputs, and clear path to profitability by
              Year 3.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Capital Requirement (5 cols) */}
            <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-bold text-stone-500 uppercase">
                  Total Investment Needed
                </span>
                <span className="text-2xl font-black text-emerald-800">
                  {FINANCIAL_HIGHLIGHTS.totalInvestment}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-stone-200">
                  <span className="font-semibold text-stone-700">Own Equity Funds:</span>
                  <span className="font-bold text-stone-900">
                    {FINANCIAL_HIGHLIGHTS.equityCapital}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-stone-200">
                  <span className="font-semibold text-stone-700">Bank Loan Financing:</span>
                  <span className="font-bold text-stone-900">
                    {FINANCIAL_HIGHLIGHTS.debtFinancing}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-950 border border-emerald-200">
                  <strong className="block text-emerald-900 mb-0.5">Asset Allocation:</strong>
                  <span>{FINANCIAL_HIGHLIGHTS.machineryAllocation}</span>
                </div>
              </div>
            </div>

            {/* Sales Projections (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Revenue &amp; Production Forecast (Years 1 - 3)
              </h4>

              <div className="space-y-3">
                {FINANCIAL_HIGHLIGHTS.projectedSales.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-stone-500">{item.year}</div>
                      <div className="text-xl font-black text-stone-900 mt-0.5">
                        {item.sales}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-stone-600">
                        <span className="font-bold text-stone-900 block">{item.volume}</span>
                        <span>Annual Capacity</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Profitability milestone banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white flex items-start gap-3">
                <Coins className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-emerald-100">
                  <strong className="text-white block font-bold mb-0.5">
                    Profitability Milestone (Year 3):
                  </strong>
                  Planned setup investment in Years 1-2 with small losses; first net profit occurs in
                  Year 3 at approximately{" "}
                  <strong className="text-amber-300">LKR 439,000 after-tax net profit</strong> as
                  volume achieves 17,000 units.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
