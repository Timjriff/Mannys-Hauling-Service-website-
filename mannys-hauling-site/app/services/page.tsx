import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Junk Removal Services Santa Ana | Manny's Hauling Services",
  description: "Explore junk removal services in Santa Ana including furniture removal, appliance removal, garage cleanouts, estate cleanouts, construction debris removal, yard waste, and more.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="noise py-24 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">Services</p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">Santa Ana junk removal for every kind of cleanout.</h1>
          <p className="mt-6 text-xl leading-9 text-white/72">Book fast hauling for homes, offices, rentals, job sites, storage units, yards, and commercial properties.</p>
        </div>
      </section>
      <Section title="Choose your hauling service.">
        <ServicesGrid />
      </Section>
      <CTA />
    </main>
  );
}
