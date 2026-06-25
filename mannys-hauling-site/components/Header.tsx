"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Cities" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "glass-header shadow-2xl" : "bg-black/35"}`}>
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Manny's Hauling Services home">
          <Image src={business.logo} alt="Manny's Hauling Services logo" width={74} height={74} className="h-14 w-14 rounded-full object-contain bg-white" priority />
          <span className="hidden text-sm font-black uppercase tracking-[0.18em] text-white sm:block">Manny&apos;s Hauling</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/78 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={business.phoneHref} className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-white/50">
            <Phone className="h-4 w-4 text-brand-red" />
            {business.phone}
          </a>
          <Link href="/contact" className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-black text-white shadow-red transition hover:-translate-y-0.5">
            Get Free Estimate
          </Link>
        </div>

        <button className="rounded-full border border-white/20 p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="container grid gap-2 py-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-bold text-white hover:bg-white/10">
                {link.label}
              </Link>
            ))}
            <a href={business.phoneHref} className="mt-2 rounded-full bg-brand-red px-5 py-3 text-center font-black text-white">
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
