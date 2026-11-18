"use client";

import React, { useState, useEffect } from "react";
import {
  Volume2,
  VolumeX,
  CloudRain,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  Play,
  Square,
} from "lucide-react";

export default function SoundSimulator() {
  const [isInsulated, setIsInsulated] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [rainIntensity, setRainIntensity] = useState<"drizzle" | "heavy" | "monsoon">("monsoon");

  // Dynamic animation bars height
  const [waveHeights, setWaveHeights] = useState<number[]>([
    20, 35, 50, 45, 60, 30, 70, 85, 40, 65, 55, 30, 45, 60, 25, 40,
  ]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setWaveHeights((prev) =>
        prev.map(() => {
          if (!isInsulated) {
            // High erratic spikes (85 dB)
            return Math.floor(Math.random() * 65) + 35;
          } else {
            // Muffled low gentle waves (42 dB)
            return Math.floor(Math.random() * 25) + 10;
          }
        })
      );
    }, 180);

    return () => clearInterval(interval);
  }, [isPlaying, isInsulated]);

  const soundData = {
    bare: {
      db: rainIntensity === "monsoon" ? 84 : rainIntensity === "heavy" ? 76 : 65,
      label: "Heavy Metal Rattle & Echo",
      status: "Deafening Noise Level",
      statusColor: "text-rose-400 bg-rose-500/20 border-rose-500/40",
      description:
        "Tropical rain striking corrugated zinc-alum or asbestos roofs acts as an acoustic drum, radiating 80+ dB sound through ceilings. Causes sleep disruption, stress, and prevents phone calls.",
    },
    insulated: {
      db: rainIntensity === "monsoon" ? 42 : rainIntensity === "heavy" ? 36 : 28,
      label: "Gentle Distant Whisper",
      status: "Whisper-Quiet Ambient",
      statusColor: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40",
      description:
        "CocoTherm's high-density open-pore coconut coir fibres absorb and dissipate vibrational impact energy. Rain noise is absorbed at the roofline, keeping bedrooms and hotel chalets peacefully silent.",
    },
  };

  const currentProfile = isInsulated ? soundData.insulated : soundData.bare;

  return (
    <section id="sound-simulator" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <CloudRain className="w-3.5 h-3.5" /> Monsoon Acoustic Attenuation Demo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Silence the Sri Lankan Monsoon
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Compare roof acoustic vibrations during tropical downpours. See how natural coconut
            coir absorbs up to 42 decibels of rain impact noise.
          </p>
        </div>

        {/* Interactive Audio Waveform Stage */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-stone-950 border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Play/Stop Simulation Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${isPlaying
                  ? "bg-rose-600 hover:bg-rose-500 text-white"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white"
                  }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-4 h-4 fill-current" />
                    <span>Stop Waveform</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run Waveform Simulator</span>
                  </>
                )}
              </button>

              <div className="text-xs text-stone-400 font-mono">
                {isPlaying ? "Simulating Live Spectrum..." : "Press Play to test"}
              </div>
            </div>

            {/* Rain Intensity Selector */}
            <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-xl border border-white/10">
              {(["drizzle", "heavy", "monsoon"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setRainIntensity(mode)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${rainIntensity === mode
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-stone-400 hover:text-white"
                    }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle between Bare Roof vs Insulated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setIsInsulated(false)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${!isInsulated
                ? "bg-rose-950/40 border-rose-500 ring-2 ring-rose-500/40 shadow-lg"
                : "bg-stone-900/60 border-white/10 opacity-70 hover:opacity-100"
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4" /> Bare Zinc-Alum / Tin Roof
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {soundData.bare.db} dB
                </span>
              </div>
              <div className="text-lg font-black text-white">Deafening Echo</div>
              <div className="text-xs text-stone-300 mt-1">High acoustic reverberation</div>
            </button>

            <button
              onClick={() => setIsInsulated(true)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${isInsulated
                ? "bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/40 shadow-lg"
                : "bg-stone-900/60 border-white/10 opacity-70 hover:opacity-100"
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <VolumeX className="w-4 h-4" /> With CocoTherm Acoustic Board
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {soundData.insulated.db} dB
                </span>
              </div>
              <div className="text-lg font-black text-white">Silent &amp; Muffled</div>
              <div className="text-xs text-stone-300 mt-1">NRC 0.65 acoustic absorption</div>
            </button>
          </div>

          {/* Sound Waveform Visualization Bar */}
          <div className="p-6 rounded-2xl bg-stone-900/90 border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-mono text-stone-300">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>FREQUENCY BAND: 125 Hz — 4000 Hz</span>
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${currentProfile.statusColor}`}
              >
                {currentProfile.status}
              </span>
            </div>

            {/* Simulated Animated Equalizer Bars */}
            <div className="h-28 flex items-end justify-between gap-1.5 px-2 bg-stone-950/80 rounded-xl p-3 border border-white/5">
              {waveHeights.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${isPlaying ? h : isInsulated ? 18 : 60}%` }}
                  className={`flex-1 rounded-t-md transition-all duration-200 ${!isInsulated
                    ? "bg-gradient-to-t from-orange-500 to-rose-500"
                    : "bg-gradient-to-t from-teal-500 to-emerald-400"
                    }`}
                />
              ))}
            </div>

            {/* Decibel Meter & Description */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
              <div className="sm:col-span-4 p-4 rounded-xl bg-stone-950 border border-white/10 text-center">
                <div className="text-[11px] uppercase tracking-wider text-stone-400 font-bold">
                  Measured Interior Sound Level
                </div>
                <div
                  className={`text-3xl sm:text-4xl font-black font-mono mt-1 ${isInsulated ? "text-emerald-400" : "text-rose-400"
                    }`}
                >
                  {currentProfile.db} <span className="text-base font-sans font-bold">dB</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {isInsulated ? "-42 dB Noise Damping" : "Unmitigated Impact Noise"}
                </div>
              </div>

              <div className="sm:col-span-8 text-xs text-stone-300 leading-relaxed">
                {currentProfile.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

