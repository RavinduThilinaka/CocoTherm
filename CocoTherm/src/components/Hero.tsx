"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  TrendingDown,
  Layers,
  Factory,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sun,
  Leaf,
  Sparkles,
  Star,
  Thermometer,
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

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
    <section className="hero-section relative min-h-[560px] lg:min-h-[640px] flex items-start overflow-hidden pt-6 lg:pt-10 pb-10 lg:pb-14 text-white bg-black">
      {/* Self-contained animations */}
      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSlideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroGlowPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes heroGradientShift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        @keyframes heroKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }

        .hero-enter { opacity: 0; }
        .hero-enter.is-ready { animation: heroFadeUp 0.8s ease-out forwards; }
        .hero-enter-right { opacity: 0; }
        .hero-enter-right.is-ready {
          animation: heroSlideInRight 0.9s ease-out forwards;
        }

        .hero-d-100 { animation-delay: 0.1s; }
        .hero-d-200 { animation-delay: 0.2s; }
        .hero-d-300 { animation-delay: 0.3s; }
        .hero-d-400 { animation-delay: 0.4s; }
        .hero-d-500 { animation-delay: 0.5s; }
        .hero-d-600 { animation-delay: 0.6s; }
        .hero-d-700 { animation-delay: 0.7s; }

        .hero-float { animation: heroFloat 4s ease-in-out infinite; }
        .hero-glow { animation: heroGlowPulse 4s ease-in-out infinite; }

        .hero-gradient-text {
          background-size: 200% auto;
          animation: heroGradientShift 5s ease-in-out infinite;
        }

        .hero-kenburns { animation: heroKenBurns 7s ease-out forwards; }

        .hero-shine {
          pointer-events: none;
          position: absolute;
          inset: 0;
          transform: translateX(-100%) skewX(-15deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: transform 0.7s ease;
        }
        .hero-shine-group:hover .hero-shine {
          transform: translateX(250%) skewX(-15deg);
        }

        .hero-title-fade { animation: heroFadeUp 0.6s ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter, .hero-enter-right { opacity: 1; animation: none; }
          .hero-float, .hero-glow, .hero-gradient-text, .hero-kenburns,
          .hero-title-fade { animation: none; }
          .hero-shine { display: none; }
        }
      `}</style>

      {/* Background Images */}
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
              className={`w-full h-full object-cover object-center ${
                currentSlide === idx ? "hero-kenburns" : ""
              }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/20 z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-1 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div
              className={`hero-enter hero-d-100 ${
                mounted ? "is-ready" : ""
              } inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-950/30`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wide">Homagama Factory, Sri Lanka</span>
              <span className="text-emerald-400/50">&bull;</span>
              <span className="text-white/90 font-medium">100% Upcycled Coconut Husk</span>
            </div>

            {/* Headline */}
            <div
              className={`hero-enter hero-d-200 ${
                mounted ? "is-ready" : ""
              } space-y-3`}
            >
              <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.2rem] font-black text-white tracking-[-0.02em] leading-[1.05] drop-shadow-2xl">
                Cooler Homes.
                <br />
                <span className="relative inline-block">
                  <span className="hero-gradient-text relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-300">
                    Greener World.
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400/70 via-amber-300/60 to-transparent rounded-full blur-[1px]" />
                </span>
              </h1>

              <div className="flex items-center gap-2 pt-1">
                <div className="h-[3px] w-10 rounded-full bg-emerald-400" />
                <div className="h-[3px] w-4 rounded-full bg-emerald-400/50" />
                <div className="h-[3px] w-2 rounded-full bg-emerald-400/25" />
              </div>
            </div>

            {/* Tagline */}
            <div
              className={`hero-enter hero-d-300 ${
                mounted ? "is-ready" : ""
              } flex items-start gap-3 max-w-2xl`}
            >
              <div className="mt-1.5 w-[3px] h-full min-h-[2.5rem] rounded-full bg-gradient-to-b from-emerald-400 to-amber-300 shrink-0" />
              <p className="text-base sm:text-lg font-semibold text-emerald-200/95 leading-relaxed tracking-wide">
                Naturally Cool Living
                <span className="mx-2 text-emerald-400/60">&bull;</span>
                Premium Thermal Insulation from 100% Upcycled Coconut Coir
              </p>
            </div>

            {/* Description */}
            <p
              className={`hero-enter hero-d-400 ${
                mounted ? "is-ready" : ""
              } text-[15px] sm:text-base lg:text-[17px] text-stone-200/90 max-w-2xl leading-[1.75] font-normal`}
            >
              Our small factory in Homagama turns abundant Sri Lankan coconut husk waste into
              commercial-grade thermal insulation boards for roofs and walls. Keep your rooms
              naturally cool and{" "}
              <span className="relative inline-block font-bold text-emerald-300">
                <span className="relative z-10">
                  cut air conditioning electricity bills by up to 30%
                </span>
                <span className="absolute inset-x-0 bottom-0 h-[6px] bg-emerald-400/25 rounded-sm -z-0" />
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div
              className={`hero-enter hero-d-500 ${
                mounted ? "is-ready" : ""
              } flex flex-wrap items-center gap-3 pt-2`}
            >
              <a
                href="#calculator"
                className="hero-shine-group group relative px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all flex items-center gap-2 overflow-hidden hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="hero-shine" />
                <span className="relative z-10">Calculate Your Bill Savings</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Layers className="w-4 h-4 text-emerald-300" />
                <span>View Products</span>
                <span className="text-stone-400 text-xs font-medium">LKR 800 - 1,400</span>
              </a>
            </div>

            {/* Trust Row */}
            <div
              className={`hero-enter hero-d-600 ${
                mounted ? "is-ready" : ""
              } pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-stone-400 font-medium border-t border-white/10`}
            >
              <span className="flex items-center gap-1.5 text-stone-300">
                <Factory className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">Homagama Plant</span>
              </span>
              <span className="text-white/20">|</span>
              <span>Colombo &bull; Kandy &bull; Galle Delivery</span>
              <span className="text-white/20">|</span>
              <span className="text-emerald-300/90 font-semibold">
                Available on Daraz.lk &amp; Ikman.lk
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN — Glass Product Showcase */}
          <div
            className={`hero-enter-right hero-d-300 ${
              mounted ? "is-ready" : ""
            } lg:col-span-5 relative`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow */}
              <div className="hero-glow absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-amber-400/10 to-transparent blur-2xl rounded-[2rem] pointer-events-none" />

              {/* Floating Rating Badge */}
              <div className="hero-float absolute -top-4 -left-3 sm:-left-5 z-20 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-stone-900">
                  <div className="text-[11px] font-black leading-tight">4.9 / 5.0</div>
                  <div className="text-[9px] text-stone-500 leading-tight">500+ Homes</div>
                </div>
              </div>

              {/* Main Glass Card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                {/* Top Image Preview */}
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img
                    src={HERO_SLIDES[currentSlide].image}
                    alt={HERO_SLIDES[currentSlide].title}
                    className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-lg shadow-emerald-900/50">
                    From LKR 800 / sq ft
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      <Sparkles className="w-3 h-3" /> CocoTherm InsulBoard
                    </div>
                    <h3
                      key={currentSlide}
                      className="hero-title-fade text-white font-black text-lg leading-tight mt-0.5"
                    >
                      {HERO_SLIDES[currentSlide].title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Spec Chips */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-white/10 border border-white/15 p-2.5 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5">
                      <Thermometer className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
                      <div className="text-[10px] text-stone-300 font-medium">k-Value</div>
                      <div className="text-xs font-black text-white">0.038</div>
                    </div>
                    <div className="rounded-xl bg-white/10 border border-white/15 p-2.5 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5">
                      <Sun className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                      <div className="text-[10px] text-stone-300 font-medium">Cooler</div>
                      <div className="text-xs font-black text-white">5°C-7°C</div>
                    </div>
                    <div className="rounded-xl bg-white/10 border border-white/15 p-2.5 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5">
                      <TrendingDown className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
                      <div className="text-[10px] text-stone-300 font-medium">Bill Cut</div>
                      <div className="text-xs font-black text-white">30%</div>
                    </div>
                  </div>

                  {/* Highlight Line */}
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 animate-pulse">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-[11px] text-emerald-100 font-medium leading-snug">
                      <strong className="text-white">100% Biodegradable</strong> — Zero itch, natural
                      starch binder, Sri Lankan made.
                    </div>
                  </div>

                  {/* CTA inside card */}
                  <button
                    onClick={onOpenQuoteModal}
                    className="hero-shine-group group relative w-full py-3 rounded-xl bg-white text-stone-950 font-black text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <span className="hero-shine" />
                    <span className="relative z-10">Get Free Sample Kit</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Slide indicator */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      {HERO_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentSlide === idx
                              ? "w-6 bg-emerald-400"
                              : "w-1.5 bg-white/30 hover:bg-white/60"
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-stone-400">
                      0{currentSlide + 1} / 0{HERO_SLIDES.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div
          className={`hero-enter hero-d-700 ${
            mounted ? "is-ready" : ""
          } mt-8 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4`}
        >
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
            <span
              key={`badge-${currentSlide}`}
              className="hero-title-fade text-xs font-bold text-emerald-300 ml-2"
            >
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/10 hover:scale-110 active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/10 hover:scale-110 active:scale-95"
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