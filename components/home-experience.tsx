"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight, Check, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { reviews, services, site } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function HomeExperience() {
  const root = useRef<HTMLElement>(null);
  const heroTitle = useRef<HTMLHeadingElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const magnetic = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTitle.current) {
        const split = new SplitText(heroTitle.current, { type: "words" });
        gsap.from(split.words, {
          yPercent: 115,
          opacity: 0,
          stagger: 0.1,
          duration: 1.15,
          ease: "power4.out"
        });
      }

      gsap.from(".hero-subtitle", { y: 28, opacity: 0, delay: 0.7, duration: 0.9, ease: "power3.out" });
      gsap.to(counter.current, {
        innerText: 3184,
        duration: 2.2,
        delay: 0.45,
        snap: { innerText: 1 },
        ease: "power2.out"
      });

      document.querySelectorAll<HTMLElement>(".clip-reveal").forEach((image) => {
        gsap.to(image, {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: image, start: "top 82%" }
        });
      });

      const manifestoItems = gsap.utils.toArray<HTMLElement>(".manifesto-copy p");
      manifestoItems.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 72%",
            end: "bottom 40%",
            scrub: 0.8
          }
        });
      });

      gsap.fromTo(
        ".timeline-path",
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 70%",
            end: "bottom 40%",
            scrub: true
          }
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const button = magnetic.current;
    if (!button) return;
    const move = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.25, y: y * 0.25, duration: 0.35, ease: "power3.out" });
    };
    const leave = () => gsap.to(button, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, .35)" });

    button.addEventListener("mousemove", move);
    button.addEventListener("mouseleave", leave);
    return () => {
      button.removeEventListener("mousemove", move);
      button.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <main ref={root}>
      <section className="relative h-screen min-h-[780px] overflow-hidden bg-blacklux">
        <video
          className="absolute inset-0 h-full w-full object-cover grayscale"
          poster="/images/hero-bw.jpg"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(182,138,42,.18),transparent_30%),linear-gradient(90deg,#F7F4EE_0%,rgba(247,244,238,.92)_43%,rgba(247,244,238,.58)_100%)]" />
        <div className="luxury-grid relative z-10 mx-auto h-full max-w-[1800px] items-end px-6 pb-16 lg:px-12">
          <div className="col-span-12 pb-10 lg:col-span-8">
            <p className="mb-8 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">Autospurgo e fognature H24</p>
            <h1 ref={heroTitle} className="font-display text-[14vw] font-extrabold leading-[0.92] tracking-[-0.055em] text-ink lg:text-[8vw]">
              Spurghi a Reggio Emilia con interventi rapidi e ordinati.
            </h1>
            <p className="hero-subtitle mt-10 max-w-2xl text-lg leading-8 text-ink/70">
              Autospurgo, disotturazione tubi e pronto intervento fognature per case, condomini e aziende. Informazioni chiare, interventi organizzati e un numero diretto per le urgenze.
            </p>
          </div>
          <div className="col-span-12 flex flex-col items-start gap-8 pb-10 lg:col-span-4">
            <div className="border-l border-gold pl-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ink/55">Interventi nel 2024</p>
              <p className="mt-2 font-display text-7xl font-extrabold text-gold">
                <span ref={counter}>0</span>
              </p>
            </div>
            <Button asChild size="lg">
              <a ref={magnetic} href={`tel:${site.phoneHref}`} className="gap-3">
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="luxury-grid mx-auto max-w-[1800px] gap-y-16 px-6 py-36 lg:px-12">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="sticky top-36 font-display text-7xl leading-none tracking-[-0.04em]">Emergenza?</h2>
        </div>
        <div className="manifesto-copy col-span-12 space-y-24 lg:col-span-7 lg:col-start-6">
          <p className="font-display text-4xl leading-tight text-ink lg:text-6xl">
            Prima si capisce dove nasce il blocco. Poi si decide come intervenire.
          </p>
          <p className="text-2xl leading-relaxed text-ink/70">
            Acqua che risale, odori forti, pozzetti pieni e scarichi lenti raccontano problemi diversi. La differenza tra un intervento improvvisato e un lavoro stabile e' nella diagnosi iniziale.
          </p>
          <p className="text-2xl leading-relaxed text-ink/70">
            Per questo raccogliamo informazioni precise, scegliamo il mezzo corretto e lavoriamo con attenzione agli spazi. La velocita' conta, ma conta anche non lasciare il cliente nel caos.
          </p>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px] gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Servizi principali</p>
            <h2 className="mt-6 font-display text-7xl leading-none tracking-[-0.05em]">Quattro interventi. Nessuna griglia da volantino.</h2>
          </div>
          <div className="col-span-12 grid gap-8 lg:col-span-11 lg:col-start-2">
            {services.slice(0, 4).map((service, index) => (
              <Link
                href={`/servizi/${service.slug}`}
                key={service.slug}
                className={`group luxury-grid min-h-[360px] overflow-hidden bg-graphite ${
                  index % 2 === 0 ? "lg:mr-[12%]" : "lg:ml-[12%]"
                }`}
              >
                <div className="relative col-span-12 min-h-[280px] overflow-hidden lg:col-span-5">
                  <Image
                    src={index % 2 === 0 ? "/images/service-bw.jpg" : "/images/team-bw.jpg"}
                    alt={service.title}
                    fill
                    className="clip-reveal object-cover grayscale transition duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gold/0 transition duration-500 group-hover:bg-gold/20" />
                </div>
                <div className="col-span-12 flex flex-col justify-end p-8 lg:col-span-7 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{service.menu}</p>
                  <h3 className="mt-6 font-display text-5xl leading-none transition duration-500 group-hover:translate-x-2 lg:text-7xl">
                    {service.title}
                  </h3>
                  <p className="mt-6 max-w-2xl leading-7 text-ink/60">{service.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline px-6 py-36 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px] gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Processo</p>
            <h2 className="mt-6 font-display text-7xl leading-none tracking-[-0.05em]">Tre mosse, tutte visibili.</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <svg viewBox="0 0 900 120" className="mb-12 h-24 w-full">
              <path className="timeline-path" d="M20 60 C 220 10, 320 110, 450 60 S 680 10, 880 60" fill="none" stroke="#D4AF37" strokeWidth="2" />
            </svg>
            <div className="grid gap-10 lg:grid-cols-3">
              {["Ascolto", "Intervento", "Verifica"].map((step, index) => (
                <div key={step} className="border-t border-white/15 pt-8">
                  <p className="font-display text-6xl text-gold">0{index + 1}</p>
                  <h3 className="mt-6 font-display text-4xl">{step}</h3>
                  <p className="mt-5 leading-7 text-ink/60">
                    {index === 0
                      ? "Raccogliamo sintomi, accesso e urgenza."
                      : index === 1
                        ? "Arriviamo con mezzo e strumenti coerenti."
                        : "Spieghiamo cosa e' stato fatto e cosa monitorare."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24">
        <div className="marquee-track flex w-max gap-6">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={`${review}-${index}`} className="w-[420px] border border-black/10 bg-blacklux p-8">
              <Check className="h-5 w-5 text-gold" />
              <p className="mt-8 font-display text-3xl font-extrabold leading-tight text-ink">{review}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gold-mesh px-6 py-40 lg:px-12">
        <div className="luxury-grid mx-auto max-w-[1800px]">
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display text-[18vw] leading-[0.82] tracking-[-0.07em] lg:text-[10vw]">
              La fognatura non aspetta.
            </h2>
          </div>
          <div className="col-span-12 mt-10 lg:col-span-3 lg:mt-0 lg:self-end">
            <Button asChild size="lg" className="animate-pulse">
              <Link href="/contatti" className="gap-3">
                Contattaci
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
