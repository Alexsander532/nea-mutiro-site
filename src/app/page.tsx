"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Sprout, Trees } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/FadeIn";

const focusAreas = [
  {
    icon: Trees,
    title: "Comunidades Quilombolas",
    description:
      "Valorizamos e apoiamos os conhecimentos antigos e as formas tradicionais de plantar.",
    color: "bg-accent",
    linkBg: "bg-accent/20 text-brown",
    href: "/territorios/corrego-do-narciso",
  },
  {
    icon: Sprout,
    title: "Comunidades Indígenas",
    description:
      "Trocamos saberes entre a ciência e o profundo conhecimento dos povos da floresta.",
    color: "bg-green-light",
    linkBg: "bg-green-light/30 text-green",
    href: "/territorios/kamaka-mongoio",
  },
  {
    icon: Building2,
    title: "Periferias das Cidades",
    description:
      "Apoiamos hortas nas cidades para garantir comida saudável e fortalecer os bairros.",
    color: "bg-brown-dark",
    linkBg: "bg-brown-dark/20 text-brown-dark",
    href: "/territorios/cabana-pai-tomas",
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
              <p className="text-lg font-bold text-green">
                Núcleo de Estudos em Agroecologia
              </p>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-brown md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Aprender e trabalhar
              <br />
              junto com a terra.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-text md:text-xl">
              Nosso objetivo é unir a cidade e o campo através de práticas saudáveis
              de plantio. Trabalhamos em comunidade para trocar conhecimentos,
              pesquisar e criar soluções que melhoram a vida de todos.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/projetos" icon>
                Conheça nosso trabalho
              </Button>
              <Button href="/territorios" variant="outline">
                Onde atuamos
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
                src="/images/hero-planting.jpg"
                alt="Mãos plantando uma muda na terra"
                width={640}
                height={428}
                className="h-auto w-full object-cover"
                priority
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border/30 bg-cream-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-brown md:text-4xl">
              Nossos Locais de Atuação
            </h2>
            <p className="mt-6 text-lg text-text">
              Trabalhamos para garantir alimento saudável na mesa e cuidado com a
              natureza em três espaços importantes.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {focusAreas.map((area) => (
              <motion.div key={area.title} variants={staggerItem}>
                <motion.article
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(60,42,33,0.12)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-full flex-col rounded-3xl border-2 border-border/50 bg-white p-8 shadow-md"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${area.color}`}
                  >
                    <area.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text">{area.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
                    {area.description}
                  </p>
                  <Link
                    href={area.href}
                    className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-105 ${area.linkBg}`}
                  >
                    Ver projetos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
