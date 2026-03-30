import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build an AI product?",
      answer:
        "The timeline varies based on complexity, but most projects range from 4-12 weeks. We start with a discovery phase to understand your needs, then move into rapid prototyping and iterative development. Our goal is to get you to production as quickly as possible while maintaining quality.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across various industries including healthcare, fintech, e-commerce, education, and enterprise SaaS. Our team has experience building AI solutions for startups and Fortune 500 companies alike. If you have a problem that AI can solve, we can help.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we provide comprehensive post-launch support including monitoring, maintenance, and continuous improvement. We can also help you scale your AI infrastructure as your user base grows and provide training for your internal team to manage the product.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] text-center mb-4">
          Got Questions?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
