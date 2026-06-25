import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { cityPages, createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Orange County Junk Removal Service Areas | Manny's Hauling",
  description: "Manny's Hauling Services provides junk removal in Santa Ana, Orange, Tustin, Anaheim, Garden Grove, Costa Mesa, Irvine, and surrounding Orange County cities.",
  path: "/service-areas"
});

export default function ServiceAreasPage() {
  return (
    <main className="pt-20">
      <section className="noise py-24 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">Service Areas</p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">Orange County junk removal with Santa Ana speed.</h1>
          <p className="mt-6 text-xl leading-9 text-white/72">Book clean, professional hauling across Santa Ana and nearby cities.</p>
        </div>
      </section>
      <Section title="Cities we serve.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cityPages.map((city) => (
            <Link key={city.slug} href={`/service-areas/${city.slug}`} className="group flex items-center justify-between rounded-3xl border border-black/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <span className="text-xl font-black text-black">{city.name}</span>
              <ArrowRight className="h-5 w-5 text-brand-red transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>
      <CTA />
    </main>
  );
}
