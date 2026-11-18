import Link from "next/link";

import { cn } from "@/lib/utils";

/** Antelspark wordmark with its angled double-stroke mark. */
export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  /** "dark" renders a white wordmark for use on dark surfaces. */
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label="Antelspark — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg
        viewBox="0 0 26 22"
        aria-hidden
        className="h-[1.15rem] w-auto shrink-0"
      >
        <path d="M4 22 12.5 0h5.4L9.4 22Z" fill="var(--color-cobalt)" />
        <path d="M13.5 22 22 0h4l-8.5 22Z" fill="var(--color-terracotta)" />
      </svg>
      <span
        className={cn(
          "font-display text-[1.3rem] leading-none font-semibold tracking-tight",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        Antel
        <span className={tone === "dark" ? "text-[#8fa8f7]" : "text-cobalt"}>
          spark
        </span>
      </span>
    </Link>
  );
}
