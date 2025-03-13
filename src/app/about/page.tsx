"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import "../animations.css";

export default function AboutPage() {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <>
      <section className="py-16 md:py-44 bg-black/5">
        <div className="container-custom w-screen">
          <h1 
            ref={registerAnimatedRef}
            data-animation="rise-fade-in"
            className="animate-rise text-5xl md:text-[152px] text-center font-medium tracking-tighter mt-10 delay-200"
          >
            nice to meet you.
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container-custom">
          <div 
            ref={registerAnimatedRef}
            data-animation="slide-up"
            className="animate-slide-up grid grid-cols-1 md:grid-cols-2 gap-12 items-start delay-400"
          >
            <div 
              ref={registerAnimatedRef}
              data-animation="fade-in"
              className="animate-fade-in relative aspect-square w-full delay-600"
            >
              <Image
                src="/me.jpg"
                alt="Samuel Tetenga"
                fill
                crossOrigin="anonymous"
                className="object-cover"
              />
            </div>

            <div>
              <h2 
                ref={registerAnimatedRef}
                data-animation="slide-up"
                className="animate-slide-up text-4xl md:text-5xl font-medium tracking-tighter mb-8 delay-200"
              >
                Hi.
              </h2>

              <div className="space-y-4 text-lg">
                <p
                  ref={registerAnimatedRef}
                  data-animation="fade-in" 
                  className="animate-fade-in delay-400"
                >
                  I'm Samuel, a Software Developer and Digital Designer from the
                  vibrant country of Kenya. I specialize in software development
                  and premium branding, helping businesses worldwide to stand
                  out with innovative digital solutions. From crafting robust
                  applications to building comprehensive brand identities, my
                  primary focus is on creating solutions that are both
                  technically excellent and visually distinctive.
                </p>

                <p
                  ref={registerAnimatedRef}
                  data-animation="fade-in"
                  className="animate-fade-in delay-600"
                >
                  Outside of design, I love unique culinary experiences, reading
                  books and playing the guitar.
                </p>

                <div 
                  ref={registerAnimatedRef}
                  data-animation="slide-up"
                  className="animate-slide-up pt-8 delay-600"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-black hover:underline"
                  >
                    Say hi <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}