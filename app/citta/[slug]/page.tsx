import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { LocalBusinessJsonLd } from "@/components/seo-json-ld";
import { Button } from "@/components/ui/button";
import { cities, services, site } from "@/lib/site-data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find((item) => item.slug === params.slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `${site.url}/citta/${city.slug}`
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${site.url}/citta/${city.slug}`,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630 }]
    }
  };
}

export default function CityPage({ params }: Props) {
  const city = cities.find((item) => item.slug === params.slug);
  if (!city) notFound();

  return (
    <main className="pt-32">
      <LocalBusinessJsonLd />

      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-12 px-6 py-20 lg:px-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Citta' dove operiamo</p>
          <h1 className="mt-8 font-display text-[17vw] leading-[0.86] tracking-[-0.07em] lg:text-[9vw]">
            Spurghi a {city.name}
          </h1>
          <p className="mt-10 max-w-3xl text-2xl leading-relaxed text-ink/70">{city.intro}</p>
        </div>
        <div className="relative col-span-12 min-h-[560px] lg:col-span-5">
          <Image src="/images/team-bw.jpg" alt={`Spurghi a ${city.name}`} fill priority className="object-cover grayscale" />
        </div>
      </section>

      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-12 px-6 py-28 lg:px-12">
        <aside className="col-span-12 lg:col-span-3">
          <p className="sticky top-36 text-xs font-bold uppercase tracking-[0.35em] text-gold">Zona servita</p>
        </aside>
        <article className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-5">
          {city.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-2xl leading-relaxed text-ink/74">
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      <section className="bg-[#111] px-6 py-28 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px] gap-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display text-6xl leading-none">Servizi disponibili in zona</h2>
          </div>
          <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:col-span-8">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}`}
                className="group border-t border-white/10 py-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{service.menu}</p>
                <h3 className="mt-3 font-display text-3xl transition group-hover:translate-x-2 group-hover:text-gold">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gold-mesh px-6 py-32 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px]">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-7xl leading-none tracking-[-0.05em]">Serve un intervento a {city.name}?</h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0 lg:self-end">
            <Button asChild size="lg">
              <Link href="/contatti" className="gap-3">
                Contattaci <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
