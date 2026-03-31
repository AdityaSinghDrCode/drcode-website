import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-12 leading-tight">
          Ready to build something great?
        </h2>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-medium"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
