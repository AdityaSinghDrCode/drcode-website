import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function CTA() {
  const featureIllustration = "/illustration/celebrating-business-success.svg";

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#875BF8] to-indigo-600 rounded-[40px] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-12 md:p-16 lg:p-20">
            {/* Left: Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.03] tracking-tight">
                Ready to build something great?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-8 max-w-[28ch]">
                Let's turn your idea into reality
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#875BF8] px-10 py-7 text-base md:text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Started →
                </Button>
              </Link>
            </div>

            {/* Right: Illustration */}
            <div className="relative flex items-center justify-center">
              <Image
                src={featureIllustration}
                alt="Get Started"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
