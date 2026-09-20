import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { collaboratorLinks, contact, siteName } from "@/data/site";

const institutionLogos = [
  { src: "/logos/divididos/CEFET-MG_transparente.png", alt: "CEFET-MG – instituição executora" },
  { src: "/logos/divididos/UEMG_transparente.png", alt: "UEMG – instituição coexecutora" },
  { src: "/logos/Logo_Fiocruz.png", alt: "Fiocruz Minas – Instituto René Rachou" },
  { src: "/logos/divididos/CNPq_transparente.png", alt: "CNPq – financiamento" },
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
        <p className="pb-6 text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
          Execução · Coexecução · Financiamento
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo_neaMutiro.png"
              alt={siteName}
              width={112}
              height={112}
              className="h-20 w-auto"
              quality={100}
            />
          </Link>
          <div className="space-y-4 text-base text-text">
            <p>{siteName}.</p>
            <p>CEFET-MG é a instituição executora; UEMG e Fiocruz Minas – Instituto René Rachou são coexecutoras.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Links úteis</h4>
          <Link href="/links-uteis" className="block text-base text-text transition-colors hover:text-brown">
            Instituições e colaboradores
          </Link>
          <Link href="/repositorio" className="block text-base text-text transition-colors hover:text-brown">
            Repositório
          </Link>
          <Link href="/territorios" className="block text-base text-text transition-colors hover:text-brown">
            Territórios focais
          </Link>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Colaboradores</h4>
          {collaboratorLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-base text-text transition-colors hover:text-brown"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Fale conosco</h4>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-base text-text transition-colors hover:text-brown"
          >
            <Mail className="h-5 w-5 shrink-0" />
            {contact.email}
          </a>
          <p className="text-base text-text">{contact.instagramHandle}</p>
          <div className="flex gap-2">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-cream-dark p-2 text-text transition-colors hover:bg-green-light/40"
              aria-label="Instagram do NEA Mutiró"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=X44rTqK-1qA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-cream-dark p-2 text-text transition-colors hover:bg-green-light/40"
              aria-label="YouTube do SoFiA / NEA Mutiró"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
