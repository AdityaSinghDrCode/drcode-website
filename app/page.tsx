import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";
import HowWeWork from "@/components/how-we-work";
import WhyDrCode from "@/components/why-drcode";
import VisionMissionValues from "@/components/vision-mission-values";
import FAQ from "@/components/faq";
import About from "@/components/about";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <WhyDrCode />
      <VisionMissionValues />
      <FAQ />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
