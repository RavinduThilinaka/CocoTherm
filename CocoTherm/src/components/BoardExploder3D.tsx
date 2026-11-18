"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  Droplets,
  Flame,
  Shield,
  Maximize2,
  Minimize2,
  Check,
} from "lucide-react";

interface BoardLayer {
  id: string;
  name: string;
  role: string;
  thickness: string;
  material: string;
  benefit: string;
  icon: typeof Layers;
  accent: string;
  badge: string;
  bgGradient: string;
}

const BOARD_LAYERS: BoardLayer[] = [
  {
    id: "layer-1",
    name: "Layer 1: Botanical Hydrophobic Seal",
    role: "Weather & Monsoon Moisture Shield",
    thickness: "0.5 mm Surface Coat",
    material: "Eco-friendly non-toxic plant wax & natural resin seal",
    benefit: "Repels tropical monsoon liquid water while preserving microporous breathability",
    icon: Droplets,
    accent: "text-sky-400 border-sky-400/40 bg-sky-950/40",
    badge: "Waterproof IP-54",
    bgGradient: "from-sky-500/20 to-teal-500/20 border-sky-400/50",
  },
  {
    id: "layer-2",
    name: "Layer 2: High-Density Coir Matrix",
    role: "Core Thermal & Sound Absorber",
    thickness: "25 mm - 50 mm (1\" - 2\")",
    material: "100% Sri Lankan upcycled coconut husk coir fibre",
    benefit: "Traps still air inside micro-cellular pockets with low thermal conductivity (k = 0.038 W/mK)",
    icon: Layers,
    accent: "text-amber-400 border-amber-400/40 bg-amber-950/40",
    badge: "k = 0.038 W/mK",
    bgGradient: "from-amber-600/30 to-yellow-600/20 border-amber-500/50",
  },
  {
    id: "layer-3",
    name: "Layer 3: Plant Starch & Mineral Retardant",
    role: "Natural Fire-Retardant Binder Matrix",
    thickness: "Evenly impregnated",
    material: "Cassava/maize starch binder + non-toxic boron mineral salts",
    benefit: "Char-forming fire barrier that suppresses open flames with zero toxic cyanide gases",
    icon: Flame,
    accent: "text-rose-400 border-rose-400/40 bg-rose-950/40",
    badge: "Class B Fire Rated",
    bgGradient: "from-rose-600/20 to-orange-600/20 border-rose-400/50",
  },
  {
    id: "layer-4",
    name: "Layer 4: Calibrated Structural Vapour Backing",
    role: "Sub-Roof & Wall Mounting Face",
    thickness: "1.0 mm Calibrated Base",
    material: "High-tensile coir scrim with precision edge grooves",
    benefit: "Allows flush mounting against timber/metal battens without cracking or sagging",
    icon: Shield,
    accent: "text-emerald-400 border-emerald-400/40 bg-emerald-950/40",
    badge: "Zero-Sag Grid",
    bgGradient: "from-emerald-600/20 to-teal-600/20 border-emerald-400/50",
  },
];

export default function BoardExploder3D() {
  const [explosionLevel, setExplosionLevel] = useState<number>(75); // 0 (assembled) to 100 (exploded)
  const [selectedLayer, setSelectedLayer] = useState<string>("layer-2");

  const currentActiveLayer =
    BOARD_LAYERS.find((l) => l.id === selectedLayer) || BOARD_LAYERS[1];

  return (
    <section id="board-exploder" className="py-20 bg-stone-950 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 3D Layer Anatomy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Inside the CocoTherm Board
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Explore the four engineered layers of Sri Lanka&apos;s first closed-loop bio-insulation.
            Adjust the slider to explode and inspect each component in 3D.
          </p>

          {/* Slider & Quick Presets */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setExplosionLevel(0)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${explosionLevel === 0
                ? "bg-emerald-600 text-white"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Compact Assembled</span>
            </button>

            <div className="flex-1 w-full flex items-center gap-3">
              <span className="text-[11px] font-mono text-stone-400">0%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={explosionLevel}
                onChange={(e) => setExplosionLevel(Number(e.target.value))}
                aria-label="Explode 3D Layers Slider"
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <span className="text-[11px] font-mono text-stone-400">100%</span>
            </div>

            <button
              onClick={() => setExplosionLevel(100)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${explosionLevel === 100
                ? "bg-emerald-600 text-white"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Explode</span>
            </button>
          </div>
        </div>

        {/* 3D Visual Stage and Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Isometric View Stage (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900/80 rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden min-h-[460px] flex items-center justify-center">
            {/* Grid Floor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />

            {/* 3D Canvas / Isometric Container */}
            <div
              className="relative w-72 sm:w-88 h-72 sm:h-88 flex items-center justify-center transition-all duration-500"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {BOARD_LAYERS.map((layer, idx) => {
                const spreadDistance = (idx - 1.5) * (explosionLevel * 0.95);
                const isSelected = selectedLayer === layer.id;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer.id)}
                    style={{
                      transform: `rotateX(58deg) rotateZ(-38deg) translateZ(${spreadDistance}px)`,
                      transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                    }}
                    className={`absolute w-56 sm:w-68 h-40 sm:h-48 rounded-2xl border-2 backdrop-blur-md cursor-pointer flex flex-col justify-between p-4 shadow-2xl ${isSelected
                      ? "border-emerald-400 ring-4 ring-emerald-500/40 shadow-emerald-500/30 scale-105"
                      : "border-white/20 hover:border-white/50"
                      } ${layer.bgGradient}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-white font-bold">
                        Layer 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">
                        {layer.badge}
                      </span>
                    </div>

                    <div className="text-left">
                      <div className="text-xs font-black text-white drop-shadow-md">
                        {layer.name.replace(/Layer \d: /, "")}
                      </div>
                      <div className="text-[10px] text-stone-200 mt-0.5 font-medium">
                        {layer.thickness}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro instruction pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-stone-950/80 border border-white/10 text-[11px] text-stone-400 flex items-center gap-1.5">
              <span>Click any layer to inspect technical properties</span>
            </div>
          </div>

          {/* Right Column: Layer Inspector Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Active Layer Details */}
            <div className="rounded-3xl bg-stone-900 border border-white/15 p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <currentActiveLayer.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{currentActiveLayer.name}</h3>
                    <p className="text-xs text-stone-400">{currentActiveLayer.role}</p>
                  </div>
                </div>
                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {currentActiveLayer.badge}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-stone-400 font-semibold uppercase tracking-wider text-[10px]">
                    Calibrated Thickness
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {currentActiveLayer.thickness}
                  </div>
                </div>

                <div>
                  <div className="text-stone-400 font-semibold uppercase tracking-wider text-[10px]">
                    Eco Composition &amp; Material
                  </div>
                  <div className="text-stone-200 mt-0.5 leading-relaxed">
                    {currentActiveLayer.material}
                  </div>
                </div>

                <div>
                  <div className="text-stone-400 font-semibold uppercase tracking-wider text-[10px]">
                    Key Performance Benefit
                  </div>
                  <div className="p-3 rounded-xl bg-stone-950/70 border border-white/10 text-emerald-300 font-medium leading-relaxed mt-1 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{currentActiveLayer.benefit}</span>
                  </div>
                </div>
              </div>

              {/* Fast Selector Pills */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Switch Layer:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {BOARD_LAYERS.map((l, i) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLayer(l.id)}
                      className={`p-2 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border ${selectedLayer === l.id
                        ? "bg-emerald-600 text-white border-emerald-500"
                        : "bg-stone-950/60 text-stone-300 border-white/10 hover:bg-stone-800"
                        }`}
                    >
                      L0{i + 1}: {l.name.split(":")[1]?.trim() || l.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

