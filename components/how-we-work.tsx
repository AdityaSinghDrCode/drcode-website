"use client";

import Image from "next/image";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      image: "/illustration/idea-launch.svg",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      image: "/illustration/working-vacation.svg",
    },
    {
      number: "03",
      title: "Build & Scale",
      image: "/illustration/product-launch.svg",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      image: "/illustration/remote-work.svg",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            How we work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[44ch] mx-auto leading-8">
            Four steps from idea to production
          </p>
        </div>

        <div className="pointer-events-none relative mb-10 hidden md:block">
          <Image
            src="/illustration/surreal-flying-bulbs.svg"
            alt="Decorative bulbs"
            width={120}
            height={120}
            className="absolute -left-2 -top-8 h-20 w-20 object-contain opacity-70 animate-float-soft"
          />
          <Image
            src="/illustration/graphic-design.svg"
            alt="Decorative design"
            width={120}
            height={120}
            className="absolute right-0 -top-12 h-20 w-20 object-contain opacity-70 animate-drift-soft"
          />
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[140px] left-0 right-0 h-1 bg-gradient-to-r from-[#875BF8]/20 via-[#875BF8]/40 to-[#875BF8]/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#875BF8] transition-all duration-300 hover:shadow-2xl hover:-translate-y-3">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#875BF8] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Illustration */}
                  <div className="mb-6 h-40 flex items-center justify-center">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={160}
                      height={160}
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <Image
                    src="/illustration/abstract-art-6.svg"
                    alt="Decorative abstract"
                    width={84}
                    height={84}
                    className="pointer-events-none absolute right-2 top-2 h-12 w-12 object-contain opacity-25"
                  />

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug tracking-tight mb-1 group-hover:text-[#875BF8] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-[#875BF8]/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
