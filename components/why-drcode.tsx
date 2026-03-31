"use client";

import { BorderBeam } from "./ui/border-beam";
import { Marquee } from "./ui/marquee";
import { cn } from "@/lib/utils";
import { Target, Users, Layers, Zap, ArrowRight } from "lucide-react";

const highlights = [
  "Ship Fast",
  "Build Real Products",
  "Zero Bureaucracy",
  "Founder-Led",
  "Production Ready",
  "AI Native",
  "End-to-End",
  "Results Driven",
];

export default function WhyDrCode() {
  const reasons = [
    {
      title: "Build real-world systems",
      description:
        "We focus on shipping products that solve real problems, not just demos or prototypes.",
      icon: Target,
    },
    {
      title: "Work directly with founders",
      description:
        "Close collaboration with your team. Fast decisions, clear communication, zero bureaucracy.",
      icon: Users,
    },
    {
      title: "End-to-end ownership",
      description:
        "From initial concept to production deployment, we own the entire journey with you.",
      icon: Layers,
    },
    {
      title: "Fast iteration",
      description:
        "Move quickly, test ideas, and learn from real user feedback. Build, measure, improve.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Why work with us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not consultants. We're builders who ship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 h-full",
                    "transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                  )}
                >
                  {/* Border beam on hover */}
                  <BorderBeam
                    size={180}
                    duration={10}
                    delay={index * 1.5}
                    colorFrom="#875BF8"
                    colorTo="#6366f1"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#875BF8]/10 transition-colors">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#875BF8] transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-black mb-3 flex items-center gap-2">
                    {reason.title}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#875BF8]" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <Marquee pauseOnHover className="[--duration:30s]">
            {highlights.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-3 rounded-full border border-gray-200 bg-gray-50 hover:border-[#875BF8]/50 hover:bg-[#875BF8]/5 transition-colors cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#875BF8]" />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
