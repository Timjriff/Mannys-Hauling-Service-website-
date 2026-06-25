import type { Metadata } from "next";
import {
  Armchair,
  BadgeDollarSign,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Clock,
  Construction,
  Factory,
  Home,
  Leaf,
  MapPin,
  PackageOpen,
  Recycle,
  ShieldCheck,
  Sofa,
  Sparkles,
  Truck,
  Warehouse,
  WashingMachine
} from "lucide-react";

export const business = {
  name: "Manny's Hauling Services",
  legalName: "Manny's Hauling Services",
  phone: "(657) 335-5544",
  phoneHref: "tel:+16573355544",
  email: "mannyswork.818@gmail.com",
  emailHref: "mailto:mannyswork.818@gmail.com",
  address: "Santa Ana, CA 92703",
  city: "Santa Ana",
  region: "CA",
  postalCode: "92703",
  area: "Orange County",
  url: "https://mannys-hauling-services.com",
  logo: "/mannys-logo.png",
  brandRed: "#E11D2E"
};

export const keywords = [
  "Junk Removal Santa Ana",
  "Santa Ana Junk Removal",
  "Junk Hauling Santa Ana",
  "Furniture Removal",
  "Appliance Removal",
  "Garage Cleanouts",
  "Estate Cleanouts",
  "Construction Debris Removal",
  "Yard Waste Removal",
  "Hot Tub Removal",
  "Mattress Removal",
  "Same Day Junk Removal",
  "Affordable Junk Removal",
  "Orange County Junk Removal"
];

export const services = [
  {
    title: "Furniture Removal",
    slug: "furniture-removal",
    icon: Sofa,
    description: "Couches, sectionals, dressers, tables, cabinets, desks, and bulky household furniture removed quickly.",
    details: "Manny's Hauling Services makes furniture removal in Santa Ana simple with careful lifting, clean haul-away, and donation-first handling whenever possible."
  },
  {
    title: "Appliance Removal",
    slug: "appliance-removal",
    icon: WashingMachine,
    description: "Refrigerators, washers, dryers, ovens, dishwashers, water heaters, and other heavy appliances.",
    details: "Book appliance removal in Santa Ana for safe pickup of heavy units, garage appliances, remodel debris, and unwanted kitchen or laundry equipment."
  },
  {
    title: "Garage Cleanouts",
    slug: "garage-cleanouts",
    icon: Warehouse,
    description: "Clear boxes, shelving, tools, old furniture, trash, and clutter from garages and sheds.",
    details: "Our garage cleanout crew helps reclaim your space with fast sorting, loading, hauling, and responsible disposal."
  },
  {
    title: "Estate Cleanouts",
    slug: "estate-cleanouts",
    icon: Home,
    description: "Respectful cleanout help for homes, apartments, inherited properties, and transitions.",
    details: "Estate cleanouts are handled with care, discretion, and a practical plan for hauling, donation, recycling, and disposal."
  },
  {
    title: "Construction Debris",
    slug: "construction-debris",
    icon: Construction,
    description: "Wood, drywall, tile, fixtures, cabinets, packaging, and non-hazardous renovation debris.",
    details: "Keep projects moving with construction debris removal in Santa Ana for contractors, remodelers, and property owners."
  },
  {
    title: "Yard Waste",
    slug: "yard-waste",
    icon: Leaf,
    description: "Branches, brush, green waste, old planters, patio junk, fencing, and outdoor clutter.",
    details: "Our yard waste removal service clears outdoor mess quickly and routes eligible material toward green disposal options."
  },
  {
    title: "Office Cleanouts",
    slug: "office-cleanouts",
    icon: Building2,
    description: "Desks, chairs, cubicles, shelving, electronics, filing cabinets, and business clutter.",
    details: "Office cleanouts help Santa Ana businesses move, downsize, renovate, or reset without tying up their team."
  },
  {
    title: "Storage Unit Cleanouts",
    slug: "storage-unit-cleanouts",
    icon: PackageOpen,
    description: "Full or partial storage units cleared with upfront pricing and fast loading.",
    details: "We help empty storage units across Orange County so you can stop paying for space you no longer need."
  },
  {
    title: "Mattress Removal",
    slug: "mattress-removal",
    icon: BedDouble,
    description: "Mattresses, box springs, bed frames, headboards, and bedroom furniture hauled away.",
    details: "Same-day mattress removal is available for homes, apartments, rental turnovers, and property managers."
  },
  {
    title: "Hot Tub Removal",
    slug: "hot-tub-removal",
    icon: Bath,
    description: "Old spas and hot tubs removed from patios, decks, yards, and rental properties.",
    details: "Hot tub removal can involve heavy lifting and breakdown work, so our crew plans the removal route before loading."
  },
  {
    title: "Eviction Cleanouts",
    slug: "eviction-cleanouts",
    icon: Armchair,
    description: "Fast cleanout support for landlords, managers, and real estate professionals.",
    details: "We clear left-behind furniture, trash, and debris so rental properties can get cleaned, repaired, and re-listed."
  },
  {
    title: "Commercial Junk Removal",
    slug: "commercial-junk-removal",
    icon: Factory,
    description: "Reliable hauling for retail spaces, offices, warehouses, job sites, and property portfolios.",
    details: "Commercial junk removal in Santa Ana includes flexible scheduling, professional crews, and simple communication."
  }
] as const;

export const serviceAreas = [
  "Santa Ana",
  "Orange",
  "Tustin",
  "Anaheim",
  "Garden Grove",
  "Westminster",
  "Costa Mesa",
  "Irvine",
  "Fountain Valley",
  "Huntington Beach",
  "Full Orange County"
];

export const cityPages = [
  { name: "Santa Ana", slug: "santa-ana" },
  { name: "Orange", slug: "orange" },
  { name: "Anaheim", slug: "anaheim" },
  { name: "Costa Mesa", slug: "costa-mesa" },
  { name: "Tustin", slug: "tustin" },
  { name: "Garden Grove", slug: "garden-grove" },
  { name: "Westminster", slug: "westminster" },
  { name: "Irvine", slug: "irvine" },
  { name: "Fountain Valley", slug: "fountain-valley" },
  { name: "Huntington Beach", slug: "huntington-beach" },
  { name: "Orange County", slug: "orange-county" }
] as const;

export const whyChoose = [
  { title: "Same-Day Availability", icon: Clock, text: "Fast openings for urgent cleanouts, bulky pickups, and property resets." },
  { title: "Transparent Pricing", icon: BadgeDollarSign, text: "Upfront quotes before loading begins, with no surprise fees." },
  { title: "Professional Crew", icon: ShieldCheck, text: "Uniformed, careful, and respectful around your home or business." },
  { title: "Fast Response", icon: Truck, text: "Call, text, or request a quote and get a clear next step quickly." },
  { title: "Locally Owned", icon: MapPin, text: "Santa Ana based service with real Orange County coverage." },
  { title: "Eco-Friendly Disposal", icon: Recycle, text: "Donation and recycling are prioritized whenever the item condition allows." },
  { title: "Donation Whenever Possible", icon: Sparkles, text: "Usable items are separated from disposal loads when practical." }
];

export const faq = [
  {
    question: "How much does junk removal cost?",
    answer: "Pricing depends on volume, item type, access, and disposal requirements. Manny's Hauling Services provides upfront pricing before removing anything."
  },
  {
    question: "Do you offer same day service?",
    answer: "Yes. Same-day junk removal is available in Santa Ana and nearby Orange County cities when the schedule allows."
  },
  {
    question: "What items can't you take?",
    answer: "We cannot haul hazardous waste, chemicals, paint, fuel, asbestos, biohazards, or other regulated materials. Ask about specific items when requesting your estimate."
  },
  {
    question: "Do you recycle?",
    answer: "Yes. We prioritize recycling and donation whenever possible to reduce landfill waste."
  },
  {
    question: "How quickly can you arrive?",
    answer: "Arrival windows depend on the route and job size, but many Santa Ana pickups can be scheduled same day or next day."
  },
  {
    question: "Do I have to move everything outside?",
    answer: "No. Point to what needs to go and the crew can remove items from inside, upstairs, garages, storage units, yards, or offices."
  }
];

export function absoluteUrl(path = "") {
  return `${business.url}${path}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = business.logo
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: business.name }],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

export function localBusinessSchema(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl(path)}#localbusiness`,
    name: business.name,
    image: absoluteUrl(business.logo),
    logo: absoluteUrl(business.logo),
    url: absoluteUrl(path),
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "US"
    },
    areaServed: cityPages.map((city) => ({ "@type": "City", name: city.name })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description
      }
    }))
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export const trustBadges = [
  { label: "Licensed", icon: CheckCircle2 },
  { label: "Insured", icon: ShieldCheck },
  { label: "Same-Day Service", icon: Clock },
  { label: "Locally Owned", icon: MapPin }
];
