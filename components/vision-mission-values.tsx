import { Eye, Target, Heart } from "lucide-react";

export default function VisionMissionValues() {
  const items = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To simplify technology and make it usable and accessible to everyone in the world.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To help users build, grow, and scale by adapting to scalable and affordable technology.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We're obsessed with ownership, integrity, and agility.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
          Join us on a journey of
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          Innovation
        </h2>
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#875BF8]/10 mb-6">
                <item.icon className="w-7 h-7 text-[#875BF8]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
