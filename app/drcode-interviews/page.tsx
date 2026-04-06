import type { Metadata } from "next";

import { DrcodeInterviewsContent } from "@/components/drcode-interviews-content";

export const metadata: Metadata = {
  title: "DrCode Interview",
  description:
    "Level up your prep with tailored AI interview simulations. Practice with DrCode Interview.",
};

export default function DrcodeInterviewsPage() {
  return <DrcodeInterviewsContent />;
}
