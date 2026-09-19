"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, Send, Share2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { contact, mapUrl, siteName } from "@/data/site";
import { useState } from "react";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mb-16 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green">Fale conosco</p>
        <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">Entre em contato</h1>
        <p className="mt-4 text-lg leading-relaxed text-text-muted">
          Fale com o {siteName} para dialogar sobre agroecologia, parcerias acadêmicas e ações nos territórios.
        </p>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7">
          <div className="rounded-3xl border border-border/30 bg-cream p-8 shadow-lg lg:p-10">
            <h2 className="text-2xl font-semibold text-text">Envie uma mensagem</h2>
            <p className="mt-2 text-text-muted">Preencha o formulário e retornaremos assim que possível.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-2xl bg-green-light/30 p-6 text-center"
              >
                <p className="font-semibold text-green">Mensagem registrada!</p>
                <p className="mt-2 text-sm text-text-muted">Obrigado pelo contato.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Nome
                  </label>
                  <input id="name" name="name" required placeholder="Seu nome" className="mt-2 w-full rounded-lg border border-border/50 bg-white px-4 py-3 text-text outline-none focus:ring-2 focus:ring-brown/30" />
                </div>
                <div>
                  <label htmlFor="contact" className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                    E-mail ou telefone
                  </label>
                  <input id="contact" name="contact" required placeholder="Como prefere que a gente responda?" className="mt-2 w-full rounded-lg border border-border/50 bg-white px-4 py-3 text-text outline-none focus:ring-2 focus:ring-brown/30" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Mensagem
                  </label>
                  <textarea id="message" name="message" required rows={5} placeholder="Escreva sua mensagem aqui..." className="mt-2 w-full resize-none rounded-lg border border-border/50 bg-white px-4 py-3 text-text outline-none focus:ring-2 focus:ring-brown/30" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brown px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md"
                >
                  Enviar mensagem
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </div>
        </FadeIn>

        <div className="space-y-8 lg:col-span-5">
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-border/30 bg-cream-dark p-7 shadow-lg">
              <h2 className="text-2xl font-semibold text-text">Canais de contato</h2>
              <div className="mt-6 space-y-4">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-xl bg-white p-4 text-text transition-colors hover:text-brown">
                  <Mail className="h-6 w-6 text-brown" />
                  <span>{contact.email}</span>
                </a>
                <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-white p-4 text-text transition-colors hover:text-brown">
                  <Share2 className="h-6 w-6 text-brown" />
                  <span>{contact.instagramHandle}</span>
                </a>
                <a href="https://www.youtube.com/watch?v=X44rTqK-1qA" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-white p-4 text-text transition-colors hover:text-brown">
                  <ExternalLink className="h-6 w-6 text-brown" />
                  <span>Canal do YouTube</span>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-border/30 bg-cream p-7 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brown" />
                <h2 className="text-2xl font-semibold text-text">Onde nos encontrar</h2>
              </div>
              <p className="mt-2 text-text-muted">CEFET-MG – Campus Nova Suíça</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-border/50">
                <iframe
                  title="Mapa do CEFET-MG – Campus Nova Suíça"
                  src={mapUrl}
                  loading="lazy"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
