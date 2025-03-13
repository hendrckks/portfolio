"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import "../../styles/animations.css";

export default function Footer() {
  const [time, setTime] = useState("--:--");
  const [currentYear, setCurrentYear] = useState("");
  const { registerAnimatedRef } = useAnimateOnScroll();

  useEffect(() => {
    // Update time and year only on client-side
    updateTime();
    setCurrentYear(new Date().getFullYear().toString());

    // Set interval to update time every minute
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    // Get the current time in Amsterdam
    const amsterdamTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Africa/Nairobi",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    setTime(amsterdamTime);
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div>
              <h2
                ref={registerAnimatedRef}
                data-animation="slide-up"
                className="animate-slide-up text-3xl md:text-4xl font-normal mb-4"
              >
                Visualizing your
                <br />
                Business` worth
              </h2>
              <div
                ref={registerAnimatedRef}
                data-animation="fade-in"
                className="animate-fade-in mt-4 delay-200"
              >
                <p>Start a project:</p>
                <a
                  href="mailto:samueltetenga@gmail.com"
                  className="text-white/70 underline-offset-2 hover:underline"
                >
                  samueltetenga@gmail.com
                </a>
              </div>
            </div>

            <div
              ref={registerAnimatedRef}
              data-animation="slide-up"
              className="animate-slide-up grid grid-cols-2 gap-x-16 gap-y-6 delay-200"
            >
              <div>
                <nav className="flex flex-col space-y-2">
                  {["Home", "Work", "About", "Services", "Contact"].map(
                    (item, index) => (
                      <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        ref={registerAnimatedRef}
                        data-animation="fade-in"
                        className={`animate-fade-in hover:underline delay-item-${index}`}
                      >
                        {item}
                      </Link>
                    )
                  )}
                </nav>
              </div>
              <div>
                <nav className="flex flex-col space-y-2">
                  {[
                    { name: "X/Twitter", url: "" },
                    { name: "LinkedIn", url: "" },
                  ].map((item, index) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={registerAnimatedRef}
                      data-animation="fade-in"
                      className={`animate-fade-in hover:underline delay-item-${index}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div
            ref={registerAnimatedRef}
            data-animation="fade-in"
            className="animate-fade-in flex flex-col md:flex-row justify-between pt-4 border-t border-gray-800 delay-400"
          >
            <div className="flex items-center">
              <span suppressHydrationWarning>{currentYear} ©</span>
              <span className="ml-2">Samuel Tetenga</span>
            </div>
            <div>
              <span>Kenya</span>
              <span className="ml-4" suppressHydrationWarning>
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={registerAnimatedRef}
        data-animation="rise-fade-in"
        className="animate-rise py-16 text-white text-7xl md:text-[190px] font-medium tracking-tight delay-400"
      >
        <div className="container-custom">
          <div className="whitespace-nowrap">Samuel Tetenga</div>
        </div>
      </div>
    </footer>
  );
}
