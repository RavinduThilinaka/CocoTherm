"use client";

import React from "react";
import {
  Layers,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Volume2,
  Home,
  Sun,
  Maximize2,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/projectData";

interface ProductsSectionProps {
  onSelectProduct: (productName: string) => void;
}

export default function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const getProductImage = (id: string) => {
    switch (id) {
      case "wall-insulation":
        return "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80";
      case "roof-insulation":
        return "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80";
      case "acoustic-board":
        return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80";
      case "fire-resistant-board":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80";
      default:
        return "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80";
    }
  };

  const getProductIcon = (id: string) => {
    switch (id) {
      case "wall-insulation":
        return <Home className="w-4 h-4 text-amber-700" />;
      case "roof-insulation":
        return <Sun className="w-4 h-4 text-amber-600" />;
      case "acoustic-board":
        return <Volume2 className="w-4 h-4 text-emerald-700" />;
      case "fire-resistant-board":
        return <Flame className="w-4 h-4 text-red-600" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-700" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> What We Make &bull; Product Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              CocoTherm High-Performance Boards
            </h2>
            <p className="mt-3 text-base text-stone-600">
              Direct factory pricing per square foot. Available in standard 2x4 ft and 4x8 ft sizes
              with 1&quot; to 2&quot; thickness. Custom cuts available for large architectural orders.
            </p>
          </div>

          {/* Standard dimensions info */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-4 text-xs font-medium text-stone-600">
            <Maximize2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-stone-900 block">Standard Factory Dimensions:</span>
              <span>2 ft × 4 ft &amp; 4 ft × 8 ft (1&quot; &amp; 2&quot; thickness)</span>
            </div>
          </div>
        </div>

        {/* Products Grid with Photo Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRODUCTS.map((product: Product) => (
            <div
              key={product.id}
              className={`rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 group ${
                product.id === "roof-insulation"
                  ? "border-emerald-600 ring-2 ring-emerald-600/20"
                  : "border-stone-200"
              }`}
            >
              <div>
                {/* Photo Banner */}
                <div className="relative h-44 overflow-hidden bg-stone-100">
                  <img
                    src={getProductImage(product.id)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3">
                    <span className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                      {getProductIcon(product.id)}
                    </span>
                  </div>

                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs ${
                          product.id === "roof-insulation"
                            ? "bg-emerald-600 text-white"
                            : "bg-amber-500 text-stone-950"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-baseline text-white">
                    <span className="text-xs font-semibold text-stone-200">Price From</span>
                    <span className="text-lg font-black text-amber-300">
                      LKR {product.pricePerSqFt.toLocaleString()}{" "}
                      <span className="text-[10px] text-stone-300 font-normal">/ sq ft</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-stone-900 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed mt-2.5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Best For Tag */}
                  <div className="mt-3 p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-[10px] text-stone-700">
                    <strong className="text-stone-900">Application:</strong> {product.bestFor}
                  </div>

                  {/* Specs Pill List */}
                  <div className="mt-3 space-y-1 border-t border-stone-100 pt-2.5">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-[11px] py-0.5"
                      >
                        <span className="text-stone-500">{spec.label}</span>
                        <span className="font-bold text-stone-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mt-3 space-y-1 border-t border-stone-100 pt-2">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectProduct(product.name)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    product.id === "roof-insulation"
                      ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-800/20"
                      : "bg-stone-900 hover:bg-stone-800 text-white"
                  }`}
                >
                  <span>Select &amp; Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Callout */}
        <div className="mt-12 rounded-3xl bg-amber-50/90 border border-amber-200/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950">
                100% Recycled Offcuts Guarantee &bull; Homagama Plant Standards
              </h4>
              <p className="text-xs text-amber-900/80 mt-0.5">
                Every board is tested for thermal barrier, moisture, and fire safety. Any faulty board
                is shredded and recycled back into production with zero landfill waste.
              </p>
            </div>
          </div>
          <a
            href="#process"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-colors shadow-xs"
          >
            See 8-Step Process &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
