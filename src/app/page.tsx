"use client";

import HeroSection from "@/components/sections/HeroSection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import ApproachSection from "@/components/sections/ApproachSection";
import AboutSection from "@/components/sections/AboutSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <PortfolioGallery />
      <ApproachSection />
      <AboutSection />
    </>
  );
}