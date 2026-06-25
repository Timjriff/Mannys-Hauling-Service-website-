"use client";

import { useState } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <div className="overflow-hidden rounded-[2rem] bg-black shadow-premium">
      <div className="relative h-[520px]">
        <div className="gallery-before absolute inset-0" />
        <div className="gallery-after absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
        <div className="absolute inset-y-0 w-1 bg-white shadow-2xl" style={{ left: `${position}%` }} />
        <input
          aria-label="Compare before and after junk removal photos"
          type="range"
          min="12"
          max="88"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-x-8 bottom-8 z-10 accent-brand-red"
        />
        <div className="absolute left-6 top-6 rounded-full bg-black/72 px-4 py-2 text-sm font-black text-white backdrop-blur">Before</div>
        <div className="absolute right-6 top-6 rounded-full bg-brand-red px-4 py-2 text-sm font-black text-white">After</div>
      </div>
    </div>
  );
}
