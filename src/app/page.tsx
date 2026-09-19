"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { siteName } from "@/data/site";

const focalTerritories = [
  {
    title: "Aglomerado Cabana do Pai Tomás",
    location: "Belo Horizonte (MG)",
    description: "Agroecologia urbana, organização comunitária e segurança alimentar.",
    image: "/images/territorios/cabana-pai-tomas/1127ac88-d196-4524-b5c2-1cee45ecc6a6.JPG",
    alt: "Paisagem do Aglomerado Cabana do Pai Tomás",
    href: "/territorios/cabana-pai-tomas",
  },
  {
    title: "Aldeia Indígena Kamakã Mongóio",
    location: "Brumadinho (MG)",
    description: "Saberes tradicionais, território de retomada e intercâmbios agroecológicos.",
    image: "/images/territorios/aldeia-kamaka-mongoio/012a03c4-a816-4050-9df6-7d0e612d0e83.JPG",
    alt: "Encontro na Aldeia Indígena Kamakã Mongóio",
    href: "/territorios/kamaka-mongoio",
  },
  {
    title: "Quilombo Córrego do Narciso",
    location: "Araçuaí (MG)",
    description: "Práticas agroecológicas, cultura e participação comunitária.",
    image: "/images/territorios/misturadas/1e4b72c5-e212-4a12-9b34-f1606f7e0fe4.jpg",
    alt: "Paisagem de um território quilombola",
    href: "/territorios/corrego-do-narciso",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-green" />
              <p className="text-lg font-bold text-green">Núcleo de Estudos em Agroecologia</p>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-brown md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Aprender e trabalhar
              <br />
              junto com a terra.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-text md:text-xl">
              O {siteName} articula ensino, pesquisa e extensão a partir da troca de saberes
              entre comunidades, estudantes e instituições parceiras.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/projetos" icon>
                Conheça nossas ações
              </Button>
              <Button href="/territorios" variant="outline">
                Ver territórios focais
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right" className="relative">
            <div className="absolute -right-6 top-6 -z-10 h-full w-full rounded-[2rem] bg-cream-dark" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="overflow-hidden rounded-[2rem] border-2 border-border shadow-xl"
            >
              <Image
                src={focalTerritories[1].image}
                alt={focalTerritories[1].alt}
                width={640}
                height={428}
                className="h-[420px] w-full object-cover"
                priority
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border/30 bg-cream-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green">
              Onde atuamos
            </p>
            <h2 className="font-display text-3xl font-bold text-brown md:text-4xl">
              Territórios focais
            </h2>
            <p className="mt-6 text-lg text-text">
              Cada território reúne experiências, saberes e modos de vida que orientam as ações do
              {" "}{siteName}.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {focalTerritories.map((territory) => (
              <motion.article
                key={territory.title}
                variants={staggerItem}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(60,42,33,0.12)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden rounded-3xl border-2 border-border/50 bg-white shadow-md"
              >
                <div className="relative h-56">
                  <Image
                    src={territory.image}
                    alt={territory.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-[280px] flex-col p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-green">
                    {territory.location}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-text">{territory.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
                    {territory.description}
                  </p>
                  <Link
                    href={territory.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-cream-dark px-6 py-3 text-sm font-bold text-brown transition-transform hover:scale-105"
                  >
                    Conheça o território
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
