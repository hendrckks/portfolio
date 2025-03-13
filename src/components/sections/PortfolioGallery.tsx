"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Huntrr - Real estate platform",
    image: "/huntrr3.avif",
    category: "Full-Stack Development",
    github: "https://github.com/hendrckks/huntrr",
    live: "https://huntrr-a10eb.web.app/",
  },
  {
    id: 2,
    title: "Under - Premium restaurant",
    image: "/under web.png",
    category: "Web Development",
    github: "",
    live: "https://under.no/en/",
  },
  {
    id: 3,
    title: "Widecanvas",
    image: "/wc2.png",
    category: "Web Development",
    github: "https://github.com/hendrckks/wide-canvas",
    live: "https://wide-canvas.web.app/",
  },
];

export default function PortfolioGallery() {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <section className="py-16 md:py-24 md:-mt-32 -mt-16 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={registerAnimatedRef}
              data-animation="slide-up"
              className={`animate-slide-up mb-2 ${
                index === 0 ? "md:col-span-2" : ""
              } delay-item-${index}`}
            >
              <Link href={project.live} className="group block">
                <div className="overflow-hidden relative">
                  <div
                    ref={registerAnimatedRef}
                    data-animation="fade-in"
                    className={`animate-fade-in relative md:aspect-[4/2] aspect-[4/3] rounded-[10px] overflow-hidden delay-item-${
                      index + 3
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      crossOrigin="anonymous"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-sm text-gray-600">
                          {project.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-medium">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 justify-end">
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
                          <span className="md:block hidden">Live demo</span>
                          <ExternalLink className="md:w-4 md:h-4 w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
