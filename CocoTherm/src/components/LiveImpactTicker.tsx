"use client";

import React, { useState, useEffect } from "react";
import { TreePine, Zap, RefreshCw, Award, TrendingUp, Sparkles } from "lucide-react";

export default function LiveImpactTicker() {
  const [huskCount, setHuskCount] = useState(148520);
  const [co2Saved, setCo2Saved] = useState(89.4);
  const [activeMode, setActiveMode] = useState<"current" | "projected">("current");

  // Subtle real-time live pulse incrementing counter
  useEffect(() => {
    const interval = setInterval(() => {
      setHuskCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setCo2Saved((prev) => +(prev + 0.002).toFixed(3));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stats =
    activeMode === "current"
      ? [
          {
            icon: RefreshCw,
            value: huskCount.toLocaleString(),
            suffix: "",
            label: "Coconut Husks Repurposed",
            sub: "Diverted from Sri Lankan open-burning & dumps",
            color: "text-emerald-400",
            bg: "bg-emerald-950/60 border-emerald-500/30",
          },
          {
            icon: TreePine,
            value: `${co2Saved.toFixed(1)}`,
            suffix: " Tons",
            label: "CO₂ Emissions Prevented",
            sub: "Carbon sequestered inside durable coir boards",
            color: "text-emerald-300",
            bg: "bg-emerald-950/60 border-emerald-500/30",
          },
          {
            icon: Zap,
            value: "30%",
            suffix: " Avg",
            label: "Air-Con Electricity Reduction",
            sub: "Lower peak kilowatt consumption during 11 AM - 3 PM",
            color: "text-amber-300",
            bg: "bg-amber-950/60 border-amber-500/30",
          },
          {
            icon: Award,
            value: "100%",
            suffix: " Sri Lankan",
            label: "Zero Forex Import Dependency",
            sub: "Engineered in Homagama using islandwide raw coir",
            color: "text-emerald-300",
            bg: "bg-emerald-950/60 border-emerald-500/30",
          },
        ]
      : [
          {
            icon: RefreshCw,
            value: "2,400,000+",
            suffix: "",
            label: "2028 Target Husk Repurposing",
            sub: "Expanding collection to Kurunegala Coconut Triangle",
            color: "text-emerald-400",
            bg: "bg-emerald-950/60 border-emerald-500/30",
          },
          {
            icon: TreePine,
            value: "1,450",
            suffix: " Tons",
            label: "2028 Carbon Sequestration",
            sub: "Eligible for international voluntary carbon credits",
            color: "text-emerald-300",
            bg: "bg-emerald-950/60 border-emerald-500/30",
          },
          {
            icon: Zap,
            value: "LKR 45M+",
            suffix: " / yr",
            label: "National Grid Power Savings",
            sub: "Reduced strain on Ceylon Electricity Board capacity",
            color: "text-amber-300",
            bg: "bg-amber-950/60 border-amber-500/30",
          },
          {
            icon: Award,
            value: "17,000",
            suffix: " Boards",
            label: "Annual Production Target",
            sub: "Supplying domestic projects + Maldives export",
            color: "text-emerald-300",
            bg: "bg-emerald-950/60 border-emerald-500/30",
          },
        ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-stone-900/95 backdrop-blur-xl border border-white/15 p-5 sm:p-7 shadow-2xl text-white">
        {/* Top Header bar with live pulse & toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-400">
                  Live Circular Economy Ticker
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                  Realtime Feed
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                Every board produced prevents organic coconut waste from rotting in landfills
              </p>
            </div>
          </div>

          {/* Toggle pill */}
          <div className="inline-flex p-1 bg-stone-950/80 rounded-xl border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveMode("current")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeMode === "current"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              Current Homagama Metrics
            </button>
            <button
              onClick={() => setActiveMode("projected")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                activeMode === "projected"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              <TrendingUp className="w-3 h-3" />
              <span>2028 Scale Forecast</span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border ${s.bg} backdrop-blur-md hover:border-emerald-400/50 transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-emerald-300" />
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-300 transition-colors" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span className={s.color}>{s.value}</span>
                  <span className="text-xs font-semibold text-stone-300">{s.suffix}</span>
                </div>
                <div className="text-xs font-bold text-stone-200 mt-1">{s.label}</div>
                <div className="text-[11px] text-stone-400 mt-1 leading-snug">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

