import Link from "next/link";
import Image from "next/image";
import { Mail, Share2 } from "lucide-react";

const institutionLogos = [
  { src: "/logos/divididos/CEFET-MG_transparente.png", alt: "CEFET-MG" },
  { src: "/logos/divididos/UEMG_transparente.png", alt: "UEMG" },
  { src: "/logos/divididos/CNPq_transparente.png", alt: "CNPq" },
  { src: "/logos/divididos/Kaipora_UEMG_transparente.png", alt: "Kaipora — UEMG" },
  { src: "/logos/divididos/SoFiA_transparente.png", alt: "SoFiA" },
];

export function Footer() {
  return (
    <footer className="mt-auto rounded-t-3xl border-t-2 border-border bg-footer">
      <div className="border-b border-border/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-8 lg:px-8">
          {institutionLogos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-16 items-center rounded-lg bg-white px-4 py-2 shadow-sm"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="h-12 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-8">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo_neaMutiro.png"
              alt="NEA-Mutiró"
              width={80}
              height={80}
              className="h-14 w-auto"
              quality={100}
            />
          </Link>
          <div className="space-y-4 text-base text-text">
            <p>© 2024 NEA-Mutiró. Núcleo de Estudos em Agroecologia e Bem-Viver.</p>
            <p>Execução e parcerias: CEFET-MG, UEMG, CNPq, Kaipora e SoFiA.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Links Úteis</h4>
          {["Políticas de Privacidade", "Acessibilidade", "Documentos Importantes"].map(
            (link) => (
              <Link
                key={link}
                href="#"
                className="block text-base text-text hover:text-brown transition-colors"
              >
                {link}
              </Link>
            )
          )}
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Fale Conosco</h4>
          <a
            href="mailto:contato@neamutiro.org.br"
            className="flex items-center gap-3 text-base text-text hover:text-brown transition-colors"
          >
            <Mail className="h-5 w-5 shrink-0" />
            contato@neamutiro.org.br
          </a>
          <a
            href="#"
            className="inline-flex rounded-full bg-cream-dark p-2 text-text hover:bg-green-light/40 transition-colors"
            aria-label="Redes sociais"
          >
            <Share2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
