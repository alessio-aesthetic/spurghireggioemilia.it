import { Phone } from "lucide-react";

import { site } from "@/lib/site-data";

export function StickyPhone() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-blacklux/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,.12)] backdrop-blur-xl">
      <a
        href={`tel:${site.phoneHref}`}
        className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 bg-gold px-4 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-ink sm:px-5 sm:text-sm sm:tracking-[0.16em]"
      >
        <span className="inline-flex items-center gap-3">
          <Phone className="h-4 w-4" />
          Pronto intervento
        </span>
        <span>{site.phone}</span>
      </a>
    </div>
  );
}
