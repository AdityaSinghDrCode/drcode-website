"use client";

import { cn } from "@/lib/utils";

export default function VisionMissionValues() {
  const items = [
    {
      number: "01",
      title: "Vision",
      description:
        "To simplify technology and make it usable and accessible to everyone in the world.",
    },
    {
      number: "02",
      title: "Mission",
      description:
        "To help users build, grow, and scale by adapting to scalable and affordable technology.",
    },
    {
      number: "03",
      title: "Values",
      description:
        "We're obsessed with ownership, integrity, and agility. Everything we build reflects these principles.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Who we are
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our purpose, direction, and principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 h-full",
                  "transition-all duration-500 hover:border-[#875BF8]/30"
                )}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Large number background */}
                <div className="absolute -top-4 -right-4 text-[120px] font-bold text-gray-100 select-none leading-none group-hover:text-[#875BF8]/10 transition-colors duration-500">
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Small number tag */}
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-gray-500 bg-gray-100 rounded-full mb-6 group-hover:bg-[#875BF8]/10 group-hover:text-[#875BF8] transition-colors duration-300">
                    {item.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-[#875BF8] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#875BF8] to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
