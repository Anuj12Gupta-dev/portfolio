"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { MagneticButton } from "../magnetic-button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <Card className="relative w-full min-h-screen bg-black/[0.96] overflow-hidden px-6 sm:px-10 lg:px-[10%]">
      <Spotlight
        className="-top-40 left-0 sm:left-40 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* LEFT CONTENT */}
        <div className="flex-1 relative z-10 flex flex-col justify-center gap-6 sm:gap-8 py-20 md:py-0">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Anuj Gupta
            </h1>

            <p className="mt-4 text-neutral-300 max-w-lg text-sm sm:text-base">
              Full Stack Developer & Computer Science Undergraduate. Building
              scalable backend systems and immersive frontend interfaces.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#dcd3d3] text-primary-foreground font-medium rounded-full transition-all"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/Anuj_Gupta_Full_Stack_Developer_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 font-medium rounded-full border border-white/80 hover:border-white transition-colors"
              >
                Download Resume
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
            alwaysVisible={true}
          />
        </div>
      </div>
    </Card>
  );
}
