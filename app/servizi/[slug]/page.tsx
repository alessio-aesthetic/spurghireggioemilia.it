import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqJsonLd, LocalBusinessJsonLd } from "@/components/seo-json-ld";
import { services, site } from "@/lib/site-data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${site.url}/servizi/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/servizi/${service.slug}`,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630 }]
    }
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <main className="pt-32">
      <LocalBusinessJsonLd />
      <FaqJsonLd faq={service.faq} />

      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-12 px-6 py-20 lg:px-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">{service.menu}</p>
          <h1 className="mt-8 font-display text-[16vw] leading-[0.86] tracking-[-0.07em] lg:text-[8.5vw]">
            {service.title}
          </h1>
          <p className="mt-10 max-w-3xl text-2xl leading-relaxed text-ink/70">{service.intro}</p>
        </div>
        <div className="relative col-span-12 min-h-[560px] lg:col-span-5">
          <Image src="/images/service-bw.jpg" alt={service.title} fill priority className="object-cover grayscale" />
        </div>
      </section>

      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-12 px-6 py-28 lg:px-12">
        <aside className="col-span-12 lg:col-span-3">
          <p className="sticky top-36 text-xs font-bold uppercase tracking-[0.35em] text-gold">Approfondimento</p>
        </aside>
        <article className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-5">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-2xl leading-relaxed text-ink/74">
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      <section className="bg-[#111] px-6 py-28 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px] gap-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display text-6xl leading-none">Domande frequenti</h2>
          </div>
          <div className="col-span-12 grid gap-6 lg:col-span-8">
            {service.faq.map((item) => (
              <div key={item.q} className="border-t border-white/10 pt-6">
                <h3 className="font-display text-3xl">{item.q}</h3>
                <p className="mt-4 leading-7 text-ink/60">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gold-mesh px-6 py-32 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px]">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-7xl leading-none tracking-[-0.05em]">Vuoi risolvere adesso?</h2>
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
