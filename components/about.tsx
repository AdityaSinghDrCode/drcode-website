"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  RocketIcon,
  ComponentInstanceIcon,
  LightningBoltIcon,
  CodeIcon,
  CheckCircledIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

const trustMarkers = [
  { label: "AI-Native", icon: "🤖" },
  { label: "Production-Ready", icon: "⚡" },
  { label: "Scalable Systems", icon: "📈" },
  { label: "Real Products", icon: "🚀" },
  { label: "No Consultants", icon: "✨" },
  { label: "Builder First", icon: "🛠️" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <DotPattern className="opacity-30" width={32} height={32} cr={1.5} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Who We Are
          </h2>
          <p className="text-2xl md:text-3xl text-black leading-relaxed font-medium mb-4">
            DrCode is an AI venture studio that builds products from idea to
            production.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We work with startups and large enterprises to turn concepts into
            scalable AI systems. No consultants. No contractors. Just
            experienced builders who ship real products.
          </p>
        </div>

        {/* Trust Marquee */}
        <div className="mb-12 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] py-4">
            {trustMarkers.map((marker, idx) => (
              <div
                key={idx}
                className="mx-4 flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm"
              >
                <span className="text-2xl">{marker.icon}</span>
                <span className="font-semibold text-gray-800 whitespace-nowrap">
                  {marker.label}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bento Grid Showcase */}
        <BentoGrid className="max-w-6xl mx-auto">
          {/* Large Feature Card */}
          <BentoCard
            name="Idea to Production"
            className="md:col-span-2 md:row-span-2 min-h-[300px] relative"
            background={
              <>
                <DotPattern
                  className="opacity-20 text-blue-500"
                  width={20}
                  height={20}
                  cr={1}
                  glow={true}
                />
                <BorderBeam
                  size={250}
                  duration={12}
                  delay={0}
                  colorFrom="#3b82f6"
                  colorTo="#8b5cf6"
                />
              </>
            }
            Icon={RocketIcon}
            description="We don't just consult—we build. From initial concept to scalable production systems, we're with you every step. Our team of experienced engineers ship real products, not presentations."
          />

          {/* Smaller Cards */}
          <BentoCard
            name="AI-Native Building"
            className="md:row-span-1 min-h-[180px]"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50" />
            }
            Icon={ComponentInstanceIcon}
            description="Built with cutting-edge AI frameworks and practices from day one."
          />

          <BentoCard
            name="Lightning Fast"
            className="md:row-span-1 min-h-[180px]"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50" />
            }
            Icon={LightningBoltIcon}
            description="Ship MVPs in weeks, not months. Rapid iteration without sacrificing quality."
          />

          <BentoCard
            name="Clean Code"
            className="md:row-span-1 min-h-[180px]"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50" />
            }
            Icon={CodeIcon}
            description="Production-grade code from the start. Maintainable, scalable, and documented."
          />

          <BentoCard
            name="Proven Track Record"
            className="md:row-span-1 min-h-[180px]"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50" />
            }
            Icon={CheckCircledIcon}
            description="Real products in production serving real users. No theory, just results."
          />
        </BentoGrid>

        {/* Bottom Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-lg">
            <TimerIcon className="w-5 h-5" />
            <p className="font-semibold text-lg">
              From zero to deployed in record time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
