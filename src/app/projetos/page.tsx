"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ProjetosPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">
            Práticas Agroecológicas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Nossos projetos articulam ensino, pesquisa e extensão para integrar o campo
            e a cidade. Promovemos a troca de saberes, a produção científica e o
            fortalecimento de tecnologias sociais rumo à soberania alimentar e justiça
            ambiental.
          </p>
        </FadeIn>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-6 pb-24 lg:px-8">
        {projects.map((project, index) => {
          const imageLeft = project.imagePosition === "left";
          const href = `/projetos/${project.slug}`;

          return (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${!imageLeft ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-2xl shadow-md"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={710}
                      height={400}
                      className="h-[280px] w-full object-cover md:h-[400px]"
                    />
                  ) : (
                    <div className="flex h-[280px] items-center justify-center bg-cream-dark md:h-[400px]">
                      <Sprout className="h-20 w-20 text-green/40" />
                    </div>
                  )}
                </motion.div>

                <div className="space-y-4">
                  <p className={`text-sm font-semibold uppercase tracking-widest ${project.categoryColor}`}>
                    {project.category}
                  </p>
                  <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="text-lg text-text-muted">{project.description}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 pt-4 font-semibold text-brown transition-colors hover:text-brown/80"
                  >
                    Ver projeto
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </>
  );
}
