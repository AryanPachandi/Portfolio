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


    </div>
  );
}
