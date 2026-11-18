import {
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  Boxes,
  CircleCheck,
  Landmark,
  MessageSquare,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Decorative business-interface mockups. Skeleton bars everywhere    */
/*  real data would be — no fabricated figures.                        */
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

/** ERP-style operations dashboard for the Enterprise hero laptop. */
export function OpsScreen() {
  const modules = [
    { icon: Boxes, label: "Inventory" },
    { icon: Users, label: "People" },
    { icon: Landmark, label: "Finance" },
    { icon: BarChart3, label: "Reports" },
  ];
  return (
    <div className="grid grid-cols-[64px_1fr] bg-white">
      {/* Module rail */}
      <div className="space-y-3 border-r border-line p-2.5">
        <div className="mx-auto grid size-8 place-items-center rounded-lg bg-cobalt">
          <span className="font-display text-[0.6rem] font-bold text-white">ERP</span>
        </div>
        {modules.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`mx-auto grid size-8 place-items-center rounded-lg ${
              i === 0 ? "bg-cobalt-wash text-cobalt" : "text-ink-faint"
            }`}
          >
            <Icon className="size-4" strokeWidth={1.8} />
          </div>
        ))}
      </div>
      {/* Panel */}
      <div className="space-y-3 p-3.5">
        <div className="flex items-center justify-between">
          <Bar w="90px" className="bg-ink/30" />
          <div className="h-5 w-16 rounded-full bg-cobalt/85" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {["Orders", "Stock", "Cashflow"].map((kpi, i) => (
            <div key={kpi} className="rounded-lg border border-line p-2.5">
              <p className="text-[0.58rem] font-semibold text-ink-soft">{kpi}</p>
              <div className="mt-1.5 h-2.5 w-12 rounded bg-ink/30" />
              <div className="mt-2 flex h-5 items-end gap-0.5">
                {[5, 8, 6, 10, 7, 11].map((h, j) => (
                  <div
                    key={j}
                    style={{ height: `${h + i}px` }}
                    className={`w-1 rounded-t-[1px] ${i === 2 ? "bg-terracotta/70" : "bg-cobalt/70"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-line p-2.5">
          <div className="flex items-center justify-between">
            <Bar w="70px" />
            <Bar w="40px" className="bg-cobalt/40" />
          </div>
          <div className="mt-2 space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-cream" />
                <Bar w={`${60 - i * 12}%`} />
                <span className="ml-auto h-3.5 w-10 rounded-full bg-cobalt-wash" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** System-health status board for the Maintenance hero. */
export function StatusBoard() {
  const services = [
    { name: "Storefront", ok: true },
    { name: "API gateway", ok: true },
    { name: "Database cluster", ok: true },
    { name: "Background jobs", ok: false },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_28px_56px_-28px_rgb(32_36_44_/_0.4)]">
      <div className="flex items-center justify-between border-b border-line bg-ivory px-4 py-2.5">
        <p className="text-[0.72rem] font-semibold text-ink">System health</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#e5f3e9] px-2 py-0.5">
          <span className="size-1.5 rounded-full bg-[#3d9960]" />
          <span className="font-mono text-[0.55rem] text-[#2e7549]">operational</span>
        </span>
      </div>
      <div className="divide-y divide-line">
        {services.map(({ name, ok }) => (
          <div key={name} className="flex items-center gap-3 px-4 py-2.5">
            {ok ? (
              <CircleCheck className="size-4 shrink-0 text-[#3d9960]" strokeWidth={2} />
            ) : (
              <AlertTriangle className="size-4 shrink-0 text-terracotta" strokeWidth={2} />
            )}
            <span className="text-[0.72rem] font-medium text-ink">{name}</span>
            <div className="ml-auto flex h-3 items-end gap-px">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-sm ${
                    !ok && i === 12 ? "h-3 bg-terracotta/80" : "h-2 bg-[#3d9960]/50"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[0.55rem] text-ink-faint">
              {ok ? "healthy" : "patching"}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-line bg-ivory px-4 py-2.5">
        <div className="flex items-center gap-2">
          <BadgeCheck className="size-3.5 text-cobalt" strokeWidth={2} />
          <span className="font-mono text-[0.58rem] text-ink-soft">
            security updates — applied on schedule
          </span>
        </div>
      </div>
    </div>
  );
}

/** Floating ticket card for the Support hero. */
export function TicketCard() {
  return (
    <div className="w-60 rounded-2xl border border-line bg-white p-4 shadow-[0_24px_48px_-20px_rgb(32_36_44_/_0.4)]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-terracotta px-2 py-0.5 font-mono text-[0.55rem] font-semibold text-white">
          S2 · high
        </span>
        <span className="font-mono text-[0.58rem] text-ink-faint">#4213</span>
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-2 w-5/6 rounded-full bg-ink/60" />
        <Bar w="60%" />
      </div>
      <div className="mt-3.5 flex items-center justify-between border-t border-line pt-3">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-cobalt text-[0.55rem] font-bold text-white">
            A
          </span>
          <span className="text-[0.62rem] text-ink-soft">assigned · in progress</span>
        </div>
        <MessageSquare className="size-3.5 text-cobalt" strokeWidth={2} />
      </div>
    </div>
  );
}
