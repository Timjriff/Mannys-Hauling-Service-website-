"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Alicia R.",
    city: "Santa Ana",
    quote: "Manny's crew showed up fast, gave a fair price, and cleared a garage that had been stressing us out for months."
  },
  {
    name: "Daniel M.",
    city: "Orange",
    quote: "Professional, clean, and easy to schedule. They removed furniture and appliances without damaging a thing."
  },
  {
    name: "Priscilla V.",
    city: "Tustin",
    quote: "The estimate was upfront and the same-day pickup saved our move-out. I would absolutely use them again."
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const stars = useMemo(() => Array.from({ length: 5 }), []);

  return (
    <div className="rounded-[2rem] bg-brand-soft p-6 shadow-premium md:p-10">
      <div className="mb-8 flex gap-1 text-brand-red">
        {stars.map((_, starIndex) => <Star key={starIndex} className="h-5 w-5 fill-current" />)}
      </div>
      <p className="text-balance text-3xl font-black leading-tight text-black md:text-5xl">“{review.quote}”</p>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div>
          <p className="font-black text-black">{review.name}</p>
          <p className="text-sm font-semibold text-black/54">{review.city}</p>
        </div>
        <div className="flex gap-2">
          <button aria-label="Previous review" onClick={() => setIndex((index + reviews.length - 1) % reviews.length)} className="rounded-full bg-white p-3 shadow-sm">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button aria-label="Next review" onClick={() => setIndex((index + 1) % reviews.length)} className="rounded-full bg-black p-3 text-white shadow-sm">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
