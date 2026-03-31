
export default function WhyDrCode() {
  const reasons = [
    {
      title: "Build real-world systems",
      description:
        "We focus on shipping products that solve real problems, not just demos or prototypes.",
    },
    {
      title: "Work directly with founders",
      description:
        "Close collaboration with your team. Fast decisions, clear communication, zero bureaucracy.",
    },
    {
      title: "End-to-end ownership",
      description:
        "From initial concept to production deployment, we own the entire journey with you.",
    },
    {
      title: "Fast iteration",
      description:
        "Move quickly, test ideas, and learn from real user feedback. Build, measure, improve.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
            Why work
            <br />
            with us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index}>
              <h3 className="text-3xl font-semibold text-black mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
