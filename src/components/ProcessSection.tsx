"use client";

import React, { useState } from "react";
import {
  Truck,
  FlaskConical,
  LayoutGrid,
  Cpu,
  Scissors,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  RotateCcw,
  Factory,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MANUFACTURING_STEPS } from "@/data/projectData";

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Truck className="w-5 h-5" />;
      case 2:
        return <FlaskConical className="w-5 h-5" />;
      case 3:
        return <LayoutGrid className="w-5 h-5" />;
      case 4:
        return <Cpu className="w-5 h-5" />;
      case 5:
        return <Scissors className="w-5 h-5" />;
      case 6:
        return <ShieldCheck className="w-5 h-5" />;
      case 7:
        return <CheckCircle2 className="w-5 h-5" />;
      case 8:
        return <PackageCheck className="w-5 h-5" />;
      default:
        return <Factory className="w-5 h-5" />;
    }
  };

  const getStepPhoto = (step: number) => {
    switch (step) {
      case 1:
        return "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"; // coconut coir
      case 2:
        return "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"; // natural binder lab
      case 3:
        return "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"; // precision moulds
      case 4:
        return "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"; // hydraulic pressing
      case 5:
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"; // cutting to size
      case 6:
        return "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"; // moisture proof coating
      case 7:
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"; // quality testing
      case 8:
        return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"; // packaging & dispatch
      default:
        return "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
    }
  };

  const currentStepData =
    MANUFACTURING_STEPS.find((s) => s.step === selectedStep) || MANUFACTURING_STEPS[0];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Factory className="w-3.5 h-3.5" /> Homagama Factory Precision &bull; Manufacturing Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            How CocoTherm Boards Are Made
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            From discarded Sri Lankan coconut husk to precision-engineered green insulation in 8
            meticulous, low-carbon steps.
          </p>
        </div>

        {/* 8-Step Interactive Grid / Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {MANUFACTURING_STEPS.map((step) => (
            <button
              key={step.step}
              onClick={() => setSelectedStep(step.step)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedStep === step.step
                  ? "bg-emerald-700 text-white border-emerald-800 shadow-md scale-102"
                  : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-black px-1.5 py-0.5 rounded ${
                    selectedStep === step.step
                      ? "bg-emerald-900/60 text-emerald-100"
                      : "bg-stone-200 text-stone-600"
                  }`}
                >
                  #{step.step}
                </span>
                <span className={selectedStep === step.step ? "text-emerald-200" : "text-stone-400"}>
                  {getStepIcon(step.step)}
                </span>
              </div>
              <div className="font-bold text-xs line-clamp-2 leading-tight">
                {step.title.split(",")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Spotlight Box with Photo */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-emerald-950 text-white p-6 sm:p-10 border border-emerald-800/40 shadow-xl mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description & Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow-sm">
                  {currentStepData.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Step {currentStepData.step} of 8 &bull; Homagama Facility
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {currentStepData.title}
              </h3>
              <p className="text-base sm:text-lg text-emerald-100/90 font-medium leading-relaxed">
                {currentStepData.description}
              </p>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                {currentStepData.detail}
              </p>

              <div className="pt-3 flex items-center gap-4 text-xs font-semibold text-emerald-300">
                <span>&check; 100% Quality Inspected</span>
                <span>&bull;</span>
                <span>&check; Low Carbon Curing</span>
                <span>&bull;</span>
                <span>&check; Zero Chemical Leaching</span>
              </div>
            </div>

            {/* Photo Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-700 h-64 sm:h-72 group">
                <img
                  src={getStepPhoto(currentStepData.step)}
                  alt={currentStepData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white text-xs">
                  <span className="font-bold">Step #{currentStepData.step}: {currentStepData.title.split(",")[0]}</span>
                  <span className="text-[10px] bg-emerald-600 px-2 py-0.5 rounded font-black">Homagama Plant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closed Loop & Capacity Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-base">
                100% Closed Loop: Zero Landfill Waste
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Any board that fails our rigorous Step 7 QA tests or is trimmed during Step 5 sizing
                is automatically shredded and fed back into the mixing hopper. Zero board waste is ever
                discarded.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-base">
                Production Scale: 11,800 &rarr; 17,000 Boards
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Planned output at our Homagama facility is approximately 11,800 boards in Year 1,
                ramping up to 17,000 high-performance boards by Year 3 to meet surging islandwide
                commercial and residential demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
