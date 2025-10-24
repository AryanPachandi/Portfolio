"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

import Hero from "./Hero";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="relative z-20 flex items-center justify-center h-full">
        <Hero />
      </div>
    </WavyBackground>
  );
}
