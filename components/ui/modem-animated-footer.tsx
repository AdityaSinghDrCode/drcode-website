"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-background mt-20 relative">
        <div className="max-w-7xl mx-auto min-h-[18rem] sm:min-h-[24rem] md:min-h-[26rem] relative px-6 py-10 sm:py-12">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
            {/* Brand section - left side */}
            <div className="flex flex-col gap-3 md:max-w-md">
              <div className="flex items-center gap-2">
                {brandIcon && (
                  <div className="w-8 h-8 flex items-center justify-center">
                    {brandIcon}
                  </div>
                )}
                <span className="text-foreground text-2xl font-bold">
                  {brandName}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {brandDescription}
              </p>
              {socialLinks.length > 0 && (
                <div className="flex gap-4 mt-2">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-5 h-5 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation links - right side */}
            {navLinks.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="text-foreground font-semibold text-sm">
                  Links
                </span>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="inline-flex min-h-11 items-center text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 py-1 -my-1"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Copyright section */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-muted-foreground">
              <p>
                ©{new Date().getFullYear()} {brandName}. All rights reserved.
              </p>
              {creatorName && creatorUrl && (
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  Crafted by {creatorName}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Large background text - DrCode fade effect */}
        <div
          className="hidden md:block bg-gradient-to-b from-foreground/35 via-foreground/18 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-12 md:bottom-10 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4 z-0"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            maxWidth: "95vw",
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-10 sm:bottom-14 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/70 blur-[1em] to-background/30 absolute bottom-6 sm:bottom-8 w-full h-10 sm:h-12"></div>
      </footer>
    </section>
  );
};
