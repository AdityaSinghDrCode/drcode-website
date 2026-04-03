import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities. Call +91 99994 10384 or email hello@drcode.ai",
  keywords: [
    "contact DrCode",
    "AI consulting contact",
    "venture studio contact",
    "AI development inquiry",
    "partnership opportunities",
    "DrCode team contact",
  ],
  openGraph: {
    title: "Contact Us | DrCode — AI Venture Studio",
    description:
      "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities.",
    url: "https://drcode.ai/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Us | DrCode — AI Venture Studio",
    description:
      "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#875BF8] text-center mb-4">
            Get in touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 leading-relaxed">
            Let's discuss how we can help you build something great
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a
              href="tel:+919999410384"
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-[#875BF8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#875BF8]/10 group-hover:bg-[#875BF8]/20 transition-colors duration-300 mb-6">
                <Phone className="w-8 h-8 text-[#875BF8]" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#875BF8] transition-colors duration-300">
                Phone
              </h2>
              <span className="text-lg text-gray-600 font-medium">+91 99994 10384</span>
            </a>

            <a
              href="mailto:hello@drcode.ai"
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-[#875BF8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#875BF8]/10 group-hover:bg-[#875BF8]/20 transition-colors duration-300 mb-6">
                <Mail className="w-8 h-8 text-[#875BF8]" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#875BF8] transition-colors duration-300">
                Email
              </h2>
              <span className="text-lg text-gray-600 font-medium">hello@drcode.ai</span>
            </a>
          </div>

          <ContactForm />

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-[#875BF8] hover:text-[#6d4ac6] font-semibold inline-flex items-center gap-2 transition-colors duration-200"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
