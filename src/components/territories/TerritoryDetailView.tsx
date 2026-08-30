"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Download, MapPin, Sprout, Users } from "lucide-react";
import type { Territory } from "@/data/territories";
import { FadeIn } from "@/components/motion/FadeIn";

const chipStyles = {
  green: "bg-green-light text-[#546a2e]",
  pink: "border border-[#f8bbd0] bg-[#fce4ec] text-[#880e4f]",
  neutral: "bg-cream-dark text-text-muted",
};

const infoIcons = [MapPin, Users, Sprout];

type Props = { territory: Territory };

export function TerritoryDetailView({ territory }: Props) {
  const { detail } = territory;

  return (
    <>
      {/* Hero full-bleed */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[420px] w-full overflow-hidden shadow-sm md:h-[600px]"
      >
        <Image
          src={detail.heroImage}
          alt={territory.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/30 via-transparent to-transparent" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-20 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Main column */}
          <article className="lg:col-span-8">
            <FadeIn>
              <nav className="mb-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/territorios"
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-text-muted transition-colors hover:text-brown"
                >
                  Territórios
                </Link>
                <ChevronRight className="h-3 w-3 text-border" />
                {detail.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${chipStyles[chip.variant]}`}
                  >
                    {chip.label}
                  </span>
                ))}
              </nav>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brown md:text-5xl">
                {territory.title}
              </h1>

              <p className="mt-6 font-display text-xl font-bold leading-relaxed text-text-muted md:text-2xl">
                {detail.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-14 space-y-6">
              {detail.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-lg leading-7 text-text">
                  {paragraph}
                </p>
              ))}
            </FadeIn>

            {detail.figure && (
              <FadeIn delay={0.15} className="mt-12">
                <figure className="overflow-hidden rounded-lg border border-border/30 bg-cream-dark p-6 shadow-sm">
                  <div className="relative h-[280px] overflow-hidden rounded-md md:h-[400px]">
                    <Image
                      src={detail.figure.src}
                      alt={detail.figure.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm font-semibold uppercase tracking-wider text-text-muted">
                    {detail.figure.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            )}

            <FadeIn delay={0.2} className="mt-14">
              <h2 className="font-display text-3xl font-semibold text-green">
                {detail.sectionTitle}
              </h2>
              <div className="mt-6 space-y-5">
                {detail.sectionBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-lg leading-7 text-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {detail.quote && (
              <FadeIn delay={0.25} className="mt-14">
                <blockquote className="rounded-r-lg border-l-4 border-brown bg-cream-dark py-6 pl-7 pr-6">
                  <p className="font-display text-xl italic leading-relaxed text-brown md:text-2xl">
                    &ldquo;{detail.quote.text}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    — {detail.quote.author}
                  </footer>
                </blockquote>
              </FadeIn>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <FadeIn delay={0.15} direction="left">
                <div className="rounded-lg border border-border/30 bg-cream-dark p-8 shadow-sm lg:p-10">
                  <h3 className="border-b border-border/50 pb-4 font-display text-2xl font-bold text-text">
                    Ficha do Território
                  </h3>
                  <ul className="mt-6 space-y-6">
                    {detail.info.map((item, i) => {
                      const Icon = infoIcons[i] ?? MapPin;
                      return (
                        <li key={item.label} className="flex gap-4">
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brown" />
                          <div>
                            <p className="font-bold text-text">{item.label}</p>
                            <p className="mt-0.5 text-text-muted">{item.value}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-brown py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    Baixar Relatório (PDF)
                  </motion.button>
                </div>
              </FadeIn>

              <FadeIn delay={0.25} direction="left">
                <div className="rounded-lg border border-border/30 bg-cream p-8 shadow-sm lg:p-10">
                  <h3 className="font-display text-2xl font-bold text-text">
                    Outros Territórios
                  </h3>
                  <ul className="mt-6 space-y-1">
                    {detail.related.map((item, i) => (
                      <li
                        key={item.title}
                        className={`${i > 0 ? "border-t border-border/30 pt-4" : ""}`}
                      >
                        {item.slug ? (
                          <Link
                            href={`/territorios/${item.slug}`}
                            className="group block rounded-lg p-3 transition-colors hover:bg-cream-dark"
                          >
                            <p className="font-semibold text-green group-hover:text-brown transition-colors">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                          </Link>
                        ) : (
                          <div className="p-3">
                            <p className="font-semibold text-green">{item.title}</p>
                            <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
