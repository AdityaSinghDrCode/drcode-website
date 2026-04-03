"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  const featureIllustration = "/illustration/question-mark.svg";

  const faqs = [
    {
      question: "How long does it take?",
      answer: "4-12 weeks from discovery to production. We move fast.",
    },
    {
      question: "What industries?",
      answer: "Healthcare, fintech, e-commerce, education, enterprise SaaS.",
    },
    {
      question: "Support after launch?",
      answer: "Yes. Monitoring, maintenance, scaling, and team training.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration */}
          <div className="flex items-center justify-center lg:order-1">
            <Image
              src={featureIllustration}
              alt="Questions"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right: FAQ */}
          <div className="lg:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-12 leading-[0.95] tracking-[-0.02em]">
              Common questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white px-6 transition-all duration-300 hover:border-[#875BF8] hover:shadow-xl">
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 hover:no-underline py-6 hover:text-[#875BF8] transition-colors duration-300">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base md:text-lg leading-8 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
