"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  TrendingDown,
  Layers,
  Factory,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sun,
  Leaf,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const HERO_SLIDES = [
  {
    image: "/image1.jpeg",
    title: "CocoTherm Eco-Friendly Insulation",
    badge: "01 / Sri Lankan Coconut Innovation",
  },
  {
    image: "/image2.jpeg",
    title: "Roof & Wall Thermal Barrier",
    badge: "02 / Up to 30% AC Bill Reduction",
  },
  {
    image: "/image3.jpeg",
    title: "Homagama Factory Zero-Waste Board",
    badge: "03 / 100% Biodegradable & Local",
  },
];

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-swap every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-[660px] lg:min-h-[740px] flex items-center overflow-hidden py-16 lg:py-24 text-white bg-black">
      {/* 3 Full-Bleed Auto-Swapping Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading={idx === 0 ? "eager" : "lazy"}
              className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                currentSlide === idx ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Single minimal overlay — just enough for text legibility, image fully visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/10 z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-1 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-400/50 text-emerald-300 text-xs sm:text-sm font-semibold shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Homagama Factory, Sri Lanka</span>
              <span className="text-emerald-400/60">&bull;</span>
              <span className="text-stone-100 font-medium">100% Upcycled Coconut Husk</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
              Cooler Homes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">
                Greener World.
              </span>
            </h1>

            {/* English Tagline */}
            <p className="text-base sm:text-lg font-semibold text-emerald-300 drop-shadow-md">
              Naturally Cool Living &bull; Premium Thermal Insulation from 100% Upcycled Coconut Coir
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-100 max-w-2xl leading-relaxed drop-shadow-sm font-normal">
              Our small factory in Homagama turns abundant Sri Lankan coconut husk waste into
              commercial-grade thermal insulation boards for roofs and walls. Keep your rooms
              naturally cool and{" "}
              <strong className="text-emerald-300 font-bold underline decoration-emerald-400 decoration-2">
                cut air conditioning electricity bills by up to 30%
              </strong>
              .
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-100 font-semibold bg-stone-900/80 backdrop-blur-md p-2.5 rounded-xl border border-white/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Natural Starch &amp; Coir (Zero Itch)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-100 font-semibold bg-stone-900/80 backdrop-blur-md p-2.5 rounded-xl border border-white/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Drops Room Temp by 5°C - 7°C</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-100 font-semibold bg-stone-900/80 backdrop-blur-md p-2.5 rounded-xl border border-white/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Factory Price from LKR 800/sq ft</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-100 font-semibold bg-stone-900/80 backdrop-blur-md p-2.5 rounded-xl border border-white/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Waste Closed-Loop Production</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Calculate Your Bill Savings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                className="px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-900 text-white font-bold text-sm border border-white/20 backdrop-blur-md shadow-xs transition-colors flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-emerald-300" />
                <span>View Products (LKR 800 - 1,400)</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-3.5 text-xs font-bold text-stone-200 hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Request Sample Kit</span>
              </button>
            </div>

            {/* Trust and Distribution Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-stone-300 font-medium border-t border-white/15">
              <span className="flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-emerald-400" /> Homagama Plant
              </span>
              <span>&bull;</span>
              <span>Colombo, Kandy, Galle Delivery</span>
              <span>&bull;</span>
              <span className="text-white font-semibold">Available on Daraz.lk &amp; Ikman.lk</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card & Animated Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/25 bg-stone-950/85 backdrop-blur-xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                      CT
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">CocoTherm InsulBoard</h3>
                      <p className="text-xs text-stone-400">Homagama Factory Specification</p>
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/40">
                    From LKR 800
                  </span>
                </div>

                {/* Micro Diagram Layers */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-950/75 border border-emerald-600/40 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-emerald-300">1. Eco Hydrophobic Coating</div>
                      <div className="text-[11px] text-stone-300">Repels tropical monsoon dampness</div>
                    </div>
                    <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded font-semibold">
                      Waterproof
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/75 border border-amber-600/40 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-amber-300">2. High-Density Coir Matrix</div>
                      <div className="text-[11px] text-stone-300">Natural plant starch binder (Zero Itch)</div>
                    </div>
                    <span className="text-[10px] bg-amber-800 text-amber-200 px-2 py-0.5 rounded font-semibold">
                      k = 0.038
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-stone-200">3. Precision Calibrated Edges</div>
                      <div className="text-[11px] text-stone-400">Standard 2x4 ft &amp; 4x8 ft (1&quot; &amp; 2&quot;)</div>
                    </div>
                    <span className="text-[10px] bg-stone-700 text-stone-300 px-2 py-0.5 rounded font-semibold">
                      Zero Waste
                    </span>
                  </div>
                </div>

                {/* Key Performance Stats */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-emerald-900/60 border border-emerald-600/40 text-center">
                    <div className="text-[11px] text-emerald-300 font-semibold flex items-center justify-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" /> AC Bill Cut
                    </div>
                    <div className="text-2xl font-black text-white mt-0.5">Up to 30%</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-amber-900/50 border border-amber-600/40 text-center">
                    <div className="text-[11px] text-amber-300 font-semibold flex items-center justify-center gap-1">
                      <Sun className="w-3.5 h-3.5" /> Heat Drop
                    </div>
                    <div className="text-2xl font-black text-white mt-0.5">5°C - 7°C</div>
                  </div>
                </div>

                {/* Current Slide Info on Card */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-300">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{HERO_SLIDES[currentSlide].title}</span>
                  </span>
                  <span className="text-stone-400 font-mono font-bold">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
              </div>

              {/* Floating Animated Badge: Top Right */}
              <div className="absolute -top-5 -right-3 sm:-right-5 bg-stone-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2.5 animate-float z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-stone-950 flex items-center justify-center shrink-0 font-black">
                  -30%
                </div>
                <div>
                  <div className="text-xs font-black text-white">Electricity Cut</div>
                  <div className="text-[10px] text-emerald-300">Lower CEB Bills</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Swapper Controls with 3 Slides */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Active Showcase:
            </span>
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-10 bg-emerald-400 shadow-md shadow-emerald-400/50"
                      : "w-2.5 bg-white/40 hover:bg-white/80"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-emerald-300 ml-2">
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </div>

          {/* Prev/Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
