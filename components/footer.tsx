"use client";
import { Footer } from "@/components/ui/modem-animated-footer";
import Image from "next/image";

export default function DrCodeFooter() {
  const navLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <Footer
      brandName="DrCode"
      brandDescription="AI Venture Studio building products from idea to production. We turn concepts into scalable AI systems."
      socialLinks={[]}
      navLinks={navLinks}
      brandIcon={
        <Image
          src="/logo.svg"
          alt="DrCode"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      }
    />
  );
}