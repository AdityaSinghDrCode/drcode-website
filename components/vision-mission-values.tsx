"use client";

import Image from "next/image";

export default function VisionMissionValues() {
  const items = [
    {
      title: "Vision",
      tagline: "Tech for everyone",
      image: "/illustration/surreal-flying-bulbs.svg",
      sticker: "/illustration/question-mark.svg",
      color: "from-purple-500/10 to-purple-600/10",
    },
    {
      title: "Mission",
      tagline: "Build, grow, scale",
      image: "/illustration/product-launch.svg",
      sticker: "/illustration/microphone.svg",
      color: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Values",
      tagline: "Own it, build it right",
      image: "/illustration/shaking-hands.svg",
      sticker: "/illustration/happy-man-waving.svg",
      color: "from-indigo-500/10 to-indigo-600/10",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            Who we are
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[58ch] mx-auto leading-8">
            Our vision, mission, and values drive everything we build
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-10 h-full hover:border-[#875BF8] transition-all duration-300 hover:shadow-2xl">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Illustration */}
                <div className="relative mb-8 h-56 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={220}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <Image
                    src={item.sticker}
                    alt="Decorative sticker"
                    width={76}
                    height={76}
                    className="pointer-events-none absolute right-1 top-1 h-12 w-12 object-contain opacity-65 animate-float-soft"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-8">
                    {item.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
