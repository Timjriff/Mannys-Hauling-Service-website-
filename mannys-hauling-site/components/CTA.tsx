import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="container overflow-hidden rounded-[2rem] bg-black p-8 text-white shadow-premium md:p-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">Same-Day Service Available</p>
            <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Ready to clear the space?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">Call Manny&apos;s Hauling Services for junk removal in Santa Ana, furniture removal, appliance removal, garage cleanouts, and full Orange County hauling.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-black">
              <Phone className="h-5 w-5 text-brand-red" />
              {business.phone}
            </a>
            <Link href="/contact" className="rounded-full bg-brand-red px-7 py-4 text-center font-black text-white shadow-red">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
