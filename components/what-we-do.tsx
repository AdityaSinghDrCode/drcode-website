import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import Image from "next/image";
import {
  Building2,
  Smartphone,
  Rocket,
  Mic2,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatWeDo() {
  const services = [
    {
      Icon: Mic2,
      name: "AI Voice Systems",
      description:
        "Building AI-powered voice counselors and automation tools that help scale student counseling and guidance. This includes designing intelligent conversational interfaces and building scalable voice infrastructure.",
      background: (
        <>
          <GridPattern
            width={25}
            height={25}
            className={cn(
              "absolute inset-0 h-full w-full stroke-gray-400/50",
              "[mask-image:radial-gradient(600px_circle_at_bottom_right,white,transparent)]",
            )}
          />
          <Image
            src="/illustration/work-from-home.svg"
            alt="AI voice systems"
            width={220}
            height={220}
            className="pointer-events-none absolute -right-4 -top-6 h-40 w-40 object-contain opacity-80 transition-transform duration-500 group-hover:scale-110"
          />
          <Image
            src="/illustration/microphone.svg"
            alt="Microphone"
            width={96}
            height={96}
            className="pointer-events-none absolute left-3 top-3 h-16 w-16 object-contain opacity-85 animate-float-soft"
          />
        </>
      ),
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      Icon: Rocket,
      name: "AI Platforms for Startups",
      description:
        "Co-creating platforms with startups in logistics and consumer services, helping take products from idea to launch.",
      background: (
        <>
          <DotPattern
            className={cn(
              "absolute inset-0 h-full w-full fill-gray-400/50",
              "[mask-image:radial-gradient(400px_circle_at_top_left,white,transparent)]",
            )}
          />
          <Image
            src="/illustration/app-launch (1).svg"
            alt="Startup platform"
            width={160}
            height={160}
            className="pointer-events-none absolute right-1 top-2 h-28 w-28 object-contain opacity-85 transition-transform duration-500 group-hover:-translate-y-1"
          />
        </>
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: MessageSquare,
      name: "DrCode Interview",
      description:
        "An AI-powered platform for conducting technical interviews. Streamlines the hiring process with intelligent assessment, real-time code evaluation, and comprehensive candidate insights.",
      href: "https://interviewbot.drcode.ai/",
      background: (
        <>
          <GridPattern
            width={18}
            height={18}
            className={cn(
              "absolute inset-0 h-full w-full stroke-gray-400/50",
              "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
            )}
          />
          <Image
            src="/illustration/video-call.svg"
            alt="Interview platform"
            width={160}
            height={160}
            className="pointer-events-none absolute -right-2 top-1 h-28 w-28 object-contain opacity-85 transition-transform duration-500 group-hover:scale-105"
          />
        </>
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: Smartphone,
      name: "Product Infrastructure for Consumer Platforms",
      description:
        "Building internal products that help teams test new wall visualization systems faster and more efficiently.",
      background: (
        <>
          <GridPattern
            width={20}
            height={20}
            className={cn(
              "absolute inset-0 h-full w-full stroke-gray-400/50",
              "[mask-image:radial-gradient(400px_circle_at_bottom_left,white,transparent)]",
            )}
          />
          <Image
            src="/illustration/creative-work.svg"
            alt="Product infrastructure"
            width={150}
            height={150}
            className="pointer-events-none absolute right-2 top-3 h-24 w-24 object-contain opacity-80 transition-transform duration-500 group-hover:rotate-2"
          />
        </>
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: Building2,
      name: "AI Systems for Industrial Intelligence",
      description:
        "Building AI products for the Engineering, Procurement, and Construction (EPC) industry. Our team contributes across the entire lifecycle from product discovery and experimentation to building production-grade AI systems.",
      background: (
        <>
          <DotPattern
            className={cn(
              "absolute inset-0 h-full w-full fill-gray-400/50",
              "[mask-image:radial-gradient(500px_circle_at_top_right,white,transparent)]",
            )}
          />
          <Image
            src="/illustration/business-analysis.svg"
            alt="Industrial intelligence"
            width={170}
            height={170}
            className="pointer-events-none absolute -right-3 top-1 h-28 w-28 object-contain opacity-80 transition-transform duration-500 group-hover:scale-105"
          />
        </>
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
  ];

  return (
    <section id="what-we-do" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            What we build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real AI products solving real problems
          </p>
        </div>

        <BentoGrid className="lg:grid-cols-3">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
