import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { collaboratorLinks, contact, siteName } from "@/data/site";

type FooterLogo = {
  src: string;
  alt: string;
  href?: string;
};

const executiveInstitutionLogos: FooterLogo[] = [
  {
    src: "/logos/divididos/CEFET-MG_transparente.png",
    alt: "CEFET-MG – instituição executora",
    href: "https://www.cefetmg.br/",
  },
  {
    src: "/logos/divididos/UEMG_transparente.png",
    alt: "UEMG – instituição executora",
    href: "https://www.uemg.br/",
  },
  {
    src: "/logos/FioCruz minas.png",
    alt: "Fiocruz Minas – Instituto René Rachou – instituição executora",
    href: "https://minas.fiocruz.br/",
  },
];

const fundingLogos: FooterLogo[] = [
  {
    src: "/logos/divididos/CNPq_transparente.png",
    alt: "CNPq – financiamento",
    href: "https://www.gov.br/cnpq/pt-br",
  },
];

const collaboratorLogos: FooterLogo[] = [
  {
    src: "/logos/divididos/Kaipora_UEMG_transparente.png",
    alt: "Kaiporá – colaborador",
    href: "https://revista.uemg.br/index.php/sulear/article/view/6156",
  },
  {
    src: "/logos/divididos/SoFiA_transparente.png",
    alt: "Programa SoFiA – colaborador",
    href: "https://www.sofia.cefetmg.br/",
  },
];

function LogoGroup({ title, logos }: { title: string; logos: FooterLogo[] }) {
  return (
    <section>
      <h3 className="mb-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
        {title}
      </h3>
      <div className="flex min-h-24 flex-wrap items-center justify-center gap-3">
        {logos.map((logo) => {
          const content = (
            <div className="flex h-20 min-w-28 items-center justify-center rounded-xl bg-white px-4 py-3 shadow-sm transition-transform hover:scale-[1.03]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={80}
                className="max-h-14 w-auto max-w-[210px] object-contain"
              />
            </div>
          );

          return logo.href ? (
            <a key={logo.alt} href={logo.href} target="_blank" rel="noreferrer" aria-label={logo.alt}>
              {content}
            </a>
          ) : (
            <div key={logo.alt}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto rounded-t-3xl border-t-2 border-border bg-footer">
      <div className="border-b border-border/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[2fr_1fr_2fr] lg:px-8">
          <LogoGroup title="Instituições executoras" logos={executiveInstitutionLogos} />
          <LogoGroup title="Financiamento" logos={fundingLogos} />
          <LogoGroup title="Colaboradores" logos={collaboratorLogos} />
        </div>
        <p className="pb-6 text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
          Execução · Financiamento · Colaboração
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
            <p>CEFET-MG, UEMG e Fiocruz Minas – Instituto René Rachou são instituições executoras.</p>
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
