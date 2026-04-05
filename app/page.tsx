import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";

const TechExpertise = dynamic(() => import("@/components/tech-expertise"));
const HowWeWork = dynamic(() => import("@/components/how-we-work"));
const WhyDrCode = dynamic(() => import("@/components/why-drcode"));
const VisionMissionValues = dynamic(
  () => import("@/components/vision-mission-values"),
);
const TestimonialShowcase = dynamic(() =>
  import("@/components/ui/testimonial").then((mod) => ({
    default: mod.Component,
  })),
);
const FAQ = dynamic(() => import("@/components/faq"));
const CTA = dynamic(() => import("@/components/cta"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <HowWeWork />
      <WhyDrCode />
      <TechExpertise />
      <WhatWeDo />
      <TestimonialShowcase />
      <FAQ />
      <VisionMissionValues />
      <CTA />
      <Footer />
    </main>
  );
}
