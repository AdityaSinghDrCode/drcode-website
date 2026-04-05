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
            loading="lazy"
            className="pointer-events-none absolute -right-4 -top-6 md:h-40 md:w-40 h-32 w-32 object-contain opacity-80 transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-90"
          />
          <Image
            src="/illustration/microphone.svg"
            alt=""
            width={96}
            height={96}
            loading="lazy"
            className="pointer-events-none absolute left-3 top-3 md:h-16 md:w-16 h-12 w-12 object-contain opacity-85 animate-float-soft hidden md:block"
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
            loading="lazy"
            className="pointer-events-none absolute right-1 top-2 md:h-28 md:w-28 h-20 w-20 object-contain opacity-85 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-95"
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
            loading="lazy"
            className="pointer-events-none absolute -right-2 top-1 md:h-28 md:w-28 h-20 w-20 object-contain opacity-85 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-95"
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
            loading="lazy"
            className="pointer-events-none absolute right-2 -top-2 md:h-20 md:w-20 h-16 w-16 object-contain opacity-80 transition-all duration-300 ease-out group-hover:rotate-1 group-hover:opacity-90"
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
            loading="lazy"
            className="pointer-events-none absolute -right-3 -top-2 md:h-24 md:w-24 h-16 w-16 object-contain opacity-80 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
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
          <h2 className="type-display mb-6 text-gray-900">
            What we build
          </h2>
          <p className="type-body-lg mx-auto text-gray-600">
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
