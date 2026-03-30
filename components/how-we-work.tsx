
export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      description:
        "We start by understanding your vision and identifying the core problem to solve.",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description:
        "Quick iterations to validate concepts and find the right product-market fit.",
    },
    {
      number: "03",
      title: "Build & Scale",
      description:
        "Engineering production-ready systems with a focus on reliability and performance.",
    },
    {
      number: "04",
      title: "Production Deployment",
      description:
        "Launch and monitor real-world usage with continuous improvements.",
    },
  ];

  return (
    <section id="how-we-work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
          Our Process
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          How We Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-[#875BF8]/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
