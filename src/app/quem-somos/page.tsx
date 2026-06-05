import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

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
    image: "/images/cefet-mg.jpg",
    variant: "large" as const,
  },
  {
    name: "UEMG",
    role: "Co-execução",
    roleIcon: Users,
    description:
      "A UEMG, a partir do Laboratório de Estudos Bioculturais (Kaipora), atua na interlocução com os povos indígenas, comunidades tradicionais, mestres/as de saberes na interface com a Agroecologia, Território e Saúde.",
    image: "/images/milho-ancestral.jpg",
    variant: "medium" as const,
  },
  {
    name: "FIOCRUZ Minas",
    role: "Co-execução",
    roleIcon: Users,
    description:
      "A FIOCRUZ Minas contribui com a integração de políticas e práticas que unem a preservação do meio ambiente e a saúde. Atua no diálogo e mediação entre quilombos, territórios indígenas, periferias urbanas e gestores de saúde, bem como fomenta pesquisa, extensão e ensino.",
    image: "/images/flores-amarelas.jpg",
    variant: "wide" as const,
  },
];

export default function QuemSomosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <FadeIn className="mx-auto mb-20 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brown">
          Instituições
        </p>
        <h1 className="font-display text-4xl font-bold text-text md:text-5xl">Quem Somos</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          O Núcleo de Estudos em Agroecologia e Bem-Viver (NEA-Mutiró) é construído a
          partir da força conjunta de instituições de ensino e pesquisa, cada uma
          aportando saberes fundamentais para o fortalecimento dos territórios e práticas
          agroecológicas.
        </p>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7">
          <article className="rounded-xl border border-border/50 bg-white p-8 shadow-lg lg:p-12">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="shrink-0 space-y-4 md:w-48">
                <div className="overflow-hidden rounded-lg border border-border/30 bg-cream-dark p-4">
                  <Image
                    src={institutions[0].image}
                    alt="CEFET-MG"
                    width={200}
                    height={200}
                    className="h-auto w-full rounded-md object-cover mix-blend-multiply"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brown">
                  <Building2 className="h-4 w-4" />
                  Execução
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-text">CEFET-MG</h2>
                <p className="mt-4 leading-relaxed text-text-muted">{institutions[0].description}</p>
              </div>
            </div>
          </article>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-5">
          <article className="relative h-full overflow-hidden rounded-xl border border-border/30 bg-cream-dark p-8 shadow-lg lg:p-12">
            <div className="mb-6 flex items-start justify-between">
              <h2 className="font-display text-3xl font-bold text-text">UEMG</h2>
              <span className="rounded-full border border-green/20 bg-green-light/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                Co-execução
              </span>
            </div>
            <p className="leading-relaxed text-text-muted">{institutions[1].description}</p>
            <div className="absolute -bottom-4 -right-4 rotate-6 overflow-hidden rounded-lg border-4 border-white shadow-md">
              <Image
                src={institutions[1].image}
                alt="Milho ancestral"
                width={128}
                height={128}
                className="h-32 w-32 object-cover"
              />
            </div>
          </article>
        </FadeIn>

        <FadeIn delay={0.25} className="lg:col-span-12">
          <article className="overflow-hidden rounded-xl border border-border/50 bg-white p-8 shadow-lg lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-3xl font-bold text-text">FIOCRUZ Minas</h2>
                  <span className="rounded-full border border-green/20 bg-green-light/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                    Co-execução
                  </span>
                </div>
                <p className="leading-relaxed text-text-muted">{institutions[2].description}</p>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 rounded-full bg-brown/5 blur-3xl" />
                <Image
                  src={institutions[2].image}
                  alt="Flores e folhas amarelas"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-cream object-cover shadow-xl"
                />
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </div>
  );
}
