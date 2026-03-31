
export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-12">
          About DrCode
        </h2>
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-black leading-relaxed font-medium">
            DrCode is an AI venture studio that builds products from idea to production.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            We work with startups and companies to turn concepts into scalable AI systems. No consultants. No contractors. Just experienced builders who ship real products.
          </p>
        </div>
      </div>
    </section>
  );
}
