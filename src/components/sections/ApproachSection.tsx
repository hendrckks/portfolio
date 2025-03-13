"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

type ProcessStepProps = {
  title: string;
  description: string;
  index: number;
};

function ProcessStep({ title, description, index }: ProcessStepProps) {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <div
      ref={registerAnimatedRef}
      data-animation="slide-up"
      className={`animate-slide-up mb-10 border-b border-black/40 py-8 delay-item-${index}`}
    >
      <h3 className="text-2xl font-medium mb-2 flex items-center">
        <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
        {title}
      </h3>
      <p
        ref={registerAnimatedRef}
        data-animation="fade-in"
        className={`animate-fade-in text-gray-600 mx-4 delay-item-${index + 4}`}
      >
        {description}
      </p>
    </div>
  );
}

export default function ApproachSection() {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <section className="py-24 md:py-24 bg-background border-t border-black/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <h2
              ref={registerAnimatedRef}
              data-animation="slide-up"
              className="animate-slide-up text-4xl md:text-7xl font-medium tracking-tighter mb-6"
            >
              Approach.
            </h2>
            <p
              ref={registerAnimatedRef}
              data-animation="fade-in"
              className="animate-fade-in text-gray-600 max-w-xl mb-8 delay-400"
            >
              My development process is structured to deliver high-quality
              solutions that meet your business needs effectively.
            </p>

            <Link
              href="/contact"
              ref={registerAnimatedRef}
              data-animation="fade-in"
              className="animate-fade-in inline-flex items-center text-black hover:underline group delay-600"
            >
              Start a project{" "}
              <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="md:col-span-6">
            <ProcessStep
              title="Discovery & Planning"
              description="We'll start with a detailed discussion of your project requirements, goals, and technical constraints to create a comprehensive development plan."
              index={0}
            />
            <ProcessStep
              title="Design & Development"
              description="Using modern technologies and best practices, I'll craft your solution with a focus on both functionality and user experience."
              index={1}
            />
            <ProcessStep
              title="Testing & Refinement"
              description="Rigorous testing and iterative refinement ensure your solution is robust, efficient, and meets all requirements."
              index={2}
            />
            <ProcessStep
              title="Deployment & Support"
              description="I'll handle the deployment process and provide ongoing support to ensure your solution continues to perform optimally."
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
