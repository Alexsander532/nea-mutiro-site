import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Target, Users, Sprout, UserRound } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Quem Somos",
};

const institutions = [
  {
    name: "CEFET-MG",
    role: "Execução",
    roleIcon: Building2,
    description:
      "O CEFET-MG atua no NEA-Mutiró como instituição executora, sendo responsável pela coordenação do projeto e pela integração entre ensino, pesquisa e extensão. Contribui na formação de estudantes, no desenvolvimento de ações nos territórios e no fortalecimento das práticas agroecológicas junto às comunidades parceiras.",
    image: "/logos/divididos/CEFET-MG_transparente.png",
    variant: "large" as const,
  },
  {
    name: "UEMG",
    role: "Co-execução",
    roleIcon: Users,
    description:
      "A UEMG, a partir do Laboratório de Estudos Bioculturais (Kaipora), atua na interlocução com os povos indígenas, comunidades tradicionais, mestres/as de saberes na interface com a Agroecologia, Território e Saúde.",
    image: "/logos/divididos/UEMG_transparente.png",
    variant: "medium" as const,
  },
  {
    name: "FIOCRUZ Minas",
    role: "Co-execução",
    roleIcon: Users,
    description:
      "A FIOCRUZ Minas contribui com a integração de políticas e práticas que unem a preservação do meio ambiente e a saúde. Atua no diálogo e mediação entre quilombos, territórios indígenas, periferias urbanas e gestores de saúde, bem como fomenta pesquisa, extensão e ensino.",
    image: "/logos/Logo_Fiocruz.png",
    variant: "wide" as const,
  },
];

const partnerInstitutions = [
  "Feira Terra Viva",
  "AMAU — Articulação Metropolitana de Agricultura Urbana",
  "EPAMIG",
  "Escola Estadual Professor Nair de Oliveira Santana",
  "ASMAC — Associação dos Moradores do Aglomerado Cabana",
  "Instituto Vitória Resiste",
  "Associação dos Produtores dos Borges",
  "Comunidade Quilombola do Açude",
];

export default function QuemSomosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-20 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">
          NEA-Mutiró
        </p>
        <h1 className="font-display text-4xl font-bold text-text md:text-5xl">Quem Somos</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Um núcleo de estudos construído a partir de territórios quilombolas, indígenas e
          periferias urbanas, em conexão promovida pela Agroecologia.
        </p>
      </FadeIn>

      <section className="mb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-green" />
              <p className="text-sm font-semibold uppercase tracking-widest text-green">
                O que é o NEA-Mutiró
              </p>
            </div>
            <p className="text-lg leading-8 text-text">
              O NEA – MUTIRÓ parte de territórios quilombolas, indígenas e periferias urbanas,
              em uma conexão promovida pela Agroecologia, uma confluência construída a partir
              do trabalho, dos múltiplos saberes e da produção e comercialização desenvolvidas
              pelos diferentes públicos beneficiados pela proposta.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-brown" />
              <p className="text-sm font-semibold uppercase tracking-widest text-brown">
                Objetivo
              </p>
            </div>
            <div className="flex gap-5 rounded-2xl border-2 border-border/50 bg-white p-8 shadow-md">
              <Target className="mt-1 h-8 w-8 shrink-0 text-brown" />
              <p className="text-lg leading-8 text-text">
                Articular ensino, pesquisa e extensão para a realização de práticas
                agroecológicas que integrem o campo e a cidade por meio de trocas de saberes,
                da produção científica, tecnológica e de inovação, bem como da criação e
                fortalecimento de tecnologias sociais que visem fomentar processos produtivos
                capazes de conduzir à soberania alimentar e à justiça ambiental.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mb-20">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">
            Instituições
          </p>
          <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
            Quem constrói o NEA-Mutiró
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            O NEA-Mutiró é um projeto interinstitucional que tem o CEFET-MG como instituição
            executora, a UEMG e a Fiocruz Minas como instituições coexecutoras.
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <article className="rounded-xl border border-border/50 bg-white p-8 shadow-lg lg:p-12">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="shrink-0 space-y-5 md:w-48">
                  <Image
                    src={institutions[0].image}
                    alt="CEFET-MG"
                    width={192}
                    height={96}
                    className="h-auto w-full object-contain"
                  />
                  <div className="flex items-center gap-2 text-sm font-semibold text-brown">
                    <Building2 className="h-4 w-4" />
                    Execução
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-text">CEFET-MG</h3>
                  <p className="mt-4 leading-relaxed text-text-muted">{institutions[0].description}</p>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5">
            <article className="relative h-full overflow-hidden rounded-xl border border-border/30 bg-cream-dark p-8 shadow-lg lg:p-12">
              <div className="mb-6 flex items-start justify-between">
                <h3 className="font-display text-3xl font-bold text-text">UEMG</h3>
                <span className="rounded-full border border-green/20 bg-green-light/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                  Co-execução
                </span>
              </div>
              <p className="leading-relaxed text-text-muted">{institutions[1].description}</p>
              <div className="mt-8 flex justify-center">
                <Image
                  src={institutions[1].image}
                  alt="UEMG"
                  width={140}
                  height={140}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-12">
            <article className="overflow-hidden rounded-xl border border-border/50 bg-white p-8 shadow-lg lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-3xl font-bold text-text">FIOCRUZ Minas</h3>
                    <span className="rounded-full border border-green/20 bg-green-light/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                      Co-execução
                    </span>
                  </div>
                  <p className="leading-relaxed text-text-muted">{institutions[2].description}</p>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <Image
                    src={institutions[2].image}
                    alt="FIOCRUZ Minas"
                    width={300}
                    height={225}
                    className="w-auto max-w-[300px] object-contain"
                  />
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="mb-20">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">
            Parcerias
          </p>
          <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
            Instituições Parceiras
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            O NEA-Mutiró também conta com entidades e instituições parceiras que fortalecem as
            ações nos territórios.
          </p>
        </FadeIn>

        <FadeIn className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {partnerInstitutions.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-white px-6 py-4 shadow-sm"
            >
              <Sprout className="h-5 w-5 shrink-0 text-green" />
              <p className="font-semibold text-text">{name}</p>
            </div>
          ))}
        </FadeIn>
      </section>

      <section>
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">
            Equipe
          </p>
          <h2 className="font-display text-3xl font-bold text-text md:text-4xl">Membros</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Foto de cada membro com nome e instituição ou território envolvido abaixo.
          </p>
        </FadeIn>

        {members.length > 0 ? (
          <FadeIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-xl border border-border/50 bg-white p-8 text-center shadow-md"
              >
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-cream-dark bg-cream-dark">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound className="h-12 w-12 text-text-light" />
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-text">{member.name}</h3>
                <p className="mt-2 text-text-muted">{member.institution}</p>
                {member.territory && (
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-green">
                    {member.territory}
                  </p>
                )}
              </article>
            ))}
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="mx-auto max-w-2xl rounded-xl border-2 border-dashed border-border bg-white/60 px-8 py-16 text-center">
              <UserRound className="mx-auto mb-4 h-12 w-12 text-text-light" />
              <p className="text-lg font-semibold text-text">
                Fotos e informações dos membros serão adicionadas em breve.
              </p>
              <p className="mt-2 text-text-muted">
                Para adicionar, preencha o arquivo <code className="rounded bg-cream-dark px-1.5 py-0.5 text-sm">src/data/members.ts</code>.
              </p>
            </div>
          </FadeIn>
        )}
      </section>
    </div>
  );
}