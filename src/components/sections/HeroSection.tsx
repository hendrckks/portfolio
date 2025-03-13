"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "@/styles/pulse.css";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

export default function HeroSection() {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <section className="py-10 md:py-32 md:-mb-36 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          <div className="md:col-span-7">
            <h1
              ref={registerAnimatedRef}
              data-animation="slide-up"
              className="animate-slide-up text-6xl md:text-7xl font-medium tracking-tighter mb-5 md:mb-16"
            >
              Crafting Digital Solutions
            </h1>

            <div
              ref={registerAnimatedRef}
              data-animation="fade-in"
              className="animate-fade-in grid grid-cols-2 md:grid-cols-3 gap-2 delay-400"
            >
              <div className="p-3 border border-gray-200 cursor-pointer hover:bg-black/10 bg-black/5 transition-colors duration-300 ease-in-out rounded-xl">
                <h3 className="text-sm text-gray-500 mb-1">Availability</h3>
                <p className="text-xs font-medium flex items-center tracking-tight">
                  <span className="w-2 h-2 rounded-full  bg-purple-500 mr-2 animate-pulse-glow"></span>
                  Open for new projects
                </p>
              </div>

              <div className="p-3 border border-gray-200 cursor-pointer hover:bg-black/10 bg-black/5 transition-colors duration-300 ease-in-out rounded-xl">
                <h3 className="text-sm text-gray-500 mb-1">Expertise</h3>
                <p className="text-xs font-medium tracking-tight">
                  Software & Design
                </p>
              </div>

              <div className="p-3 border group border-gray-200 cursor-pointer hover:bg-black/10 transition-colors bg-black/5 duration-300 ease-in-out rounded-xl">
                <h3 className="text-sm text-gray-500 mb-1 ">Contact</h3>
                <Link
                  href="/contact"
                  className="text-xs font-medium tracking-tight flex items-center"
                >
                  Get in touch
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div
              ref={registerAnimatedRef}
              data-animation="fade-in"
              className="animate-fade-in p-4 bg-background rounded-none delay-600"
            >
              <p className="text-gray-700 font-medium md:text-base text-lg">
                Samuel Tetenga is a Software Developer and Designer who combines
                technical expertise with creative design thinking to build
                impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
