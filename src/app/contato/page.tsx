"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { useState } from "react";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mb-16 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-brown md:text-5xl">
          Fale com o Mutiró
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Entre em contato conosco para diálogos sobre agroecologia, parcerias
          acadêmicas ou para conhecer mais sobre nossos territórios de atuação.
        </p>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7">
          <div className="rounded-xl border border-border/30 bg-cream p-8 shadow-lg lg:p-10">
            <h2 className="text-2xl font-semibold text-text">Envie uma mensagem</h2>
            <p className="mt-2 text-text-muted">
              Preencha de forma rápida e retornaremos logo que possível.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-lg bg-green-light/30 p-6 text-center"
              >
                <p className="font-semibold text-green">Mensagem enviada com sucesso!</p>
                <p className="mt-2 text-sm text-text-muted">Retornaremos em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {[
                  { id: "name", label: "Como podemos te chamar?", placeholder: "Seu nome", type: "text" },
                  { id: "contact", label: "E-mail ou Telefone", placeholder: "Como prefere que a gente responda?", type: "text" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-lg border border-border/50 bg-white px-4 py-3 text-text outline-none transition-shadow focus:ring-2 focus:ring-brown/30"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                    O que você gostaria de nos dizer?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="mt-2 w-full resize-none rounded-lg border border-border/50 bg-white px-4 py-3 text-text outline-none transition-shadow focus:ring-2 focus:ring-brown/30"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brown px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md"
                >
                  Enviar Mensagem
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </div>
        </FadeIn>

        <div className="space-y-8 lg:col-span-5">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-brown/20 bg-accent/10 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-brown">Fale Direto com a Gente</h3>
              <p className="mt-2 text-text-muted">
                Prefere não usar o formulário? Chame no WhatsApp ou ligue para nós.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: Phone, label: "WhatsApp", value: "(31) 99999-9999" },
                  { icon: Phone, label: "Telefone", value: "(31) 3333-3333" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href="#"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 rounded-xl border border-border/30 bg-cream p-4"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brown/10">
                      <item.icon className="h-6 w-6 text-brown" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-text">{item.label}</p>
                      <p className="text-text-muted">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-xl border border-border/30 bg-cream-dark p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-text">Outras Redes</h3>
              <ul className="mt-6 space-y-4">
                {[
                  { icon: Mail, text: "contato@nea-mutiro.org.br", href: "mailto:contato@nea-mutiro.org.br" },
                  { icon: Globe, text: "@neamutiro (Instagram)", href: "#" },
                  { icon: ArrowRight, text: "Portal Institucional FIOCRUZ", href: "#" },
                ].map((item) => (
                  <li key={item.text}>
                    <a href={item.href} className="flex items-center gap-3 text-text-muted hover:text-brown transition-colors">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-white">
                        <item.icon className="h-4 w-4" />
                      </span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-xl border border-border/30 bg-cream p-6 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brown" />
                <h3 className="text-2xl font-semibold text-text">Onde nos encontrar</h3>
              </div>
              <p className="mt-2 text-text-muted">CEFET-MG, UEMG e FIOCRUZ</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-border/50">
                <Image
                  src="/images/mapa-mg.jpg"
                  alt="Mapa de Minas Gerais"
                  width={485}
                  height={256}
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
