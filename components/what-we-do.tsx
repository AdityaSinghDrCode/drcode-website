import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { DotPattern } from "@/components/ui/dot-pattern"
import { GridPattern } from "@/components/ui/grid-pattern"
import { Building2, Smartphone, Rocket, Mic2, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WhatWeDo() {
  const services = [
    {
      Icon: Building2,
      name: "AI Systems for Industrial Intelligence",
      description:
        "We are working with a well-funded US-based AI company founded by a serial entrepreneur, building AI products for the Engineering, Procurement, and Construction (EPC) industry. Our team contributes across the entire lifecycle  from product discovery and experimentation to building production-grade AI systems.",
      href: "/contact",
      cta: "Contact us",
      background: (
        <DotPattern
          className={cn(
            "absolute inset-0 h-full w-full fill-gray-400/50",
            "[mask-image:radial-gradient(500px_circle_at_top_right,white,transparent)]"
          )}
        />
      ),
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      Icon: Smartphone,
      name: "Product Infrastructure for Consumer Platforms",
      description:
        "We are building an internal product for a publicly listed Indian startup that helps their teams test new wall visualization systems faster and more efficiently.",
      href: "/contact",
      cta: "Contact us",
      background: (
        <GridPattern
          width={20}
          height={20}
          className={cn(
            "absolute inset-0 h-full w-full stroke-gray-400/50",
            "[mask-image:radial-gradient(400px_circle_at_bottom_left,white,transparent)]"
          )}
        />
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: MessageSquare,
      name: "DrCode Interview",
      description:
        "An AI-powered platform for conducting technical interviews. Streamlines the hiring process with intelligent assessment, real-time code evaluation, and comprehensive candidate insights.",
      href: "https://interviewbot.drcode.ai/",
      cta: "Try it",
      background: (
        <GridPattern
          width={18}
          height={18}
          className={cn(
            "absolute inset-0 h-full w-full stroke-gray-400/50",
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
          )}
        />
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: Rocket,
      name: "AI Platforms for Startups",
      description:
        "We are co-creating platforms with startups in logistics and consumer services, helping take products from idea to launch.",
      href: "/contact",
      cta: "Contact us",
      background: (
        <DotPattern
          className={cn(
            "absolute inset-0 h-full w-full fill-gray-400/50",
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,transparent)]"
          )}
        />
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: Mic2,
      name: "AI Voice Systems",
      description:
        "With Mindler, we are building AI-powered voice counselors and automation tools that help scale student counseling and guidance. This includes designing intelligent conversational interfaces and building scalable voice infrastructure.",
      href: "/contact",
      cta: "Contact us",
      background: (
        <GridPattern
          width={25}
          height={25}
          className={cn(
            "absolute inset-0 h-full w-full stroke-gray-400/50",
            "[mask-image:radial-gradient(600px_circle_at_bottom_right,white,transparent)]"
          )}
        />
      ),
      className: "lg:col-span-1 lg:row-span-2",
    },
  ];

  return (
    <section id="what-we-do" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            What we build
          </h2>
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
