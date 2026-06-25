import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms | Manny's Hauling Services",
  description: "Terms and conditions for Manny's Hauling Services junk removal in Santa Ana, CA.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <main className="container max-w-3xl py-32">
      <h1 className="text-5xl font-black tracking-tight">Terms</h1>
      <p className="mt-6 leading-8 text-black/64">Estimates are based on item volume, access, labor, disposal requirements, and job conditions. Final pricing is confirmed before removal begins.</p>
      <h2 className="mt-10 text-2xl font-black">Restricted items</h2>
      <p className="mt-3 leading-8 text-black/64">Hazardous materials, regulated waste, chemicals, fuel, paint, asbestos, and biohazards are not accepted.</p>
      <h2 className="mt-10 text-2xl font-black">Scheduling</h2>
      <p className="mt-3 leading-8 text-black/64">Same-day service is subject to availability, route timing, weather, access, and job size.</p>
    </main>
  );
}
