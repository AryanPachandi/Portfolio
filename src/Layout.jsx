"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
        <motion.div
          className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="I am  "
            words={["a Full-Stack Developer", "building cool projects", "a Cloud Enthusiast"  ]} />
        </motion.div>
      {/* <motion.div
  className="relative mx-4 my-4 flex flex-col items-center justify-center gap-6 text-center sm:mx-0 sm:mb-0 sm:flex-row">

  <LayoutTextFlip
    text="I am  "
    words={["a Full-Stack Developer", "building cool projects", "a Cloud Enthusiast"]}
    className="text-white text-4xl sm:text-5xl font-mono font-bold drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)]" />




</motion.div> */}

    </div>
  );
}
