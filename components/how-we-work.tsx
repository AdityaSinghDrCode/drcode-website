
export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      description:
        "We start by understanding your vision and identifying the core problem to solve. No fluff, just clarity.",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description:
        "Quick iterations to validate concepts. We test assumptions early and often to find what actually works.",
    },
    {
      number: "03",
      title: "Build & Scale",
      description:
        "Engineering production-ready systems. We focus on reliability, performance, and code that lasts.",
    },
    {
      number: "04",
      title: "Production Deployment",
      description:
        "Launch and monitor real-world usage. Continuous improvements based on actual data, not guesses.",
    },
  ];

  return (
    <section id="how-we-work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            How we work
          </h2>
          <p className="text-xl text-gray-700">
            Four steps from idea to production. Simple, fast, effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="text-5xl font-bold text-black">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
