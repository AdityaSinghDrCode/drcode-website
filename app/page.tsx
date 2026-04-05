import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";
import TechExpertise from "@/components/tech-expertise";
import HowWeWork from "@/components/how-we-work";
import WhyDrCode from "@/components/why-drcode";
import VisionMissionValues from "@/components/vision-mission-values";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { Component as TestimonialShowcase } from "@/components/ui/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <TechExpertise />
      <HowWeWork />
      <WhyDrCode />
      <VisionMissionValues />
      <TestimonialShowcase />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
