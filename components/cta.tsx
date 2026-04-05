import { Cta4 } from "@/components/ui/cta-4";

const drCodeCtaItems = [
  "End-to-end partner—from product strategy to production launch",
  "AI integrations built for reliability, not just demos",
  "Small senior team with direct communication and fast iteration",
  "Modern engineering practices so your product can scale",
  "Clear process: we ship in milestones you can see and measure",
];

export default function CTA() {
  return (
    <Cta4
      title="Ready to build something great?"
      description="Let's turn your idea into a production-ready AI product. We design, build, and launch AI-native software with startups and teams who want real-world results."
      buttonText="Start a Project"
      href="/contact"
      items={drCodeCtaItems}
    />
  );
}
