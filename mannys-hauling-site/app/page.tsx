import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";
import { business, cityPages } from "@/lib/site";

const process = [
  "Call or Request Estimate",
  "Receive Upfront Pricing",
  "We Remove Everything",
  "You Enjoy Your Clean Space"
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Section eyebrow="Junk hauling services" title="Everything gone, without the friction." text="From one bulky item to full property cleanouts, Manny's Hauling Services handles the lifting, loading, hauling, and disposal.">
        <ServicesGrid />
      </Section>
      <Section dark eyebrow="Why choose Manny's" title="Premium service with local speed." text="Professional junk removal in Santa Ana should feel simple, respectful, and clear from the first call.">
        <WhyChoose />
      </Section>
      <Section eyebrow="Before and after" title="Slide from cluttered to clean." text="Use the slider to compare a typical cleanup transformation.">
        <BeforeAfter />
      </Section>
      <Section eyebrow="Our process" title="A clean four-step experience.">
        <div className="grid gap-5 md:grid-cols-4">
          {process.map((item, index) => (
            <div key={item} className="rounded-3xl border border-black/8 bg-brand-soft p-6">
              <span className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-black text-white">{index + 1}</span>
              <h3 className="text-xl font-black text-black">{item}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section dark eyebrow="Reviews" title="Five-star service energy." text="Modern, careful, and fast. The kind of hauling experience people actually recommend.">
        <Testimonials />
      </Section>
      <Section eyebrow="Service areas" title="Santa Ana and Orange County coverage." text="Local crews serving homes, apartments, offices, storage units, and commercial properties across Orange County.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cityPages.map((city) => (
            <Link key={city.slug} href={`/service-areas/${city.slug}`} className="group flex items-center justify-between rounded-2xl border border-black/8 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <span className="font-black text-black">{city.name}</span>
              <ArrowRight className="h-5 w-5 text-brand-red transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <div className="mt-8 rounded-3xl bg-black p-6 text-white">
          <div className="flex flex-wrap gap-4">
            {["Licensed", "Insured", "Same-Day Service", "Locally Owned", "Affordable Junk Removal"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-4 w-4 text-brand-red" />{item}</span>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Questions before we haul?">
        <FAQ />
      </Section>
      <CTA />
    </main>
  );
}
