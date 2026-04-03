"use client";

import Image from "next/image";

export default function WhyDrCode() {
  const reasons = [
    {
      title: "Real products, not demos",
      image: "/illustration/man-riding-a-rocket.svg",
      accent: "/illustration/surreal-hourglass.svg",
    },
    {
      title: "Close collaboration",
      image: "/illustration/shaking-hands.svg",
      accent: "/illustration/work-party.svg",
    },
    {
      title: "End-to-end ownership",
      image: "/illustration/engineer.svg",
      accent: "/illustration/office-cubicle.svg",
    },
    {
      title: "Build, measure, improve",
      image: "/illustration/business-success-chart.svg",
      accent: "/illustration/idea-launch.svg",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            Why work with us
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[46ch] mx-auto leading-8">
            We're not consultants. We're builders who ship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#875BF8] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Illustration */}
              <div className="mb-6 relative h-48 flex items-center justify-center">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={180}
                  height={180}
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <Image
                  src={reason.accent}
                  alt="Decorative accent"
                  width={70}
                  height={70}
                  className="pointer-events-none absolute -right-1 top-0 h-12 w-12 object-contain opacity-60 transition-transform duration-500 group-hover:rotate-3"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight text-gray-900 group-hover:text-[#875BF8] transition-colors duration-300">
                  {reason.title}
                </h3>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#875BF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
