
export default function VisionMissionValues() {
  const items = [
    {
      title: "Vision",
      description:
        "To simplify technology and make it usable and accessible to everyone in the world.",
    },
    {
      title: "Mission",
      description:
        "To help users build, grow, and scale by adapting to scalable and affordable technology.",
    },
    {
      title: "Values",
      description:
        "We're obsessed with ownership, integrity, and agility. Everything we build reflects these principles.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          {items.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
