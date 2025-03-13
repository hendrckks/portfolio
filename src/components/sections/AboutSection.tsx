"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const { registerAnimatedRef } = useAnimateOnScroll();
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      const iconContainer =
        button.querySelector<HTMLDivElement>(".icon-container");
      if (iconContainer) {
        const plusIcon = iconContainer.querySelector<HTMLElement>(".plus-icon");
        const arrowIcon =
          iconContainer.querySelector<HTMLElement>(".arrow-icon");

        if (plusIcon && arrowIcon) {
          // Reset all classes first
          plusIcon.classList.remove("showing", "hiding", "hidden");
          arrowIcon.classList.remove("showing", "hiding", "hidden");

          // Force a reflow to ensure animations restart
          void plusIcon.offsetWidth;
          void arrowIcon.offsetWidth;

          // Apply new animation classes
          plusIcon.classList.add("hiding");
          arrowIcon.classList.add("showing");
        }
      }
    };

    const handleMouseLeave = () => {
      const iconContainer =
        button.querySelector<HTMLDivElement>(".icon-container");
      if (iconContainer) {
        const plusIcon = iconContainer.querySelector<HTMLElement>(".plus-icon");
        const arrowIcon =
          iconContainer.querySelector<HTMLElement>(".arrow-icon");

        if (plusIcon && arrowIcon) {
          // Reset all classes first
          plusIcon.classList.remove("showing", "hiding", "hidden");
          arrowIcon.classList.remove("showing", "hiding", "hidden");

          // Force a reflow to ensure animations restart
          void plusIcon.offsetWidth;
          void arrowIcon.offsetWidth;

          // Apply new animation classes
          arrowIcon.classList.add("hiding");
          plusIcon.classList.add("showing");
        }
      }
    };

    // Initialize the state
    const iconContainer =
      button.querySelector<HTMLDivElement>(".icon-container");
    if (iconContainer) {
      const plusIcon = iconContainer.querySelector<HTMLElement>(".plus-icon");
      const arrowIcon = iconContainer.querySelector<HTMLElement>(".arrow-icon");

      if (plusIcon && arrowIcon) {
        plusIcon.classList.add("showing");
        arrowIcon.classList.add("hidden");
      }
    }

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={registerAnimatedRef}
            data-animation="fade-in"
            className="animate-fade-in relative aspect-square max-w-md mx-auto md:mx-0"
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
            <blockquote
              ref={registerAnimatedRef}
              data-animation="slide-up"
              className="animate-slide-up text-3xl md:text-4xl font-medium tracking-tight mb-6"
            >
              " Building innovative digital solutions that combine technical
              excellence with thoughtful design. "
            </blockquote>

            <Link
              href="/about"
              ref={(el) => {
                if (el) registerAnimatedRef(el);
                buttonRef.current = el;
              }}
              data-animation="fade-in"
              className="about-btn animate-fade-in flex w-fit items-center px-4 py-2 bg-white rounded-[6px] text-black text-sm transition-colors delay-400 hover:bg-white"
            >
              <span className="mr-2 tracking-tight">ABOUT ME</span>
              <div className="icon-container relative w-5 h-5">
                <Plus className="plus-icon absolute top-0 left-0 w-5 h-5 font-light" />
                <ArrowRight className="arrow-icon absolute top-0 left-0 w-5 h-5 font-light" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
