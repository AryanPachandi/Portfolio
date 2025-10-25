"use client";
import React from "react";
import Hero from "./Hero.jsx";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950 antialiased">
      {/* Background Animation Layer */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none will-change-transform transform-gpu"
      >
        <BackgroundBeams />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Hero />
      </div>
    </div>
  );
}
