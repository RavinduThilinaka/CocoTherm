"use client";

import React from "react";
import { Star, Quote, Building2, Palmtree, Home } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Archt. Sanjeewa Wickramasinghe",
      role: "Chartered Architect & Green Consultant",
      location: "Colombo 07",
      project: "Modern Sustainable Residence",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      icon: <Building2 className="w-4 h-4 text-emerald-600" />,
      quote:
        "We specified CocoTherm Roof Panels under a zinc-aluminium ceiling in our pilot project. The interior temperature dropped by 6.2°C without any AC running during peak noon hours. It's a game-changer for Sri Lankan tropical architecture.",
      rating: 5,
    },
    {
      name: "Devinda Alwis",
      role: "Managing Director, Palm Eco Chalets",
      location: "Habaraduwa, Galle",
      project: "Boutique Eco Resort Chalets",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80",
      icon: <Palmtree className="w-4 h-4 text-emerald-600" />,
      quote:
        "Our foreign guests love the natural coconut texture on our exposed ceilings. More importantly, the acoustic insulation creates whisper-quiet chalets while cutting our resort generator and electricity bills by over 28%.",
      rating: 5,
    },
    {
      name: "Niroshan Jayawardena",
      role: "Homeowner",
      location: "Homagama",
      project: "2-Story Residential House",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
      icon: <Home className="w-4 h-4 text-emerald-600" />,
      quote:
        "Our upstairs master bedroom used to be like an oven under the asbestos roof sheets. After installing CocoTherm 2-inch boards, the bedroom stays naturally cool and our monthly CEB bill dropped by almost LKR 14,000!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" /> 2026 Pilot Results &bull; Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Proven Performance in Sri Lankan Climate
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Real feedback and thermal measurements from our 2026 pilot installations across Colombo,
            Galle, and Homagama.
          </p>
        </div>

        {/* Testimonials Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative h-40 rounded-2xl overflow-hidden mb-5 border border-stone-100">
                  <img
                    src={t.image}
                    alt={t.project}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-bold">{t.project}</span>
                    <span className="text-[10px] bg-emerald-700 px-2 py-0.5 rounded font-semibold">{t.location}</span>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-stone-900 text-sm">{t.name}</div>
                  <div className="text-xs text-stone-500">{t.role}</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  {t.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
