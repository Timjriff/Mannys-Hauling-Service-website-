import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { business, createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Manny's Hauling Services | Santa Ana Junk Removal",
  description: "Learn about Manny's Hauling Services, a locally owned junk removal company serving Santa Ana and Orange County with same-day hauling and upfront pricing.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="noise py-24 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">About</p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">Local junk removal built on trust.</h1>
          <p className="mt-6 text-xl leading-9 text-white/72">
            Manny&apos;s Hauling Services helps Santa Ana residents, businesses, landlords, and property teams clear unwanted junk with a professional crew and straightforward pricing.
          </p>
        </div>
      </section>
      <Section title="Why people call Manny's first." text={`${business.name} is focused on fast response, clean communication, careful removal, and responsible disposal whenever possible.`}>
        <div className="grid gap-5 md:grid-cols-3">
          {["Same-day and next-day openings", "Donation and recycling when practical", "Careful crews for homes and businesses"].map((item) => (
            <div key={item} className="rounded-3xl bg-brand-soft p-7 text-2xl font-black text-black">{item}</div>
          ))}
        </div>
      </Section>
      <CTA />
    </main>
  );
}
