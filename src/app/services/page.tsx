"use client";

import "../animations.css";
import { useAnimateOnScroll } from "../../hooks/useAnimateOnScroll"
type ServiceCategoryProps = {
  title: string;
  services: string[];
  index: number;
};

function ServiceCategory({ title, services, index }: ServiceCategoryProps) {
  const { registerAnimatedRef } = useAnimateOnScroll();

  return (
    <div
      ref={registerAnimatedRef}
      data-animation="slide-up"
      className={`animate-slide-up py-8 border-t border-gray-200 delay-item-${index}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div className="md:col-span-9">
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li
                key={idx}
                ref={registerAnimatedRef}
                data-animation="fade-in"
                className={`animate-fade-in text-gray-800 delay-item-${
                  idx % 10
                }`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
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
            Solutions built to last.
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container-custom">
          <h2
            ref={registerAnimatedRef}
            data-animation="slide-up"
            className="animate-slide-up text-4xl md:text-5xl font-medium tracking-tighter mb-12"
          >
            Services.
          </h2>

          <ServiceCategory
            index={0}
            title="Strategy"
            services={[
              "Market Research",
              "Naming",
              "Tone of Voice",
              "Copywriting",
            ]}
          />

          <ServiceCategory
            index={1}
            title="Branding"
            services={[
              "Product Design",
              "Brand Identity",
              "Creative Direction",
              "Logo",
              "Colors",
              "Typography",
              "Brand Guidelines",
              "Brand Pattern",
              "Motion Design",
            ]}
          />

          <ServiceCategory
            index={2}
            title="Web"
            services={[
              "Website Design",
              "User Interface",
              "User Experience",
              "Full-stack development (React, Typescript/Javascript, Postgres, Firebase, NodeJs, Express, MongoDB)",
            ]}
          />
        </div>
      </section>
    </>
  );
}
