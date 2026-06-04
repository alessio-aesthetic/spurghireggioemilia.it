"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cities, services, site } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-blacklux/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="luxury-grid mx-auto max-w-[1800px] items-center px-6 py-5 lg:px-12">
        <Link href="/" className="col-span-8 flex items-center gap-4 lg:col-span-4">
          <span className="flex h-12 w-10 items-center justify-center border border-gold text-gold">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display text-xl leading-none tracking-tight">Reggio Spurghi</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
              atelier tecnico
            </span>
          </span>
        </Link>

        <nav className="col-span-4 hidden justify-start gap-8 lg:col-span-5 lg:flex">
          <details className="group relative">
            <summary className="link-underline cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.18em]">
              Servizi
            </summary>
            <div className="absolute left-0 top-full mt-5 grid w-[380px] grid-cols-1 border border-white/10 bg-blacklux p-4 shadow-2xl">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servizi/${service.slug}`}
                  className="border-b border-white/10 px-2 py-3 text-sm text-ink/70 transition hover:text-gold"
                >
                  {service.menu}
                </Link>
              ))}
            </div>
          </details>

          <details className="group relative">
            <summary className="link-underline cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.18em]">
              Citta' dove operiamo
            </summary>
            <div className="absolute left-0 top-full mt-5 grid w-[420px] grid-cols-1 border border-white/10 bg-blacklux p-4 shadow-2xl">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/citta/${city.slug}`}
                  className="border-b border-white/10 px-2 py-3 text-sm text-ink/70 transition hover:text-gold"
                >
                  Spurghi a {city.name}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/contatti" className="link-underline text-sm font-semibold uppercase tracking-[0.18em]">
            Contatti
          </Link>
        </nav>

        <div className="col-span-4 hidden justify-end lg:col-span-3 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-gold"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>

        <div className="col-span-4 flex justify-end lg:hidden">
          <button
            aria-label="Apri menu"
            className="border border-white/20 p-3"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-blacklux px-6 py-6 lg:hidden">
          <details className="border-b border-white/10 py-4" open>
            <summary className="cursor-pointer font-display text-2xl">Servizi</summary>
            <div className="mt-4 grid gap-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/servizi/${service.slug}`} onClick={() => setOpen(false)}>
                  {service.menu}
                </Link>
              ))}
            </div>
          </details>
          <details className="border-b border-white/10 py-4">
            <summary className="cursor-pointer font-display text-2xl">Citta' dove operiamo</summary>
            <div className="mt-4 grid gap-3">
              {cities.map((city) => (
                <Link key={city.slug} href={`/citta/${city.slug}`} onClick={() => setOpen(false)}>
                  Spurghi a {city.name}
                </Link>
              ))}
            </div>
          </details>
          <Button asChild className="mt-6 w-full">
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
