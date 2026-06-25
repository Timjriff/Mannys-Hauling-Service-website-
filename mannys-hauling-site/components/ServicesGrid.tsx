import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";

export function ServicesGrid({ limit }: { limit?: number }) {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {shown.map((service) => {
        const Icon = service.icon;
        return (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-3xl border border-black/8 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                <Icon className="h-7 w-7" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-black/30 transition group-hover:text-brand-red" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-black">{service.title}</h3>
            <p className="mt-3 leading-7 text-black/60">{service.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
