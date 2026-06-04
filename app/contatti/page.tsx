import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";

import { LocalBusinessJsonLd } from "@/components/seo-json-ld";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contatti Spurghi Reggio Emilia H24",
  description:
    "Contatta Spurghi Reggio Emilia per autospurgo, disotturazione tubi, fosse biologiche e pronto intervento fognature H24.",
  alternates: {
    canonical: `${site.url}/contatti`
  },
  openGraph: {
    title: "Contatti Spurghi Reggio Emilia H24",
    description:
      "Telefono diretto, indirizzo e form per richiedere interventi di spurgo a Reggio Emilia.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }]
  }
};

export default function ContactPage() {
  return (
    <main className="pt-40 lg:pt-36">
      <LocalBusinessJsonLd />
      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-12 px-6 py-20 lg:px-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Contattaci</p>
          <h1 className="fluid-page-title mobile-safe-copy mt-8 font-display font-extrabold leading-[0.92] tracking-[-0.045em]">
            Una chiamata. Poi il piano.
          </h1>
          <p className="mt-10 max-w-3xl text-2xl leading-relaxed text-ink/70">
            Per emergenze chiama subito. Per preventivi, manutenzioni e richieste non urgenti puoi compilare il form.
          </p>
        </div>
        <div className="relative col-span-12 min-h-[560px] lg:col-span-5">
          <Image src="/images/team-bw.jpg" alt="Contatti Spurghi Reggio Emilia" fill priority className="object-cover grayscale" />
        </div>
      </section>

      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-12 px-6 py-28 lg:px-12">
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-36 space-y-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Telefono</p>
              <a href={`tel:${site.phoneHref}`} className="mt-4 inline-flex font-display text-5xl text-ink">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Indirizzo</p>
              <p className="mt-4 max-w-sm text-lg leading-8 text-ink/65">{site.address}</p>
            </div>
            <Button asChild size="lg">
              <a href={`tel:${site.phoneHref}`} className="gap-3">
                <Phone className="h-4 w-4" />
                Chiama ora
              </a>
            </Button>
          </div>
        </aside>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="col-span-12 grid gap-6 lg:col-span-7 lg:col-start-6"
        >
          <input
            name="nome"
            required
            placeholder="Nome e cognome"
            className="border-b border-white/20 bg-transparent px-0 py-5 text-xl outline-none transition placeholder:text-ink/35 focus:border-gold"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <input
              name="telefono"
              required
              placeholder="Telefono"
              className="border-b border-white/20 bg-transparent px-0 py-5 text-xl outline-none transition placeholder:text-ink/35 focus:border-gold"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-b border-white/20 bg-transparent px-0 py-5 text-xl outline-none transition placeholder:text-ink/35 focus:border-gold"
            />
          </div>
          <textarea
            name="messaggio"
            required
            rows={8}
            placeholder="Descrivi il problema"
            className="resize-none border-b border-white/20 bg-transparent px-0 py-5 text-xl outline-none transition placeholder:text-ink/35 focus:border-gold"
          />
          <input type="hidden" name="_subject" value="Nuova richiesta da spurghireggioemilia.it" />
          <Button type="submit" size="lg" className="mt-6 w-fit">
            Invia richiesta
          </Button>
        </form>
      </section>
    </main>
  );
}
