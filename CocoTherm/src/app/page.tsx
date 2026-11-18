"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveImpactTicker from "@/components/LiveImpactTicker";
import ProblemSolution from "@/components/ProblemSolution";
import ThermalVisionScanner from "@/components/ThermalVisionScanner";
import BoardExploder3D from "@/components/BoardExploder3D";
import EnergyCalculator from "@/components/EnergyCalculator";
import SoundSimulator from "@/components/SoundSimulator";
import DistrictClimateAdvisor from "@/components/DistrictClimateAdvisor";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import TargetMarketSection from "@/components/TargetMarketSection";
import ComparisonTable from "@/components/ComparisonTable";
import RoadmapAndFinance from "@/components/RoadmapAndFinance";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingActionBar from "@/components/FloatingActionBar";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalInitialProduct, setModalInitialProduct] = useState("Roof Insulation Panel");
  const [modalInitialArea, setModalInitialArea] = useState(500);
  const [modalInitialCost, setModalInitialCost] = useState(500000);

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) setModalInitialProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCalculatorSelectQuote = (
    productName: string,
    area: number,
    cost: number
  ) => {
    setModalInitialProduct(productName);
    setModalInitialArea(area);
    setModalInitialCost(cost);
    setIsQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-emerald-600 selection:text-white relative">
      {/* 1. Header Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Hero Header with Auto-swapping 3 images & Ken Burns animation */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Live Circular Economy & Realtime Husk Ticker */}
      <LiveImpactTicker />

      {/* 4. The Problem & CocoTherm Circular Solution */}
      <ProblemSolution />


      {/* 6. 3D Isometric Layer Exploder & Anatomy */}
      <BoardExploder3D />



      {/* 9. Sri Lanka Regional Climate Advisor */}
      <DistrictClimateAdvisor
        onOpenQuoteModal={(prod: string | undefined) => handleOpenQuoteModal(prod)}
      />

      {/* 10. Product Range (Wall, Roof,s Acoustic, Fire-Resistant) & Pricing */}
      <ProductsSection
        onSelectProduct={(name) => handleOpenQuoteModal(name)}
      />



      {/* 11. Homagama 8-Step Zero Waste Manufacturing Process */}
      <ProcessSection />

      {/* 12. Target Markets (Homeowners, Eco-Resorts, Architects, Construction) */}
      <TargetMarketSection
        onOpenQuoteModal={(segment) =>
          handleOpenQuoteModal(
            segment ? `Custom Project for ${segment}` : undefined
          )
        }
      />

      {/* 13. Market Comparison Table (Vs Imported Polyurethane & Fibreglass) */}
      <ComparisonTable />

      {/* 14. Real Pilot Results & Field Testimonials */}
      <TestimonialsSection />

      {/* 15. Strategic Roadmap (2026 - 2031) & Capital Highlights */}
      <RoadmapAndFinance />

      {/* 16. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 17. Comprehensive Footer */}
      <Footer />

      {/* 18. Quotation & Free Sample Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={modalInitialProduct}
        initialArea={modalInitialArea}
        initialCost={modalInitialCost}
      />

      {/* 19. Floating Sticky Quick Action Bar */}
      <FloatingActionBar onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </main>
  );
}