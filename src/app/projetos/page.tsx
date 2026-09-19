"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, FlaskConical, Sprout } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/motion/FadeIn";
import { collaboratorLinks, siteName } from "@/data/site";

const areas = [
  {
    title: "Ensino",
    icon: BookOpen,
    description: "Conteúdos e ações de ensino serão adicionados após a revisão da equipe.",
    empty: true,
  },
  {
    title: "Pesquisa",
    icon: FlaskConical,
    description: "Conteúdos e ações de pesquisa serão adicionados após a revisão da equipe.",
    empty: true,
  },
];

export default function ProjetosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green">Ações do núcleo</p>
        <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">
          Ensino, Pesquisa e Extensão
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          O {siteName} articula diferentes formas de produção e compartilhamento de saberes. Esta
          página substitui a antiga listagem de projetos e será ampliada conforme os textos forem revisados.
        </p>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-2">
        {areas.map((area, index) => {
          const Icon = area.icon;
          return (
            <FadeIn key={area.title} delay={index * 0.1}>
              <article className="flex min-h-[280px] flex-col rounded-3xl border-2 border-dashed border-border bg-white/70 p-8 shadow-sm lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-dark text-brown">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="font-display text-3xl font-bold text-text">{area.title}</h2>
                </div>
                <p className="mt-8 flex-1 text-lg leading-relaxed text-text-muted">{area.description}</p>
                <span className="mt-8 text-sm font-semibold uppercase tracking-widest text-text-light">
                  Em breve
                </span>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.2} className="mt-8">
        <section className="rounded-3xl border-2 border-border/50 bg-cream-dark p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-white">
              <Sprout className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green">Ações em rede</p>
              <h2 className="font-display text-3xl font-bold text-text">Extensão</h2>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-muted">
            A extensão reúne as experiências articuladas com colaboradores do núcleo. Acesse os sites
            e materiais de SoFiA, Kaiporá e PET conecTTE.
          </p>
          <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-3">
            {collaboratorLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-36 flex-col justify-between rounded-2xl border border-border/60 bg-white p-6 transition-transform hover:-translate-y-1"
              >
                <div>
                  <p className="font-display text-xl font-bold text-text">{link.label}</p>
                  <p className="mt-2 text-sm text-text-muted">{link.description}</p>
                </div>
                <ArrowUpRight className="mt-5 h-5 w-5 text-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn delay={0.25} className="mt-16 text-center">
        <h2 className="font-display text-3xl font-bold text-text">Repositório</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
          Consulte produções e materiais do {siteName} e das redes parceiras.
        </p>
        <Link
          href="/repositorio"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-7 py-3 font-semibold text-white transition-transform hover:scale-105"
        >
          Acessar o repositório
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </FadeIn>
    </div>
  );
}
