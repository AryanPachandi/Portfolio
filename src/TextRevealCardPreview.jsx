"use client";
import React, { useState } from "react";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  // State to handle tap reveal on mobile
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="flex items-center justify-center
                 h-[25rem] sm:h-[40rem]
                 w-full
                 px-4 sm:px-8
                 rounded-2xl
                 bg-[#0E0E10]"
    >
      <TextRevealCard
        text="Creative Developer"
        revealText="Aryan Pachandi"
        // Toggle reveal on mobile tap
        onClick={() => setRevealed(!revealed)}
        revealed={revealed} // pass state to the card if it supports it
      />
    </div>
  );
}
