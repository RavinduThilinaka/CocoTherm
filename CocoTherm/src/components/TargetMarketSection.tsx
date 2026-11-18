"use client";

import React, { useState } from "react";
import {
  Home,
  Palmtree,
  Compass,
  HardHat,
  MapPin,
  CheckCircle2,
  Gift,
  Share2,
  Store,
  Globe,
  Tag,
  ArrowRight,
} from "lucide-react";
import { TARGET_AUDIENCES } from "@/data/projectData";

interface TargetMarketProps {
  onOpenQuoteModal: (category?: string) => void;
}

export default function TargetMarketSection({ onOpenQuoteModal }: TargetMarketProps) {
  const [selectedAudienceId, setSelectedAudienceId] = useState<string>("homeowners");

  const getAudiencePhoto = (id: string) => {
    switch (id) {
      case "homeowners":
        return "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
      case "resorts":
        return "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80";
      case "architects":
        return "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
      case "contractors":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
    }
  };

  const getAudienceIcon = (id: string) => {
    switch (id) {
      case "homeowners":
        return <Home className="w-5 h-5" />;
      case "resorts":
        return <Palmtree className="w-5 h-5" />;
      case "architects":
        return <Compass className="w-5 h-5" />;
      case "contractors":
        return <HardHat className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  const currentAudience =
    TARGET_AUDIENCES.find((a) => a.id === selectedAudienceId) || TARGET_AUDIENCES[0];

  return (
    <section id="markets" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" /> Target Audiences &bull; Market Segments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Tailored for Sri Lankan Homes, Eco-Resorts &amp; Builders
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            From tropical residences in Colombo and luxury eco-villas in Galle, to high-volume housing
            developments across the island.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {TARGET_AUDIENCES.map((audience) => (
            <button
              key={audience.id}
              onClick={() => setSelectedAudienceId(audience.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                selectedAudienceId === audience.id
                  ? "bg-emerald-800 text-white border-emerald-900 shadow-md scale-102"
                  : "bg-white text-stone-700 hover:bg-stone-100 border-stone-200 shadow-2xs"
              }`}
            >
              <div
                className={`p-2.5 rounded-xl ${
                  selectedAudienceId === audience.id
                    ? "bg-emerald-900 text-emerald-200"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                {getAudienceIcon(audience.id)}
              </div>
              <div>
                <div className="font-bold text-sm">{audience.title}</div>
                <div
                  className={`text-[11px] ${
                    selectedAudienceId === audience.id
                      ? "text-emerald-200"
                      : "text-stone-500"
                  }`}
                >
                  {audience.subtitle ? audience.subtitle.substring(0, 28) + "..." : "Commercial Grade"}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Detailed Showcase with High-Res Photo */}
        <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-10 shadow-sm mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  <MapPin className="w-3.5 h-3.5" /> Key Focus: {currentAudience.locations}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                  {currentAudience.title} Solutions
                </h3>
                <p className="text-sm sm:text-base text-stone-600 mt-2">
                  {currentAudience.subtitle}
                </p>
              </div>

              {/* Problem vs Solution for this segment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/60 text-xs">
                  <span className="font-bold text-red-800 uppercase tracking-wide block mb-1">
                    The Pain Point:
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {currentAudience.painPoint}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs">
                  <span className="font-bold text-emerald-800 uppercase tracking-wide block mb-1">
                    The CocoTherm Advantage:
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {currentAudience.solution}
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Segment Benefits:
                </h4>
                <div className="space-y-2">
                  {currentAudience.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-stone-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal(currentAudience.title)}
                  className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Tailored Proposal for {currentAudience.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Photo Column (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-72 sm:h-80 group">
                <img
                  src={getAudiencePhoto(currentAudience.id)}
                  alt={currentAudience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                    {currentAudience.locations}
                  </div>
                  <div className="text-base font-bold mt-0.5">
                    {currentAudience.title} Applications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Will Sell: Channels & Value Adds */}
        <div className="rounded-3xl bg-emerald-900 text-white p-8 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Distribution &amp; Go-to-Market
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How CocoTherm Sells Across Sri Lanka
            </h3>
            <p className="text-sm text-emerald-200/80 mt-2">
              Combining direct digital sales with islandwide e-commerce, hardware distributor
              partnerships, and generous customer incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-emerald-800/60 border border-emerald-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-emerald-200">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">Online E-Commerce</h4>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Direct online shop via our website, with fast dispatch via <strong>Daraz.lk</strong> and{" "}
                <strong>Ikman.lk</strong>, plus active showcases on Facebook, Instagram &amp; LinkedIn.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-800/60 border border-emerald-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-emerald-200">
                <Store className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">Hardware &amp; Builders</h4>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Partnerships with leading hardware stores, roofing contractors, and timber suppliers
                in Colombo, Kandy, Homagama, and Galle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-800/60 border border-emerald-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-emerald-200">
                <Tag className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">Expos &amp; Consultations</h4>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Regular exhibitions at Sri Lanka Green Building Expos, Architect Exhibition (BMICH),
                offering <strong>free on-site thermal consultations</strong> and installation guides.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-800/60 border border-emerald-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-emerald-200">
                <Gift className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">Intro Discounts &amp; Referrals</h4>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Attractive introductory discounts for first-time builders, quantity breaks for 1,000+
                sq ft orders, and cash referral rewards for architects and contractors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
