"use client";

import Image from "next/image";
import { ArrowUpRight, Handshake, Landmark } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/FadeIn";
import { collaboratorLinks, institutionalLinks, siteName } from "@/data/site";
import { motion } from "framer-motion";

export default function LinksUteisPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">Links úteis</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Acesse as instituições e redes que constroem o {siteName}.
        </p>
      </FadeIn>

      <section>
        <FadeIn className="mb-8 flex items-center gap-3">
          <Landmark className="h-7 w-7 text-green" />
          <h2 className="font-display text-3xl font-bold text-text">Instituições e financiamento</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {institutionalLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-40 flex-col justify-between rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div>
                <p className="font-display text-xl font-bold text-text">{link.label}</p>
                <p className="mt-2 text-sm text-text-muted">{link.description}</p>
              </div>
              <ArrowUpRight className="mt-5 h-5 w-5 text-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </StaggerContainer>
      </section>

      <section className="mt-20">
        <FadeIn className="mb-8 flex items-center gap-3">
          <Handshake className="h-7 w-7 text-green" />
          <h2 className="font-display text-3xl font-bold text-text">Colaboradores</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {collaboratorLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-48 flex-col justify-between rounded-2xl border border-border/50 bg-cream-dark p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div>
                {link.logo ? (
                  <div className="mb-5 flex h-12 items-center">
                    <Image src={link.logo} alt={link.label} width={136} height={48} className="h-12 w-auto object-contain" />
                  </div>
                ) : (
                  <p className="mb-5 font-display text-2xl font-bold text-text">PET conecTTE</p>
                )}
                <p className="text-sm text-text-muted">{link.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brown">
                Visitar site
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </motion.a>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
