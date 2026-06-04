import Link from "next/link";

import { cities, services, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blacklux px-6 py-20 lg:px-12">
      <div className="luxury-grid mx-auto max-w-[1800px] gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-display text-4xl">Reggio Spurghi</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink/55">{site.address}</p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Servizi</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-ink/60">
            {services.slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/servizi/${service.slug}`} className="link-underline w-fit">
                {service.menu}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Citta'</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-ink/60">
            {cities.slice(0, 8).map((city) => (
              <Link key={city.slug} href={`/citta/${city.slug}`} className="link-underline w-fit">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-12 border-t border-white/10 pt-8 text-sm text-ink/45">
          © 2026 {site.name}. {site.domain}
        </div>
      </div>
    </footer>
  );
}
