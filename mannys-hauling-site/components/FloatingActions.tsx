import Link from "next/link";
import { ClipboardList, Phone } from "lucide-react";
import { business } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a href={business.phoneHref} className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-black text-white shadow-2xl md:hidden">
        <Phone className="h-4 w-4 text-brand-red" />
        Call Now
      </a>
      <Link href="/contact" className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-black text-white shadow-red">
        <ClipboardList className="h-4 w-4" />
        Estimate
      </Link>
    </>
  );
}
