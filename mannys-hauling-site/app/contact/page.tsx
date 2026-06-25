import { Mail, MapPin, Phone } from "lucide-react";
import { CTA } from "@/components/CTA";
import { business, createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Manny's Hauling Services | Junk Removal Santa Ana",
  description: "Contact Manny's Hauling Services for same-day junk removal in Santa Ana. Call (657) 335-5544 or request a free estimate for hauling and cleanouts.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="noise py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-brand-red">Contact</p>
            <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">Get a free junk removal estimate.</h1>
            <p className="mt-6 text-xl leading-9 text-white/72">Tell us what needs to go and get clear pricing for Santa Ana junk removal, cleanouts, furniture removal, appliance removal, and hauling.</p>
            <div className="mt-8 grid gap-4 text-white">
              <a href={business.phoneHref} className="flex items-center gap-3 text-lg font-black"><Phone className="h-5 w-5 text-brand-red" />{business.phone}</a>
              <a href={business.emailHref} className="flex items-center gap-3 text-lg font-black"><Mail className="h-5 w-5 text-brand-red" />{business.email}</a>
              <span className="flex items-center gap-3 text-lg font-black"><MapPin className="h-5 w-5 text-brand-red" />{business.address}</span>
            </div>
          </div>
          <form className="rounded-[2rem] bg-white p-6 text-black shadow-premium md:p-8">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-black">Name<input className="rounded-2xl border border-black/10 px-4 py-3 outline-brand-red" name="name" /></label>
              <label className="grid gap-2 text-sm font-black">Phone<input className="rounded-2xl border border-black/10 px-4 py-3 outline-brand-red" name="phone" /></label>
              <label className="grid gap-2 text-sm font-black">Email<input className="rounded-2xl border border-black/10 px-4 py-3 outline-brand-red" name="email" type="email" /></label>
              <label className="grid gap-2 text-sm font-black">What needs to go?<textarea className="min-h-32 rounded-2xl border border-black/10 px-4 py-3 outline-brand-red" name="message" /></label>
              <a href={business.emailHref} className="rounded-full bg-brand-red px-7 py-4 text-center font-black text-white shadow-red">Send Request</a>
            </div>
          </form>
        </div>
      </section>
      <CTA />
    </main>
  );
}
