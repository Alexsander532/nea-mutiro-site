"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Search, Sprout, TrendingUp, Users } from "lucide-react";
import type { Project } from "@/data/projects";
import { CountUp } from "@/components/motion/CountUp";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/FadeIn";

const tagStyles = {
  brown: "border border-border/50 bg-[#eaead1] text-brown",
  green: "border border-green/20 bg-green-light/30 text-[#546a2e]",
};

type Props = { project: Project };

export function ProjectDetailView({ project }: Props) {
  const { detail } = project;
  const tagIcons = [Search, Users];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-20 lg:pt-16">
      {/* Header */}
      <FadeIn className="mb-12">
        <Link
          href="/projetos"
          className="text-sm font-semibold uppercase tracking-wider text-text-muted transition-colors hover:text-brown"
        >
          ← Projetos e Ações
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {detail.tags.map((tag, i) => {
            const Icon = tagIcons[i] ?? Sprout;
            return (
              <span
                key={tag.label}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${tagStyles[tag.variant]}`}
              >
                <Icon className="h-3 w-3" />
                {tag.label}
              </span>
            );
          })}
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-text md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base text-text-muted">
          Publicado em {detail.publishedAt} • {detail.territory}
        </p>
      </FadeIn>

      {/* Hero image */}
      <FadeIn delay={0.08}>
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative mb-16 h-[320px] overflow-hidden rounded-xl border border-border/30 shadow-sm md:h-[480px] lg:h-[614px]"
        >
          <Image
            src={detail.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>
      </FadeIn>

      {/* Two-column content */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-12 lg:col-span-8">
          <FadeIn delay={0.1} className="space-y-6">
            {detail.intro.map((p) => (
              <p key={p.slice(0, 48)} className="text-lg leading-[1.65] text-text">
                {p}
              </p>
            ))}
            {detail.introSecondary.map((p) => (
              <p key={p.slice(0, 48)} className="text-base leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex items-center gap-3">
              <Sprout className="h-5 w-5 text-green" />
              <h2 className="font-display text-3xl font-bold text-text">Como funciona</h2>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-xl border border-border/30 bg-cream-dark p-8 shadow-sm md:p-9">
              <Sprout className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 text-green/10" />

              <div className="relative space-y-8">
                {detail.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brown/10 font-display text-base font-bold text-brown">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-text">{step.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <aside className="space-y-8 lg:col-span-4">
          <FadeIn delay={0.12} direction="left">
            <div className="rounded-xl border border-border/50 bg-cream p-6 shadow-sm">
              <h3 className="border-b border-border/30 pb-4 font-display text-2xl font-bold text-text">
                Benefícios Diretos
              </h3>
              <ul className="mt-5 space-y-4">
                {detail.benefits.map((benefit) => (
                  <li key={benefit.slice(0, 40)} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                    <span className="text-base text-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brown to-[#944925] p-8 shadow-lg"
            >
              <TrendingUp className="mb-4 h-9 w-9 text-white/80" />
              <h3 className="font-display text-3xl font-bold leading-tight text-white">
                Impacto em
                <br />
                Números
              </h3>
              <p className="mt-3 text-base text-white/90">{detail.statsDescription}</p>

              <div className="mt-6 space-y-5">
                {detail.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l-2 border-white/30 pl-5"
                  >
                    <p className="font-display text-3xl font-bold text-white">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </aside>
      </div>

      {/* Gallery */}
      <FadeIn delay={0.15} className="mt-20">
        <h2 className="font-display text-3xl font-bold text-text">Galeria Visual</h2>
        <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-3">
          {detail.gallery.map((item) => (
            <motion.div
              key={item.src}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-64 overflow-hidden rounded-lg border border-border/30 shadow-sm md:h-80 lg:h-[357px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </FadeIn>
    </div>
  );
}
