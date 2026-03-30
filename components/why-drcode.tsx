import { Check } from "lucide-react";

export default function WhyDrCode() {
  const reasons = [
    {
      title: "Build real-world systems",
      description:
        "We focus on shipping products that solve real problems, not just demos.",
    },
    {
      title: "Work directly with founders",
      description:
        "Close collaboration with your team to ensure alignment and speed.",
    },
    {
      title: "End-to-end ownership",
      description:
        "From initial concept to production deployment, we own the entire journey.",
    },
    {
      title: "Fast iteration and experimentation",
      description:
        "Move quickly, test ideas, and learn from real user feedback.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          Why DrCode
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#875BF8]/10 flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-[#875BF8]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
