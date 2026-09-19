"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { repositoryLinks, siteName } from "@/data/site";
import { motion } from "framer-motion";

export default function RepositorioPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
        <BookOpen className="mx-auto mb-5 h-10 w-10 text-green" />
        <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">Repositório</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Materiais, produções e páginas relacionadas ao {siteName}. Os conteúdos serão ampliados
          conforme a revisão textual e institucional avance.
        </p>
      </FadeIn>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {repositoryLinks.map((item) => (
          <motion.a
            key={item.label}
            variants={staggerItem}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-64 flex-col justify-between rounded-3xl border border-border/50 bg-white p-8 shadow-md transition-transform hover:-translate-y-1"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-text">{item.label}</h2>
              <p className="mt-4 leading-relaxed text-text-muted">{item.description}</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brown">
              Abrir link
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </motion.a>
        ))}
      </StaggerContainer>
    </div>
  );
}
