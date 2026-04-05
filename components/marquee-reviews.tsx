"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Alex",
    username: "@alexbuilds",
    body: "Clear scope, fast iterations, and engineers who actually own the outcome. Exactly what we needed while we were still finding product-market fit.",
    img: "/avatar/1.jpg",
  },
  {
    name: "Priya",
    username: "@priya_codes",
    body: "They turned a fuzzy idea into something we could put in front of real users in weeks. No endless planning—just steady, visible progress.",
    img: "/avatar/2.jpg",
  },
  {
    name: "Jordan",
    username: "@jordanmakes",
    body: "Communication stayed direct and the work felt production-ready from the first milestone. We could trust what shipped.",
    img: "/avatar/3.jpg",
  },
  {
    name: "Sam",
    username: "@samlabs_io",
    body: "We stopped circling the same roadmap conversations and started shipping. The momentum carried straight through to launch.",
    img: "/avatar/4.jpg",
  },
  {
    name: "Rina",
    username: "@rina_dev",
    body: "They pushed back when it mattered and aligned when it helped. It felt like an embedded team, not a black box handing off builds.",
    img: "/avatar/5.jpg",
  },
  {
    name: "Marcus",
    username: "@marcus_pm",
    body: "From early architecture to go-live, decisions were tied to what would work for real customers—not what looked good on paper.",
    img: "/avatar/6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
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
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full object-cover"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Wide, multi-stop fades so cards dissolve gradually (not a hard vertical edge) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[min(40vw,15rem)] backdrop-blur-[1px] md:w-[min(32vw,22rem)]"
        style={{
          background:
            "linear-gradient(90deg, rgb(255 255 255) 0%, rgba(255,255,255,0.92) 8%, rgba(255,255,255,0.65) 28%, rgba(255,255,255,0.28) 58%, rgba(255,255,255,0.06) 82%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[min(40vw,15rem)] backdrop-blur-[1px] md:w-[min(32vw,22rem)]"
        style={{
          background:
            "linear-gradient(270deg, rgb(255 255 255) 0%, rgba(255,255,255,0.92) 8%, rgba(255,255,255,0.65) 28%, rgba(255,255,255,0.28) 58%, rgba(255,255,255,0.06) 82%, transparent 100%)",
        }}
      />
    </div>
  );
}

export const MarqueeReviews = MarqueeDemo;
