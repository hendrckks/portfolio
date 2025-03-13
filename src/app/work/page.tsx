"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import "../animations.css";

// Using the projects from the PortfolioGallery component with added details
const projects = [
  {
    id: 1,
    title: "Huntrr - Real estate platform",
    image: "/huntrr3.avif",
    category: "Full-Stack Development",
    description: "A comprehensive platform for real estate listings and management.",
    github: "https://github.com/hendrckks/huntrr",
    live: "https://huntrr-a10eb.web.app/",
    year: 2024,
  },
  {
    id: 2,
    title: "Under - Premium restaurant",
    image: "/under web.png",
    category: "Web Development",
    description: "Premium restaurant website with elegant design and seamless user experience.",
    github: "",
    live: "https://under.no/en/",
    year: 2023,
  },
  {
    id: 3,
    title: "Widecanvas",
    image: "/wc2.png",
    category: "Web Development",
    description: "Modern web application showcasing creative design and functionality.",
    github: "https://github.com/hendrckks/wide-canvas",
    live: "https://wide-canvas.web.app/",
    year: 2023,
  },
];

export default function WorkPage() {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <>
      <section className="py-16 md:py-44 bg-black/5 relative overflow-hidden">
        <div className="container-custom">
          <h1
            ref={registerAnimatedRef}
            data-animation="rise-fade-in"
            className="animate-rise text-5xl md:text-[152px] font-medium text-center tracking-tighter mt-10 delay-200"
          >
            Selected works.
          </h1>
        </div>
      </section>
      <section className="py-24 md:py-36 bg-background">
        <div className="container-custom">
          <div className="flex flex-col space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={registerAnimatedRef}
                data-animation="slide-up"
                className={`animate-slide-up grid grid-cols-1 md:grid-cols-12 gap-12 items-center delay-item-${index}`}
              >
                <div className="md:col-span-7 order-2 md:order-1">
                  <div
                    ref={registerAnimatedRef}
                    data-animation="fade-in"
                    className={`animate-fade-in relative aspect-video overflow-hidden rounded-[10px] delay-item-${
                      index + 1
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      crossOrigin="anonymous"
                      className="object-cover scale-110 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="md:col-span-5 order-1 md:order-2">
                  <span
                    ref={registerAnimatedRef}
                    data-animation="fade-in"
                    className="animate-fade-in text-sm text-gray-500 delay-item-0"
                  >
                    {project.category}
                  </span>
                  <h2
                    ref={registerAnimatedRef}
                    data-animation="slide-up"
                    className="animate-slide-up text-3xl md:text-4xl font-medium tracking-tighter mt-2 mb-4 delay-item-1"
                  >
                    {project.title}
                  </h2>
                  <p
                    ref={registerAnimatedRef}
                    data-animation="fade-in"
                    className="animate-fade-in text-gray-700 mb-4 delay-item-2"
                  >
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {project.github && (
                      <button
                        onClick={() =>
                          window.open(
                            project.github,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                        className="p-2 rounded-[6px] bg-black/5 hover:bg-black/10 duration-300 ease-in-out transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </button>
                    )}
                    {project.live && (
                      <button
                        onClick={() =>
                          window.open(
                            project.live,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                        className="p-2 rounded-[6px] text-sm tracking-tight font-medium flex items-center gap-2 bg-black/5 hover:bg-black/10 duration-300 ease-in-out transition-colors"
                        title="View Live Demo"
                      >
                        Live demo <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <span
                    ref={registerAnimatedRef}
                    data-animation="fade-in"
                    className="animate-fade-in text-sm text-gray-500 delay-item-3"
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
