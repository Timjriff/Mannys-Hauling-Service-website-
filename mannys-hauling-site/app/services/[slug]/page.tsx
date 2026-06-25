import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { business, createMetadata, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} Santa Ana | Manny's Hauling Services`,
    description: `${service.title} in Santa Ana by Manny's Hauling Services. Same-day junk hauling, upfront pricing, professional crews, and Orange County service.`,
    path: `/services/${service.slug}`
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <main className="pt-20">
      <section className="noise py-24 text-white">
        <div className="container max-w-4xl">
          <Icon className="mb-6 h-12 w-12 text-brand-red" />
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">Junk Removal Santa Ana</p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">{service.title} in Santa Ana</h1>
          <p className="mt-6 text-xl leading-9 text-white/72">{service.details}</p>
          <a href={business.phoneHref} className="mt-8 inline-flex rounded-full bg-brand-red px-7 py-4 font-black text-white">Call {business.phone}</a>
        </div>
      </section>
      <Section title={`Professional ${service.title.toLowerCase()} without the headache.`} text={`Manny's Hauling Services handles the lifting, loading, hauling, and disposal for ${service.title.toLowerCase()} across Santa Ana and Orange County.`}>
        <div className="grid gap-5 md:grid-cols-3">
          {["Upfront pricing", "Same-day availability", "Careful removal"].map((item) => (
            <div key={item} className="rounded-3xl bg-brand-soft p-7 text-2xl font-black text-black">{item}</div>
          ))}
        </div>
      </Section>
      <Section dark title="Other services people book with this.">
        <ServicesGrid limit={6} />
      </Section>
      <Section title="Frequently asked questions.">
        <FAQ />
      </Section>
      <CTA />
    </main>
  );
}
