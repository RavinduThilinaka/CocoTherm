export interface Product {
  id: string;
  name: string;
  tagline: string;
  pricePerSqFt: number; // LKR
  badge?: string;
  description: string;
  bestFor: string;
  sizes: string[];
  thicknesses: string[];
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export interface ManufacturingStep {
  step: number;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  sinhalaTitle: string;
  subtitle: string;
  painPoint: string;
  solution: string;
  keyBenefits: string[];
  locations: string;
  icon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "wall-insulation",
    name: "Wall Insulation Board",
    tagline: "Standard Thermal Barrier for Masonry & Drywall",
    pricePerSqFt: 800,
    badge: "Best Value",
    description:
      "Crafted from premium shredded coconut husk and organic plant-based starch binders. Designed to line internal and external building walls, preventing exterior heat penetration and keeping interior spaces cool naturally.",
    bestFor: "Residential homes, apartment partition walls, commercial storefronts",
    sizes: ["2 ft x 4 ft (8 sq ft)", "4 ft x 8 ft (32 sq ft)", "Custom cut on request"],
    thicknesses: ["1 inch (25mm)", "2 inch (50mm)"],
    specs: [
      { label: "Price / Sq Ft", value: "LKR 800" },
      { label: "Thermal Conductivity (k)", value: "0.042 W/m·K" },
      { label: "AC Bill Reduction", value: "Up to 25%" },
      { label: "Density", value: "120 - 150 kg/m³" },
      { label: "Biodegradable", value: "100% Organic Core" },
    ],
    features: [
      "Lightweight and easy to handle with standard carpentry tools",
      "Breathable fibre prevents trapped internal wall condensation",
      "Non-toxic: Zero formaldehyde and zero hazardous VOCs",
      "Naturally repels insects with natural coir lignin characteristics",
    ],
  },
  {
    id: "roof-insulation",
    name: "Roof Insulation Panel",
    tagline: "Maximum Radiant Heat Shield for Tropical Roofs",
    pricePerSqFt: 1000,
    badge: "Most Popular in Sri Lanka",
    description:
      "Over 65% of residential heat enters through asbestos, zinc-aluminium, or tile roofs. CocoTherm Roof Panels create an impenetrable thermal cushion beneath the rafters, dropping room temperatures by up to 5°C - 7°C.",
    bestFor: "Under-roof ceilings, attics, warehouse roofs, tin-shed factories, eco-villas",
    sizes: ["2 ft x 4 ft (8 sq ft)", "4 ft x 8 ft (32 sq ft)"],
    thicknesses: ["1.5 inch (38mm)", "2 inch (50mm)"],
    specs: [
      { label: "Price / Sq Ft", value: "LKR 1,000" },
      { label: "Thermal Conductivity (k)", value: "0.038 W/m·K" },
      { label: "AC Bill Reduction", value: "Up to 30%" },
      { label: "Temperature Drop", value: "5°C to 7°C Cooler" },
      { label: "Moisture Resistance", value: "Coated Organic Seal" },
    ],
    features: [
      "Stops harsh solar radiation penetrating metal and tile roofs",
      "Dramatically lowers attic and upper-floor heat traps",
      "Reduces rain noise impact on corrugated zinc and aluminium roofs",
      "Flexible sizing fits seamlessly between roof purlins and rafters",
    ],
  },
  {
    id: "acoustic-board",
    name: "Acoustic Sound-Dampening Board",
    tagline: "Dual Thermal & Sound Absorption Comfort",
    pricePerSqFt: 1300,
    badge: "High Sound Absorption",
    description:
      "Engineered with multi-density coir fibre lattices that trap high and low sound frequencies. Delivers tranquil, whisper-quiet indoor environments while maintaining superior heat insulation.",
    bestFor: "Eco-resorts, boutique hotels, recording studios, home theatres, conference halls",
    sizes: ["2 ft x 4 ft (8 sq ft)", "4 ft x 8 ft (32 sq ft)"],
    thicknesses: ["1.5 inch (38mm)", "2 inch (50mm)"],
    specs: [
      { label: "Price / Sq Ft", value: "LKR 1,300" },
      { label: "NRC (Noise Reduction)", value: "0.75 - 0.85 NRC" },
      { label: "Thermal Insulation", value: "High R-value" },
      { label: "Aesthetic Finish", value: "Natural textured coir grain" },
      { label: "Application", value: "Walls & Suspended Ceilings" },
    ],
    features: [
      "Ideal for eco-tourism resorts in Kandy, Ella, Galle & Nuwara Eliya",
      "Eliminates room echo and street traffic noise without synthetic foams",
      "Can be exposed as an organic, rustic interior architectural design element",
      "Moisture-breathable to prevent tropical mould development",
    ],
  },
  {
    id: "fire-resistant-board",
    name: "Fire-Resistant Board",
    tagline: "Natural Mineral Infused Flame Retardant",
    pricePerSqFt: 1400,
    badge: "Safety Certified",
    description:
      "Treated with eco-friendly natural mineral borate compounds that create an oxygen-starving carbonaceous char when exposed to flames, stopping flame propagation without releasing toxic gases.",
    bestFor: "Commercial kitchens, industrial facilities, hotel corridors, multi-story developments",
    sizes: ["2 ft x 4 ft (8 sq ft)", "4 ft x 8 ft (32 sq ft)"],
    thicknesses: ["1 inch (25mm)", "2 inch (50mm)"],
    specs: [
      { label: "Price / Sq Ft", value: "LKR 1,400" },
      { label: "Fire Rating Class", value: "Class 1 Flame Retardant" },
      { label: "Smoke Toxicity", value: "Zero Cyanide / Toxic Fumes" },
      { label: "Thermal k-value", value: "0.040 W/m·K" },
      { label: "Moisture Barrier", value: "Hydrophobic Infused" },
    ],
    features: [
      "Natural fire retardant mineral treatment - 100% halogen-free",
      "Complies with municipal and industrial fire safety considerations",
      "Maintains structural integrity longer during high-heat conditions",
      "Zero toxic smoke inhalation risk compared to polyurethane/polystyrene",
    ],
  },
];

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    step: 1,
    title: "Collect, Clean, Shred & Dry",
    description: "Sourcing raw coconut husk from Sri Lankan farms and mills.",
    detail:
      "We source post-agricultural coconut husk waste from Homagama and coconut triangle mills. The coir is thoroughly de-dusted, shredded to calibrated fibre lengths, and solar-dried to under 10% moisture.",
    iconName: "Truck",
  },
  {
    step: 2,
    title: "Natural Plant Binder Mixing",
    description: "Eco-friendly starch formulation, 100% free from toxic resins.",
    detail:
      "The conditioned coir is blended with a biodegradable cassava/plant-based starch adhesive. No petroleum binders, formaldehydes, or isocyanates are ever used.",
    iconName: "FlaskConical",
  },
  {
    step: 3,
    title: "Pour into Moulds & Spread",
    description: "Uniform density distribution in precision calibrated steel trays.",
    detail:
      "Fibre-binder slurry is loaded into hydraulic forming trays (2x4 ft and 4x8 ft) and mechanically leveled to ensure uniform density and eliminate thermal weak spots.",
    iconName: "LayoutGrid",
  },
  {
    step: 4,
    title: "Low-Temperature Press & Cure",
    description: "Energy-efficient thermal pressing that bonds the natural fibres.",
    detail:
      "The trays undergo hydraulic compression under moderate curing heat. This activates the starch lattice, creating rigid, lightweight, and durable fibrous boards with minimal carbon footprint.",
    iconName: "Cpu",
  },
  {
    step: 5,
    title: "Precision Sizing & Edge Cut",
    description: "CNC cutting into standard 2x4 ft, 4x8 ft (1\" and 2\" thick).",
    detail:
      "Cured boards pass through industrial automated saws for clean, interlockable edges. Standard 24\"x48\" and 48\"x96\" dimensions fit standard Sri Lankan ceiling & wall stud layouts.",
    iconName: "Scissors",
  },
  {
    step: 6,
    title: "Eco Moisture-Resistant Coating",
    description: "Protection against tropical Sri Lankan humidity and monsoon damp.",
    detail:
      "Boards are treated with a breathable, eco-friendly plant wax/silicate hydrophobic seal that repels liquid water while allowing natural water vapour to breathe out.",
    iconName: "ShieldCheck",
  },
  {
    step: 7,
    title: "Multi-Point QA Lab Testing",
    description: "Heat dissipation, tensile strength, moisture, and fire testing.",
    detail:
      "Every batch is sampled for thermal conductivity (k-value), internal bond strength, fungal resistance, and flame spread to ensure superior commercial grade reliability.",
    iconName: "CheckCircle2",
  },
  {
    step: 8,
    title: "Biodegradable Packaging & Dispatch",
    description: "Dispatched from Homagama factory with 100% recyclable wrap.",
    detail:
      "Finished boards are bundled with biodegradable Kraft paper and dispatched directly to job sites, Daraz/Ikman logistics hubs, and hardware distribution partners.",
    iconName: "PackageCheck",
  },
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: "homeowners",
    title: "Homeowners",
    sinhalaTitle: "Residential Owners",
    subtitle: "Cut soaring CEB electricity bills and enjoy naturally cooler bedrooms & living spaces.",
    painPoint:
      "Upper floor bedrooms under tin/tile roofs become baking ovens during the day, forcing 24/7 air conditioner usage with exorbitant electricity bills.",
    solution:
      "Installing CocoTherm Roof or Wall boards drops room temperatures by up to 5-7°C and slashes monthly AC cooling costs by up to 30%.",
    keyBenefits: [
      "Payback period in electricity savings within 14-18 months",
      "Safe, itch-free, non-toxic insulation safe for kids and pets",
      "Drastically reduces rain noise during monsoon downpours",
    ],
    locations: "Colombo, Gampaha, Kandy, Galle, Kurunegala",
    icon: "Home",
  },
  {
    id: "resorts",
    title: "Eco-Resorts & Boutique Hotels",
    sinhalaTitle: "Hospitality Sector",
    subtitle: "Deliver eco-luxury, rustic tropical aesthetics, and whisper-quiet guest rooms.",
    painPoint:
      "High guest complaints about AC noise, high generator/power costs, and guests looking for authentic green, zero-carbon sustainability.",
    solution:
      "CocoTherm Acoustic & Roof boards provide stunning natural coir texture, silent guest rooms, and a compelling sustainable story guests love.",
    keyBenefits: [
      "Earn Green Hotel certification points & carbon credits",
      "Natural acoustic isolation between guest chalets and rooms",
      "Biodegradable local materials supporting Sri Lankan rural farmers",
    ],
    locations: "Galle, Ella, Sigiriya, Kandy, Tangalle, Nuwara Eliya",
    icon: "Palmtree",
  },
  {
    id: "architects",
    title: "Architects & Green Developers",
    sinhalaTitle: "Sustainable Design",
    subtitle: "Design climate-responsive, sustainable tropical architecture with locally certified coir.",
    painPoint:
      "Imported synthetic insulation (Styrofoam, rockwool) is hard to source during forex crunches, non-biodegradable, and causes client health concerns.",
    solution:
      "Readily available, locally produced in Homagama, consistent dimensions, eligible for Green Building Council of Sri Lanka (GBCSL) ratings.",
    keyBenefits: [
      "Local procurement with short lead times and zero forex dependency",
      "Standard 2x4 ft and 4x8 ft sizes compatible with steel/timber framing",
      "Comprehensive technical data sheets and CAD/BIM specifications provided",
    ],
    locations: "Western Province & Islandwide Projects",
    icon: "Compass",
  },
  {
    id: "contractors",
    title: "Construction Companies & Government Housing",
    sinhalaTitle: "Commercial & Civil",
    subtitle: "High-volume, budget-friendly thermal insulation with rapid site installation.",
    painPoint:
      "Strict government and institutional budgets; synthetic insulation prices fluctuate with import exchange rates.",
    solution:
      "Cost-effective starting from LKR 800/sq ft, bulk project discounts, stable rupee pricing, and durable structural lifespan.",
    keyBenefits: [
      "Competitive pricing: cheaper than imported polyurethane boards",
      "Faulty/damaged offcut boards collected & recycled back into production",
      "Local factory backing in Homagama with on-site installation guidance",
    ],
    locations: "Urban development housing, provincial infrastructure",
    icon: "HardHat",
  },
];

export const COMPARISON_DATA = [
  {
    feature: "Base Material",
    cocotherm: "100% Sri Lankan Coconut Coir & Plant Starch",
    importedSynthetics: "Extruded Polystyrene / Polyurethane (Petrochemical)",
    fibreglass: "Molten glass spun into fibrous wool with resin binders",
  },
  {
    feature: "Environmental Impact",
    cocotherm: "100% Biodegradable & Circular (Zero Waste)",
    importedSynthetics: "Takes 500+ years to decompose; toxic in landfills",
    fibreglass: "Non-biodegradable; hazardous landfill waste",
  },
  {
    feature: "Health & Indoor Air Quality",
    cocotherm: "Non-toxic, Zero VOC, itch-free, safe to touch",
    importedSynthetics: "Emits volatile gases & toxic fumes during fires",
    fibreglass: "Causes severe skin irritation, lung & eye hazards during installation",
  },
  {
    feature: "Local Economy & Forex",
    cocotherm: "Made in Homagama, saves Sri Lankan foreign exchange",
    importedSynthetics: "100% Imported; costly forex outflow (~45% market)",
    fibreglass: "Mostly imported raw materials (~30% market)",
  },
  {
    feature: "Cost per Sq Ft (LKR)",
    cocotherm: "From LKR 800 / sq ft (Direct factory pricing)",
    importedSynthetics: "LKR 1,200 - 1,800+ / sq ft (High import markup)",
    fibreglass: "LKR 950 - 1,400+ / sq ft (Requires vapour barriers)",
  },
  {
    feature: "Fire Safety Behaviour",
    cocotherm: "Treated mineral option char-forming; zero cyanide fumes",
    importedSynthetics: "Melts rapidly, produces suffocating black toxic smoke",
    fibreglass: "Incombustible but binder burns off with odour",
  },
  {
    feature: "Moisture & Monsoons",
    cocotherm: "Breathable natural hydrophobic coating prevents rot",
    importedSynthetics: "Traps moisture behind walls causing hidden mould",
    fibreglass: "Loses all insulating power when wet/damp",
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: "2026",
    title: "R&D, Prototypes & Pilot Installations",
    status: "In Progress",
    description:
      "Refining the plant-based binder formulations, acoustic tests, establishing thermal conductivity baselines, and completing 15 pilot residential/resort installations across Homagama, Colombo, and Galle.",
    badge: "Current Phase",
  },
  {
    year: "2027",
    title: "Commercial Factory Sales Launch",
    status: "Upcoming",
    description:
      "Full commissioning of the Homagama manufacturing plant. Launching e-commerce shop, partnerships with Daraz.lk, Ikman.lk, and top 20 architectural hardware suppliers. Target: 11,800 boards in Year 1.",
    badge: "Commercial Launch",
  },
  {
    year: "2028",
    title: "Roof & Acoustic Line Expansion",
    status: "Planned",
    description:
      "Scaling the high-density acoustic board line for luxury eco-resorts and specialized under-roof panels for industrial warehouses. Output scaling to ~14,000 boards.",
    badge: "Product Expansion",
  },
  {
    year: "2030",
    title: "International Eco-Certification",
    status: "Planned",
    description:
      "Achieving ISO 14001, Cradle to Cradle, and Green Building Council Gold certifications, validating CocoTherm as a premier carbon-negative tropical insulation.",
    badge: "Global Certification",
  },
  {
    year: "2031",
    title: "Regional South Asian Export",
    status: "Planned",
    description:
      "Expanding supply to nearby tropical nations facing high cooling demands, starting with Maldives resort construction, India (Kerala & Tamil Nadu), and Seychelles.",
    badge: "Regional Export",
  },
];

export const FINANCIAL_HIGHLIGHTS = {
  totalInvestment: "LKR 10.8 Million",
  equityCapital: "LKR 3.9 Million (Own Funds)",
  debtFinancing: "LKR 6.9 Million (Machinery Loan)",
  machineryAllocation: "Over 70% allocated to hydraulic press, shredder, drying ovens & moulds",
  projectedSales: [
    { year: "Year 1 (2027)", sales: "LKR 11.6M", volume: "11,800 Boards", status: "Market Penetration" },
    { year: "Year 2 (2028)", sales: "LKR 13.9M", volume: "14,200 Boards", status: "Range Expansion" },
    { year: "Year 3 (2029)", sales: "LKR 16.7M", volume: "17,000 Boards", status: "Profitable & Scaling" },
  ],
  profitabilityNotes:
    "Small planned setup investments in Years 1-2, reaching net profit in Year 3 with approximately LKR 439,000 after-tax net profit as production reaches 17,000 boards annually.",
};

export const FAQS = [
  {
    question: "Is coconut husk insulation vulnerable to termites, insects, or rodents?",
    sinhalaQuestion: "Termite & Pest Protection",
    answer:
      "No. Coconut coir fibre naturally contains high amounts of lignin and tannin, which insects and pests cannot digest. In addition, our natural plant binder and mineral treatment make the boards completely unattractive to termites and pests.",
  },
  {
    question: "How does CocoTherm handle Sri Lanka's high humidity and monsoons?",
    sinhalaQuestion: "Monsoon & Humidity Resistance",
    answer:
      "Every CocoTherm board receives an eco-friendly hydrophobic coating during Step 6 of manufacturing. It repels liquid rainwater while allowing the natural porous fibre matrix to breathe out vapour, preventing trapped condensation and mould.",
  },
  {
    question: "Can I cut and install the boards myself or do I need special equipment?",
    sinhalaQuestion: "Easy Installation & Handling",
    answer:
      "Unlike fibreglass which requires hazmat suits and causes intense itching, CocoTherm is completely safe to touch with bare hands. It can be easily cut using a standard handsaw, circular saw, or utility blade, and fastened using screws, nails, or non-toxic adhesives.",
  },
  {
    question: "How does CocoTherm cut electricity bills by up to 30%?",
    sinhalaQuestion: "Energy Savings Mechanism",
    answer:
      "In tropical Sri Lanka, roofs and walls absorb intense solar heat throughout the day, driving interior temperatures up to 38°C. By stopping radiant heat penetration, your air conditioner reaches its target temperature much faster and runs at a significantly lower duty cycle.",
  },
  {
    question: "Where can I buy CocoTherm boards?",
    sinhalaQuestion: "Availability & Islandwide Delivery",
    answer:
      "You can order directly from our factory in Homagama via this website or phone/WhatsApp. We also distribute islandwide via Daraz.lk, Ikman.lk, and our network of partner hardware stores across Colombo, Kandy, and Galle.",
  },
];
