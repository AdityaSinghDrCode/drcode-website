import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] mb-4">
          Ready to Start?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Build real products. Ship fast. Scale with AI.
        </h2>
        <Button
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
