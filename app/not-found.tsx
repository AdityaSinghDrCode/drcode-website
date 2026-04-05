"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="mb-8">
          <span className="select-none text-[180px] font-bold leading-none text-muted-foreground/15 md:text-[240px]">
            404
          </span>
          <div className="relative -mt-24 md:-mt-32">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand md:text-base">
              Page Not Found
            </p>
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              We couldn&apos;t find that page
            </h1>
            <p className="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
              The link may be wrong, or the page may have moved. Check the URL or
              return to the homepage.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base hover:bg-primary/90"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-border px-8 py-6 text-base text-foreground hover:bg-muted"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        <div className="mt-16 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 animate-pulse rounded-full bg-brand"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
