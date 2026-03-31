"use client";

import { BorderBeam } from "./ui/border-beam";
import { cn } from "@/lib/utils";
import { Lightbulb, Zap, Code2, Rocket } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      description:
        "We start by understanding your vision and identifying the core problem to solve. No fluff, just clarity.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description:
        "Quick iterations to validate concepts. We test assumptions early and often to find what actually works.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Build & Scale",
      description:
        "Engineering production-ready systems. We focus on reliability, performance, and code that lasts.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Production Deployment",
      description:
        "Launch and monitor real-world usage. Continuous improvements based on actual data, not guesses.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-we-work" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            How we work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four steps from idea to production. Simple, fast, effective.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 h-full",
                      "transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                    )}
                  >
                    {/* Border beam on hover */}
                    <BorderBeam
                      size={150}
                      duration={12}
                      delay={index * 2}
                      colorFrom="#875BF8"
                      colorTo="#6366f1"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Step number badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-400 tracking-wider">
                        STEP {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-[#875BF8]/10 transition-colors">
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#875BF8] transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#875BF8] to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
