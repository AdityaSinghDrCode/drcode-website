"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mb-8">
          <span className="text-[180px] md:text-[240px] font-bold text-gray-100 leading-none select-none">
            404
          </span>
          <div className="relative -mt-24 md:-mt-32">
            <p className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8] mb-4">
              Page Not Found
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! You&apos;re lost in space
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved to
              another dimension.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-[#875BF8] hover:bg-[#7347e0] text-white px-8 py-6 text-base gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base gap-2"
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
              className="w-2 h-2 rounded-full bg-[#875BF8] animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
