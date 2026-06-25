"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { business, trustBadges } from "@/lib/site";

export function Hero() {
  return (
    <section className="noise relative min-h-[92vh] overflow-hidden pt-28 text-white">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="container relative grid min-h-[calc(92vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-white/82">
            Junk Removal Santa Ana
          </p>
          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Hassle-Free Junk Removal in Santa Ana
          </h1>
          <p className="mt-7 max-w-2xl text-2xl font-black leading-tight text-white md:text-3xl">
            Fast. Affordable. Professional.
            <span className="block text-brand-red">Same-Day Service Available.</span>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-brand-red px-8 py-4 text-center text-base font-black text-white shadow-red transition hover:-translate-y-1">
              Get Free Estimate
            </Link>
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white px-8 py-4 text-base font-black text-black transition hover:-translate-y-1">
              <Phone className="h-5 w-5 text-brand-red" />
              Call Now
            </a>
          </div>
          <a href={business.phoneHref} className="mt-6 inline-block text-2xl font-black text-white underline decoration-brand-red decoration-4 underline-offset-8">
            {business.phone}
          </a>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur">
                  <Icon className="mb-3 h-5 w-5 text-brand-red" />
                  <p className="text-sm font-black">{badge.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="photo-panel min-h-[520px] rounded-[2rem] shadow-premium" />
          <div className="absolute -bottom-8 left-6 right-6 rounded-[1.5rem] bg-white p-5 shadow-premium md:left-10 md:right-10">
            <div className="flex items-center gap-4">
              <Image src={business.logo} alt="Manny's Hauling Services logo" width={118} height={118} className="h-24 w-24 rounded-2xl object-contain" priority />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red">Locally Owned</p>
                <p className="mt-1 text-xl font-black text-black">Clean spaces. Clear pricing. No stress.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
