
export default function WhatWeDo() {
  const services = [
    {
      title: "AI Systems for Industrial Intelligence",
      description:
        "Enterprise-grade AI systems that transform industrial operations",
    },
    {
      title: "AI Platforms for Startups",
      description: "Build and scale AI products from zero to production",
    },
    {
      title: "AI Voice Systems",
      description: "Intelligent voice interfaces for real-world applications",
    },
    {
      title: "Internal AI Products",
      description: "Custom AI tools that accelerate your team's workflow",
    },
  ];

  return (
    <section id="what-we-do" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
