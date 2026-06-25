import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { business, cityPages, createMetadata } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cityPages.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const page = cityPages.find((item) => item.slug === city);
  if (!page) return {};
  return createMetadata({
    title: `${page.name} Junk Removal | Manny's Hauling Services`,
    description: `Fast, affordable ${page.name} junk removal from Manny's Hauling Services. Furniture removal, appliance removal, garage cleanouts, estate cleanouts, and same-day hauling.`,
    path: `/service-areas/${page.slug}`
  });
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const page = cityPages.find((item) => item.slug === city);
  if (!page) notFound();

  return (
    <main className="pt-20">
      <section className="noise py-24 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">Orange County Junk Removal</p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">Junk Removal in {page.name}</h1>
          <p className="mt-6 text-xl leading-9 text-white/72">
            Manny&apos;s Hauling Services provides same-day junk hauling, furniture removal, appliance removal, and cleanouts for {page.name} homes and businesses.
          </p>
          <a href={business.phoneHref} className="mt-8 inline-flex rounded-full bg-brand-red px-7 py-4 font-black text-white">Call {business.phone}</a>
        </div>
      </section>
      <Section title={`Cleanouts and hauling in ${page.name}.`} text={`Get upfront pricing, fast scheduling, and professional removal for bulky junk, garage clutter, yard waste, office items, and renovation debris in ${page.name}.`}>
        <ServicesGrid limit={6} />
      </Section>
      <Section dark title="Why local customers choose Manny's.">
        <div className="grid gap-5 md:grid-cols-3">
          {["Same-day service available", "Affordable junk removal", "Professional Orange County crew"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 text-2xl font-black text-white">{item}</div>
          ))}
        </div>
      </Section>
      <Section title="Common questions.">
        <FAQ />
      </Section>
      <CTA />
    </main>
  );
}
