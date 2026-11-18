import Image from "next/image";
import { Heart, Search, ShoppingCart } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Decorative device-screen contents (all aria-hidden via frames).    */
/*  Skeleton bars everywhere real data would be — nothing fabricated.  */
/* ------------------------------------------------------------------ */

export function Bar({
  w,
  className = "bg-ink/12",
}: {
  w: string;
  className?: string;
}) {
  return <div className={`h-1.5 rounded-full ${className}`} style={{ width: w }} />;
}

/** ProSmash storefront — B2B sports commerce (genuine project, real name). */
export function ProSmashScreen() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-display text-sm font-semibold text-ink">
          Pro<span className="text-cobalt">Smash</span>
        </span>
        <div className="flex items-center gap-3">
          <Bar w="30px" />
          <Bar w="30px" />
          <Bar w="30px" />
          <ShoppingCart className="size-3.5 text-ink-soft" strokeWidth={2} />
        </div>
      </div>
      <div className="relative h-28 sm:h-36">
        <Image
          src="/images/work/prosmash.jpg"
          alt=""
          fill
          sizes="600px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" />
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <p className="font-display text-base leading-tight font-semibold text-white sm:text-lg">
            Professional
            <br />
            Sports Equipment
          </p>
          <span className="mt-2 inline-block rounded-full bg-terracotta px-2.5 py-0.5 text-[0.6rem] font-medium text-white">
            Shop now
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2.5 p-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex aspect-square items-end justify-end rounded-lg bg-cream p-1.5">
              <Heart className="size-3 text-ink/30" />
            </div>
            <Bar w="80%" />
            <Bar w="45%" className="bg-cobalt/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Kalanestham — art & heritage commerce (genuine project, real name). */
export function KalanesthamScreen() {
  return (
    <div className="bg-[#171310]">
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="font-display text-sm font-semibold text-[#e8ddc8]">
          Kalanestham
        </span>
        <div className="flex items-center gap-3 opacity-60">
          <Bar w="30px" className="bg-[#e8ddc8]/40" />
          <Bar w="30px" className="bg-[#e8ddc8]/40" />
          <Bar w="24px" className="bg-[#e8ddc8]/40" />
        </div>
      </div>
      <div className="relative h-32 sm:h-40">
        <Image
          src="/images/work/kalanestham.jpg"
          alt=""
          fill
          sizes="600px"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171310]/85 via-[#171310]/40 to-transparent" />
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <p className="font-display text-lg leading-tight font-medium text-[#f3ecdd] italic sm:text-xl">
            Timeless
            <br />
            Indian Artistry
          </p>
          <span className="mt-2 inline-block rounded-full border border-[#c9a96a] px-2.5 py-0.5 text-[0.6rem] text-[#c9a96a]">
            Explore collections
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="aspect-[4/3] rounded-md bg-[#2a221b]" />
            <Bar w="70%" className="bg-[#e8ddc8]/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Generic travel-site demo used to show responsive design (not a client). */
export function TravelScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "h-64" : "h-48 sm:h-64"}`}>
      <Image
        src="/images/dev/summit.jpg"
        alt=""
        fill
        sizes="600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/25" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5">
        <Bar w="44px" className="bg-white/70" />
        {!compact && (
          <div className="flex items-center gap-3">
            <Bar w="26px" className="bg-white/50" />
            <Bar w="26px" className="bg-white/50" />
            <span className="rounded-full bg-white/90 px-2 py-0.5 text-[0.55rem] font-medium text-ink">
              Book now
            </span>
          </div>
        )}
      </div>
      <div
        className={`absolute ${compact ? "top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center" : "top-1/2 left-5 -translate-y-1/2"}`}
      >
        <p
          className={`font-display font-medium text-white italic ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}
        >
          Explore
          <br />
          Naturally
        </p>
        <span className="mt-2 inline-block rounded-full bg-white/90 px-3 py-1 text-[0.6rem] font-medium text-ink">
          Plan your trip
        </span>
      </div>
    </div>
  );
}

/** Generic storefront grid — demo catalogue, abstract products. */
export function StoreScreen() {
  const tints = [
    "bg-cobalt-wash",
    "bg-terracotta-wash",
    "bg-cream",
    "bg-cobalt-wash",
    "bg-cream",
    "bg-terracotta-wash",
  ];
  return (
    <div className="bg-white">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <Bar w="40px" className="bg-ink/70" />
        <div className="flex flex-1 items-center gap-2 rounded-full border border-line px-3 py-1.5">
          <Search className="size-3 text-ink-soft" />
          <Bar w="40%" />
        </div>
        <ShoppingCart className="size-3.5 text-ink-soft" strokeWidth={2} />
      </div>
      <div className="flex gap-2 px-4 pt-3">
        {["All", "New", "Sale"].map((chip, i) => (
          <span
            key={chip}
            className={`rounded-full px-2.5 py-0.5 text-[0.6rem] font-medium ${
              i === 0 ? "bg-cobalt text-white" : "border border-line text-ink-soft"
            }`}
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-3 sm:p-4">
        {tints.map((tint, i) => (
          <div key={i} className="space-y-1.5">
            <div className={`relative aspect-square rounded-lg ${tint}`}>
              <div className="absolute inset-x-[28%] top-[20%] bottom-[30%] rounded-md bg-white/60" />
            </div>
            <Bar w="85%" />
            <div className="flex items-center justify-between">
              <Bar w="40%" className="bg-cobalt/40" />
              <span className="rounded-full bg-cobalt px-1.5 py-px text-[0.5rem] font-medium text-white">
                Add
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Phone checkout flow screen. */
export function CheckoutScreen() {
  return (
    <div className="bg-white pt-7">
      <div className="border-b border-line px-4 pb-2">
        <p className="text-[0.7rem] font-semibold text-ink">Checkout</p>
      </div>
      <div className="space-y-3 p-4">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`size-10 rounded-lg ${i === 0 ? "bg-cobalt-wash" : "bg-terracotta-wash"}`} />
            <div className="flex-1 space-y-1.5">
              <Bar w="70%" />
              <Bar w="40%" />
            </div>
            <Bar w="24px" className="bg-ink/30" />
          </div>
        ))}
        <div className="space-y-2 border-t border-line pt-3">
          {[["55%", "18%"], ["40%", "14%"]].map(([l, r], i) => (
            <div key={i} className="flex items-center justify-between">
              <Bar w={l} />
              <Bar w={r} className="bg-ink/25" />
            </div>
          ))}
          <div className="flex items-center justify-between pt-1">
            <Bar w="35%" className="bg-ink/50" />
            <Bar w="22%" className="bg-cobalt/50" />
          </div>
        </div>
        <div className="rounded-full bg-cobalt py-2.5 text-center text-[0.65rem] font-semibold text-white">
          Pay securely
        </div>
        <div className="flex justify-center gap-2 pb-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-5 w-8 rounded border border-line bg-cream" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- Mobile-app journey screens ----------------------------------- */

export function AppHomeScreen() {
  return (
    <div className="bg-ivory pt-8 pb-3">
      <div className="px-4">
        <Bar w="38%" className="bg-ink/30" />
        <p className="mt-1.5 font-display text-sm font-semibold text-ink">
          Good morning
        </p>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5">
          <Search className="size-3 text-ink-soft" />
          <Bar w="50%" />
        </div>
      </div>
      <div className="mt-3 space-y-2 px-4">
        <div className="rounded-xl bg-cobalt p-3">
          <Bar w="45%" className="bg-white/50" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/80" />
          <div className="mt-3 flex justify-between">
            <Bar w="30%" className="bg-white/40" />
            <div className="size-5 rounded-full bg-white/90" />
          </div>
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-2.5">
            <div className={`size-8 rounded-lg ${i === 0 ? "bg-terracotta-wash" : "bg-cobalt-wash"}`} />
            <div className="flex-1 space-y-1">
              <Bar w="65%" />
              <Bar w="40%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppDetailScreen() {
  return (
    <div className="bg-white pb-3">
      <div className="relative h-24">
        <Image src="/images/dev/summit.jpg" alt="" fill sizes="300px" className="object-cover" />
        <div className="absolute right-2 bottom-2 rounded-full bg-white/90 px-2 py-0.5 text-[0.55rem] font-medium text-ink">
          4.9 ★
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="h-2.5 w-3/5 rounded-full bg-ink/70" />
        <Bar w="90%" />
        <Bar w="75%" />
        <div className="flex gap-2 pt-1">
          <span className="rounded-full bg-cobalt-wash px-2 py-0.5 text-[0.55rem] font-medium text-cobalt">
            Popular
          </span>
          <span className="rounded-full border border-line px-2 py-0.5 text-[0.55rem] text-ink-soft">
            Nearby
          </span>
        </div>
        <div className="mt-2 rounded-full bg-cobalt py-2 text-center text-[0.62rem] font-semibold text-white">
          Continue
        </div>
      </div>
    </div>
  );
}

export function AppProgressScreen() {
  return (
    <div className="bg-ivory pt-8 pb-3">
      <div className="px-4">
        <p className="font-display text-sm font-semibold text-ink">This week</p>
      </div>
      <div className="mt-3 flex items-center gap-3 px-4">
        <svg viewBox="0 0 64 64" className="size-16 shrink-0">
          <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-line)" strokeWidth="7" />
          <circle
            cx="32" cy="32" r="26" fill="none"
            stroke="var(--color-cobalt)" strokeWidth="7" strokeLinecap="round"
            strokeDasharray="163" strokeDashoffset="56"
            transform="rotate(-90 32 32)"
          />
          <circle cx="32" cy="32" r="17" fill="none" stroke="var(--color-terracotta)" strokeWidth="5" strokeLinecap="round" strokeDasharray="107" strokeDashoffset="70" transform="rotate(-90 32 32)" />
        </svg>
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-cobalt" />
            <Bar w="56px" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-terracotta" />
            <Bar w="42px" />
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2 px-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-2.5 py-2">
            <div className={`size-4 rounded-md ${i === 0 ? "bg-cobalt" : "border border-line"}`} />
            <Bar w={`${70 - i * 12}%`} />
          </div>
        ))}
      </div>
    </div>
  );
}
