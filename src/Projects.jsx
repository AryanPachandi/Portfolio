"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ExternalLink } from "lucide-react";
import pro3 from "./assets/pro3.png";
import pro1 from "./assets/pro1.png";

export function WobbleCardDemo({ projects }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* First Large Project Card */}
      {projects[0] && (
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-purple-900/50 to-purple-800/50 min-h-[500px] lg:min-h-[300px]"
          className="">
          <div className="max-w-md relative z-10">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {projects[0].title}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {projects[0].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={projects[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white hover:text-purple-300 transition-colors">
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
             <img
          src={pro1}
          width={500}
          height={500}
          // alt="linear demo image"
          className="absolute right-0 lg:-right-[25%] bottom-0 w-[400px] md:w-[450px] lg:w-[500px]  opacity-90 rounded-2xl drop-shadow-lg"
        />
        </WobbleCard>
      )}

      {/* Small Info Card 1 */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-blue-900/50 to-blue-800/50">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Full-Stack Engineering
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Building scalable applications from database to deployment with modern tech stacks.
        </p>
      </WobbleCard>

      {/* Second Large Project Card */}
      {projects[1] && (
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm relative z-10">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {projects[1].title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              {projects[1].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {projects[1].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={projects[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white hover:text-indigo-300 transition-colors">
              View Project <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </WobbleCard>
      )}

      {/* Small Info Card 2 */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-violet-900/50 to-violet-800/50">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Problem Solver
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Tackling complex technical challenges with clean, maintainable, and production-ready code.
        </p>
      </WobbleCard>

      {/* Third Large Project Card */}
      {projects[2] && (
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-pink-900/50 to-pink-800/50 min-h-[500px] lg:min-h-[300px]"
          className="">
          <div className="max-w-md relative z-10">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {projects[2].title}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {projects[2].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {projects[2].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={projects[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white hover:text-pink-300 transition-colors">
              View Project <ExternalLink className="w-4 h-4" />
            </a>

          </div>
          <img
          src={pro3}
          width={500}
          height={500}
          // alt="linear demo image"
          className="absolute right-0 lg:-right-[25%] bottom-0 w-[400px] md:w-[450px] lg:w-[500px]  opacity-90 rounded-2xl drop-shadow-lg"
        />
        </WobbleCard>
      )}
    </div>
  );
}
