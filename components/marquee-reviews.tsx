"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

/** Avatar art from `public/illustration/*-avatar.svg` */
const AVATARS = {
  womanLong: "/illustration/woman-with-long-hair-avatar.svg",
  womanCurly: "/illustration/woman-with-curly-hair-avatar.svg",
  manShort: "/illustration/man-with-short-hair-avatar.svg",
  manLong: "/illustration/man-with-long-hair-avatar.svg",
} as const;

const reviews = [
  {
    name: "Nithyakala",
    body: "Clear scope, fast iterations, and engineers who actually own the outcome. Exactly what we needed while we were still finding product-market fit.",
    img: AVATARS.womanLong,
  },
  {
    name: "Aditya Ji",
    body: "They turned a fuzzy idea into something we could put in front of real users in weeks. No endless planning, just steady, visible progress.",
    img: AVATARS.manShort,
  },
  {
    name: "Yourmitra",
    body: "Communication stayed direct and the work felt production-ready from the first milestone. We could trust what shipped.",
    img: AVATARS.manLong,
  },
  {
    name: "Kavitha",
    body: "We stopped circling the same roadmap conversations and started shipping. The momentum carried straight through to launch.",
    img: AVATARS.womanCurly,
  },
  {
    name: "Rohan Mehta",
    body: "They pushed back when it mattered and aligned when it helped. It felt like an embedded team, not a black box handing off builds.",
    img: AVATARS.manShort,
  },
  {
    name: "Priya Sharma",
    body: "From early architecture to go-live, decisions were tied to what would work for real customers, not what looked good on paper.",
    img: AVATARS.womanLong,
  },
  {
    name: "Arjun Varma",
    body: "Solid architecture, pragmatic trade-offs, and no hand-waving. We shipped to production with confidence instead of crossing our fingers.",
    img: AVATARS.manLong,
  },
  {
    name: "Vikram Singh",
    body: "Direct communication and zero fluff. We scaled scope when it made sense and cut when it did not, exactly how I want to work.",
    img: AVATARS.manShort,
  },
];

function ReviewCard({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="h-9 w-9 shrink-0 rounded-full bg-muted object-contain p-0.5"
          width={36}
          height={36}
          alt={name}
          src={img}
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-snug text-gray-900">
            {name}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-800">{body}</blockquote>
    </figure>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* Wide, multi-stop fades so cards dissolve gradually (not a hard vertical edge) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[min(40vw,15rem)] md:w-[min(20vw,12rem)] md:backdrop-blur-[1px]"
        style={{
          background:
            "linear-gradient(90deg, rgb(255 255 255) 0%, rgba(255,255,255,0.96) 10%, rgba(255,255,255,0.78) 32%, rgba(255,255,255,0.38) 62%, rgba(255,255,255,0.08) 88%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[min(40vw,15rem)] md:w-[min(20vw,12rem)] md:backdrop-blur-[1px]"
        style={{
          background:
            "linear-gradient(270deg, rgb(255 255 255) 0%, rgba(255,255,255,0.96) 10%, rgba(255,255,255,0.78) 32%, rgba(255,255,255,0.38) 62%, rgba(255,255,255,0.08) 88%, transparent 100%)",
        }}
      />
    </div>
  );
}

export const MarqueeReviews = MarqueeDemo;
