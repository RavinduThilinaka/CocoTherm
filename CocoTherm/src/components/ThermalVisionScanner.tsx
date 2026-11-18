"use client";

import React, { useState } from "react";
import {
  Thermometer,
  Flame,
  Snowflake,
  Sliders,
  ShieldCheck,
  TrendingDown,
  Info,
  Layers,
} from "lucide-react";

export default function ThermalVisionScanner() {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [activeRoofType, setActiveRoofType] = useState<"asbestos" | "zincalum" | "tile">("zincalum");

  const roofSpecs = {
    zincalum: {
      name: "Zinc-Alum / Corrugated Tin",
      bareTemp: "51.4°C",
      bareCeiling: "39.2°C",
      cocoTemp: "23.8°C",
      heatCut: "27.6°C",
      acDutyCycle: "Drops from 92% to 32%",
      color: "from-red-600 via-orange-500 to-amber-400",
    },
    asbestos: {
      name: "Asbestos / Corrugated Sheet",
      bareTemp: "47.8°C",
      bareCeiling: "37.5°C",
      cocoTemp: "23.4°C",
      heatCut: "24.4°C",
      acDutyCycle: "Drops from 84% to 28%",
      color: "from-rose-600 via-amber-500 to-yellow-400",
    },
    tile: {
      name: "Clay Tile / Calicut Roofing",
      bareTemp: "44.6°C",
      bareCeiling: "35.1°C",
      cocoTemp: "22.9°C",
      heatCut: "21.7°C",
      acDutyCycle: "Drops from 76% to 25%",
      color: "from-orange-600 via-amber-500 to-emerald-400",
    },
  };

  const current = roofSpecs[activeRoofType];

  return (
    <section id="thermal-scanner" className="py-20 bg-stone-900 text-white overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-950/40 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Thermometer className="w-3.5 h-3.5" /> Interactive FLIR Thermal Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            See the Heat Barrier in Action
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Slide horizontally to inspect the infrared heat signature. Drag the slider to compare an
            unprotected Sri Lankan roof with a roof insulated by CocoTherm InsulBoard.
          </p>

          {/* Roof Material Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(["zincalum", "asbestos", "tile"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveRoofType(type)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeRoofType === type
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 scale-105"
                  : "bg-stone-800 text-stone-300 hover:bg-stone-700 border border-white/10"
                  }`}
              >
                {roofSpecs[type].name}
              </button>
            ))}
          </div>
        </div>

        {/* The Interactive Thermal Scanner Stage */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/20 bg-stone-950 shadow-2xl relative">
          {/* Top Bar with Status Indicators */}
          <div className="bg-stone-900/90 border-b border-white/10 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                <Flame className="w-4 h-4" /> Left: Uninsulated Roof ({current.bareCeiling})
              </span>
              <span className="text-stone-500 hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Snowflake className="w-4 h-4" /> Right: CocoTherm Protected ({current.cocoTemp})
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-stone-400">
              <Sliders className="w-3.5 h-3.5 text-emerald-400" />
              <span>DRAG SLIDER TO INSPECT</span>
            </div>
          </div>

          {/* Visual Heatmap Canvas Container */}
          <div className="relative h-[380px] sm:h-[460px] select-none overflow-hidden bg-stone-950">
            {/* Left Layer: Uninsulated Infrared Hot Zone */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-700 to-amber-700 flex flex-col justify-between p-6 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-red-400/40 text-red-200 text-xs font-bold">
                  <Flame className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>BARE ROOF &bull; INTENSE HEAT SOAK</span>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-red-200 font-bold">Peak Surface</div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono">{current.bareTemp}</div>
                </div>
              </div>

              {/* Heat waves simulation */}
              <div className="space-y-4 my-auto max-w-sm">
                <div className="p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-rose-100">
                    <span>Ceiling Temp</span>
                    <span className="font-mono font-bold text-white text-sm">{current.bareCeiling}</span>
                  </div>
                  <div className="w-full bg-red-950/80 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-full w-[94%]" />
                  </div>
                  <p className="text-[11px] text-red-100 leading-tight">
                    Severe radiant heat downward emission. Bedrooms stay hot past 11:00 PM.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 backdrop-blur-sm border border-red-500/30 text-xs text-rose-200 font-semibold flex items-center gap-2">
                  <Info className="w-4 h-4 text-red-400 shrink-0" />
                  <span>AC Compressor Duty Cycle: 85% - 95% constant load</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-red-200/80">
                FLIR Spectrum: 8 - 14 µm Longwave Infrared (LWIR)
              </div>
            </div>

            {/* Right Layer: CocoTherm Thermal Barrier (Clipped by slider position) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-950 to-stone-950 flex flex-col justify-between p-6 sm:p-10"
              style={{
                clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left" style={{ marginLeft: `${Math.max(sliderPos, 10)}%` }}>
                  {/* Empty spacer to align with slide */}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-xs font-bold">
                  <Snowflake className="w-4 h-4 text-emerald-400" />
                  <span>COCOTHERM BOARD &bull; NATURAL COOL ZONE</span>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Ceiling Temp</div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono">{current.cocoTemp}</div>
                </div>
              </div>

              {/* Cool metrics */}
              <div className="space-y-4 my-auto max-w-sm ml-auto">
                <div className="p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-emerald-200">
                    <span>Heat Drop</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">-{current.heatCut}</span>
                  </div>
                  <div className="w-full bg-emerald-950/80 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full w-[32%]" />
                  </div>
                  <p className="text-[11px] text-stone-200 leading-tight">
                    Natural porous coir fibre traps stagnant air cells with k=0.038 W/mK conductivity.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 backdrop-blur-sm border border-emerald-500/30 text-xs text-emerald-200 font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{current.acDutyCycle}</span>
                </div>
              </div>

              <div className="text-right text-[11px] font-mono text-emerald-300/80">
                100% Upcycled Coconut Coir &bull; Zero Plastic Foams
              </div>
            </div>

            {/* The Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none z-30"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-stone-900 shadow-2xl flex items-center justify-center font-bold text-xs border-2 border-emerald-500">
                <Sliders className="w-4 h-4 text-emerald-700" />
              </div>
            </div>

            {/* Invisible Range Input for Smooth Drag / Touch */}
            <input
              type="range"
              min="2"
              max="98"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Thermal Scanner Comparison Slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            />
          </div>

          {/* Bottom Bar: Key Insights */}
          <div className="bg-stone-900 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <TrendingDown className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white">Up to 27°C Temperature Delta</div>
                <div className="text-stone-400 text-[11px]">Prevents heat radiating into upper bedrooms</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white">Standard 1&quot; &amp; 2&quot; Thickness</div>
                <div className="text-stone-400 text-[11px]">Snaps directly below timber or metal rafters</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white">Non-Toxic &amp; Zero VOC</div>
                <div className="text-stone-400 text-[11px]">Clean indoor air quality with zero fiberglass itch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

