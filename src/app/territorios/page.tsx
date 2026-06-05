"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { territories } from "@/data/territories";
import { FadeIn } from "@/components/motion/FadeIn";

const tagStyles = {
  green: "bg-green text-white",
  brown: "bg-brown-dark text-white",
  orange: "bg-brown text-white",
};

export default function TerritoriosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-20 max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">
          Territórios Prioritários
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Nosso trabalho de pesquisa e extensão está enraizado em comunidades que
          representam a diversidade e a riqueza do conhecimento tradicional e da luta
          por territórios mais justos.
        </p>
      </FadeIn>

      <div className="space-y-16">
        {territories.map((territory, index) => {
          const imageFirst = territory.imagePosition === "left";

          return (
            <FadeIn key={territory.slug} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-xl border border-border bg-white shadow-lg"
              >
                <div
                  className={`grid md:grid-cols-2 ${!imageFirst ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative min-h-[280px] md:min-h-[400px]">
                    <Image
                      src={territory.image}
                      alt={territory.title}
                      fill
                      className="object-cover"
                    />
                    <span
                      className={`absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-md ${tagStyles[territory.tagColor]}`}
                    >
                      {territory.tag}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <h2 className="font-display text-2xl font-semibold text-accent md:text-3xl">
                      {territory.title}
                    </h2>
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-light">
                      <MapPin className="h-4 w-4" />
                      {territory.location}
                    </div>
                    <p className="mt-6 text-lg text-text-muted">{territory.description}</p>
                    <Link
                      href={`/territorios/${territory.slug}`}
                      className="mt-10 inline-flex w-fit rounded-full bg-brown px-10 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
