import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Building2, Handshake, Landmark, Sprout } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/motion/FadeIn";
import { collaboratorLinks, siteName } from "@/data/site";

export const metadata: Metadata = {
  title: "Quem somos",
};

const executiveInstitution = {
  name: "CEFET-MG",
  role: "Instituição executora",
  description:
    "O CEFET-MG coordena a execução do projeto e a integração entre ensino, pesquisa e extensão, contribuindo para a formação de estudantes e para o desenvolvimento das ações nos territórios.",
  image: "/logos/divididos/CEFET-MG_transparente.png",
  href: "https://www.cefetmg.br/",
};

const coexecutors = [
  {
    name: "UEMG",
    role: "Instituição coexecutora",
    description:
      "A UEMG, por meio do Kaiporá – Laboratório de Estudos Bioculturais, atua na interlocução com povos indígenas, comunidades tradicionais e mestres de saberes na interface com Agroecologia, Território e Saúde.",
    image: "/logos/divididos/UEMG_transparente.png",
    href: "https://www.uemg.br/",
  },
  {
    name: "Fiocruz Minas – Instituto René Rachou",
    role: "Instituição coexecutora",
    description:
      "A Fiocruz Minas contribui para o diálogo entre ambiente, saúde e território, fomentando pesquisa, ensino e extensão junto a comunidades quilombolas, indígenas e periferias urbanas.",
    image: "/logos/Logo_Fiocruz.png",
    href: "https://minas.fiocruz.br/",
  },
];

export default function QuemSomosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-20 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">Quem somos?</p>
        <h1 className="font-display text-4xl font-bold text-text md:text-5xl">{siteName}</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Um núcleo construído a partir de territórios quilombolas, indígenas e periferias urbanas,
          em uma conexão promovida pela Agroecologia.
        </p>
      </FadeIn>

      <section className="mb-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-border/50 bg-white p-8 shadow-md lg:p-10">
              <div className="mb-7 flex items-center gap-3">
                <Sprout className="h-7 w-7 text-green" />
                <h2 className="font-display text-2xl font-bold text-text">O que é o núcleo?</h2>
              </div>
              <p className="text-lg leading-8 text-text">
                O Núcleo de Estudos em Agroecologia – NEA Mutiró parte de territórios quilombolas,
                indígenas e periferias urbanas, em uma conexão promovida pela Agroecologia, uma
                confluência construída a partir do trabalho, dos múltiplos saberes e da produção e
                comercialização desenvolvidas pelos diferentes públicos beneficiados pela proposta.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border-2 border-border/50 bg-cream-dark p-8 shadow-md lg:p-10">
              <div className="mb-7 flex items-center gap-3">
                <Landmark className="h-7 w-7 text-brown" />
                <h2 className="font-display text-2xl font-bold text-text">Objetivo</h2>
              </div>
              <p className="text-lg leading-8 text-text">
                Articular ensino, pesquisa e extensão para realizar práticas agroecológicas que
                integrem campo e cidade por meio de trocas de saberes, produção científica,
                tecnológica e de inovação, além da criação e do fortalecimento de tecnologias
                sociais voltadas à soberania alimentar e à justiça ambiental.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mb-20">
        <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">Governança</p>
          <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
            Instituição executora e coexecutoras
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            A execução e a coexecução ficam apresentadas separadamente para deixar claros os papéis institucionais.
          </p>
        </FadeIn>

        <FadeIn>
          <article className="rounded-3xl border-2 border-border/50 bg-white p-8 shadow-lg lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr]">
              <a href={executiveInstitution.href} target="_blank" rel="noreferrer" className="rounded-2xl bg-cream-dark p-6">
                <Image src={executiveInstitution.image} alt={executiveInstitution.name} width={192} height={96} className="h-auto w-full object-contain" />
              </a>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Building2 className="h-5 w-5 text-brown" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-brown">{executiveInstitution.role}</p>
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold text-text">{executiveInstitution.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-text-muted">{executiveInstitution.description}</p>
              </div>
            </div>
          </article>
        </FadeIn>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {coexecutors.map((institution, index) => (
            <FadeIn key={institution.name} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-border/50 bg-cream-dark p-8 shadow-md">
                <div className="flex min-h-20 items-center justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-green">{institution.role}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-text">{institution.name}</h3>
                  </div>
                  <a href={institution.href} target="_blank" rel="noreferrer" aria-label={`Site de ${institution.name}`}>
                    <Image src={institution.image} alt={institution.name} width={150} height={90} className="max-h-20 w-auto max-w-[150px] object-contain" />
                  </a>
                </div>
                <p className="mt-8 flex-1 text-lg leading-relaxed text-text-muted">{institution.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">Rede de apoio</p>
          <h2 className="font-display text-3xl font-bold text-text md:text-4xl">Colaboradores</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            PET conecTTE, Kaiporá e SoFiA são apresentados como colaboradores do núcleo.
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {collaboratorLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-48 flex-col justify-between rounded-2xl border border-border/50 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div>
                {link.logo ? (
                  <Image src={link.logo} alt={link.label} width={150} height={52} className="mb-5 h-12 w-auto object-contain" />
                ) : (
                  <Handshake className="mb-5 h-10 w-10 text-green" />
                )}
                <h3 className="font-display text-xl font-bold text-text">{link.label}</h3>
                <p className="mt-2 text-sm text-text-muted">{link.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brown">
                Acessar site
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          ))}
        </StaggerContainer>
      </section>

      <FadeIn>
        <section className="rounded-3xl border-2 border-blue-200 bg-blue-50/70 p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-5">
            <Image src="/logos/divididos/CNPq_transparente.png" alt="CNPq" width={180} height={72} className="h-14 w-auto object-contain" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-800">Financiamento</p>
              <h2 className="font-display text-3xl font-bold text-text">Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq</h2>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
