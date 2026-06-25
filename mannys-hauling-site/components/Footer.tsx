import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, cityPages, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Image src={business.logo} alt="Manny's Hauling Services logo" width={120} height={120} className="mb-5 h-24 w-24 rounded-2xl bg-white object-contain" />
          <p className="max-w-sm text-sm leading-7 text-white/68">
            Premium junk removal in Santa Ana with same-day availability, upfront pricing, and professional local service.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/78">
            <a href={business.phoneHref} className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-brand-red" />{business.phone}</a>
            <a href={business.emailHref} className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 text-brand-red" />{business.email}</a>
            <span className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-red" />{business.address}</span>
          </div>
        </div>
        <FooterColumn title="Quick Links" links={[["Services", "/services"], ["Cities", "/service-areas"], ["About", "/about"], ["Contact", "/contact"], ["Privacy Policy", "/privacy-policy"], ["Terms", "/terms"]]} />
        <FooterColumn title="Services" links={services.slice(0, 6).map((service) => [service.title, `/services/${service.slug}`])} />
        <FooterColumn title="Cities" links={cityPages.slice(0, 6).map((city) => [city.name, `/service-areas/${city.slug}`])} />
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Manny&apos;s Hauling Services. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">{title}</h3>
      <div className="grid gap-3">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-sm text-white/64 transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
