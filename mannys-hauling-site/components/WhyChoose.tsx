import { whyChoose } from "@/lib/site";

export function WhyChoose() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {whyChoose.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <Icon className="mb-7 h-8 w-8 text-brand-red" />
            <h3 className="text-xl font-black">{item.title}</h3>
            <p className="mt-3 leading-7 text-white/64">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
