import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities. Call +91 99994 10384 or email hello@drcode.ai",
  keywords: [
    "contact DrCode",
    "AI consulting contact",
    "venture studio contact",
    "AI development inquiry",
    "partnership opportunities",
    "DrCode team contact"
  ],
  openGraph: {
    title: "Contact Us | DrCode — AI Venture Studio",
    description: "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities.",
    url: "https://drcode.ai/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Us | DrCode — AI Venture Studio",
    description: "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center mb-16">
            Get in touch with us easily!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="tel:+919999410384"
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-colors cursor-pointer block"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#875BF8]/10 mb-6">
                <Phone className="w-8 h-8 text-[#875BF8]" />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Phone</h2>
              <span className="text-lg text-gray-600">
                +91 99994 10384
              </span>
            </a>

            <a
              href="mailto:hello@drcode.ai"
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-colors cursor-pointer block"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#875BF8]/10 mb-6">
                <Mail className="w-8 h-8 text-[#875BF8]" />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Email</h2>
              <span className="text-lg text-gray-600">
                hello@drcode.ai
              </span>
            </a>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-[#875BF8] hover:underline font-medium"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
