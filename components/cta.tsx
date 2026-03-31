import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-12 leading-tight">
          Ready to build
          <br />
          something great?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-medium"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-medium"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
