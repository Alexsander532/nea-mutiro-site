export type TerritoryChip = {
  label: string;
  variant: "green" | "pink" | "neutral";
};

export type TerritoryDetail = {
  subtitle: string;
  heroImage: string;
  chips: TerritoryChip[];
  intro: string[];
  sectionTitle: string;
  sectionBody: string[];
  quote?: { text: string; author: string };
  figure?: { src: string; caption: string };
  info: { label: string; value: string }[];
  related: { slug?: string; title: string; description: string }[];
};

export type Territory = {
  slug: string;
  title: string;
  location: string;
  tag: string;
  tagColor: "green" | "brown" | "orange";
  description: string;
  image: string;
  imagePosition?: "left" | "right";
  detail: TerritoryDetail;
};

export const territories: Territory[] = [
  {
    slug: "cabana-pai-tomas",
    title: "Aglomerado Cabana do Pai Tomás",
    location: "Belo Horizonte (MG)",
    tag: "Extensão",
    tagColor: "green",
    description:
      "A maior favela de Belo Horizonte, símbolo de resistência e luta por direitos, com iniciativas agroecológicas fortalecidas em parceria com a ASMAC.",
    image: "/images/vista-urbana.jpg",
    imagePosition: "left",
    detail: {
      subtitle:
        "Considerada a maior favela (termo retomado pelo IBGE) de Belo Horizonte e a segunda maior de Minas Gerais, a Cabana do Pai Tomás é um símbolo de resistência e organização comunitária.",
      heroImage: "/images/vista-urbana.jpg",
      chips: [
        { label: "Periferia Urbana", variant: "green" },
        { label: "Aglomerado", variant: "pink" },
      ],
      intro: [
        "Considerada a maior favela (termo retomado pelo IBGE) de Belo Horizonte e a segunda maior de Minas Gerais, a Cabana do Pai Tomás foi ocupada em 1963 e, desde então, enfrenta processos de coerção e tentativas de expulsão de seus moradores por agentes militares, empresariais e governamentais.",
        "Por sua trajetória de organização comunitária e luta por direitos, tornou-se um importante símbolo de resistência no contexto urbano da capital mineira.",
      ],
      sectionTitle: "Agroecologia e Organização Comunitária",
      sectionBody: [
        "O território se destaca pela presença de iniciativas agroecológicas já existentes, que vêm sendo fortalecidas por meio de ações desenvolvidas em parceria com a Associação dos Moradores do Aglomerado Cabana (ASMAC), promovendo a ampliação de espaços agroecológicos e a troca de saberes entre a comunidade, instituições parceiras e territórios.",
      ],
      info: [
        { label: "Localização", value: "Belo Horizonte (MG)" },
        { label: "Perfil", value: "Periferia Urbana / Aglomerado" },
        { label: "Foco de Pesquisa", value: "Agroecologia Urbana, Segurança Alimentar, Organização Comunitária" },
      ],
      related: [
        {
          slug: "corrego-do-narciso",
          title: "Quilombo Córrego do Narciso",
          description: "Práticas agroecológicas, saberes tradicionais e luta por direitos em Araçuaí.",
        },
        {
          slug: "kamaka-mongoio",
          title: "Aldeia Indígena Kamakã Mongoió",
          description: "Território de retomada em Brumadinho com saberes agroecológicos vivos.",
        },
      ],
    },
  },
  {
    slug: "kamaka-mongoio",
    title: "Aldeia Indígena Kamakã Mongoió",
    location: "Brumadinho (MG)",
    tag: "Pesquisa",
    tagColor: "brown",
    description:
      "Aldeia indígena em território de retomada que resiste e mantém vivos seus conhecimentos agroecológicos e saberes tradicionais.",
    image: "/images/aldeia.jpg",
    imagePosition: "right",
    detail: {
      subtitle:
        "Localizada no Vale do Córrego Areias, em Brumadinho, a Aldeia Indígena Kamakã Mongoió está situada em um território de retomada.",
      heroImage: "/images/aldeia.jpg",
      chips: [
        { label: "Comunidade Indígena", variant: "green" },
        { label: "Território de Retomada", variant: "pink" },
      ],
      intro: [
        "Localizada no Vale do Córrego Areias, no município de Brumadinho, a Aldeia Indígena Kamakã Mongoió está situada em um território de retomada. Nela vive um povo originário do sul da Bahia, do norte de Minas Gerais e de outras regiões do Sudeste.",
        "Esse povo foi marcado por perseguições, dispersão forçada e tentativas de extermínio físico e cultural, além de ter sido profundamente impactado pela violência colonial. Ainda assim, resiste e mantém vivos seus conhecimentos agroecológicos e a riqueza de seus saberes tradicionais.",
      ],
      sectionTitle: "Intercâmbios, Hortas e Agroflorestamento",
      sectionBody: [
        "Por meio dessa parceria, o NEA promove experiências de intercâmbio entre comunidades, oferecendo debates, oficinas e trocas de saberes, além da construção de novas hortas comunitárias e iniciativas de agroflorestamento.",
      ],
      info: [
        { label: "Localização", value: "Brumadinho, Vale do Córrego Areias (MG)" },
        { label: "Perfil", value: "Comunidade Indígena / Território de Retomada" },
        { label: "Foco de Pesquisa", value: "Intercâmbio de Saberes, Hortas Comunitárias, Agroflorestamento" },
      ],
      related: [
        {
          slug: "cabana-pai-tomas",
          title: "Aglomerado Cabana do Pai Tomás",
          description: "Agroecologia urbana e organização comunitária nas periferias de Belo Horizonte.",
        },
        {
          slug: "corrego-do-narciso",
          title: "Quilombo Córrego do Narciso",
          description: "Práticas agroecológicas, saberes tradicionais e luta por direitos em Araçuaí.",
        },
      ],
    },
  },
  {
    slug: "corrego-do-narciso",
    title: "Quilombo Córrego do Narciso",
    location: "Araçuaí (MG)",
    tag: "Ensino",
    tagColor: "orange",
    description:
      "Quilombo com ocupação que remonta ao século XVIII, marcado pela forte presença de práticas agroecológicas, culturais e pela participação feminina.",
    image: "/images/quilombo.jpg",
    imagePosition: "left",
    detail: {
      subtitle:
        "Localizado no município de Araçuaí, o Quilombo Córrego do Narciso remonta sua ocupação ao século XVIII e carrega forte presença de práticas agroecológicas e culturais.",
      heroImage: "/images/paisagem-aracuai.jpg",
      chips: [
        { label: "Comunidade Quilombola", variant: "green" },
        { label: "Saberes Tradicionais", variant: "pink" },
      ],
      intro: [
        "Localizado no município de Araçuaí, o Quilombo Córrego do Narciso remonta sua ocupação ao século XVIII e é marcado pelas tentativas de apagamento de sua identidade quilombola e de sua importância para a região, além do descaso em aspectos como saúde, transporte e acesso à água potável.",
      ],
      sectionTitle: "Agroecologia, Cultura e Participação Feminina",
      sectionBody: [
        "É um território com forte presença de práticas agroecológicas e culturais, que traz ao NEA a expressiva participação feminina em suas lutas, bem como a promoção de encontros e debates sobre saberes tradicionais, geração de renda, agroecologia, crise ambiental e educação popular.",
      ],
      info: [
        { label: "Localização", value: "Araçuaí (MG)" },
        { label: "Perfil", value: "Comunidade Quilombola" },
        { label: "Foco de Pesquisa", value: "Saberes Tradicionais, Agroecologia, Geração de Renda, Educação Popular" },
      ],
      related: [
        {
          slug: "cabana-pai-tomas",
          title: "Aglomerado Cabana do Pai Tomás",
          description: "Agroecologia urbana e organização comunitária nas periferias de Belo Horizonte.",
        },
        {
          slug: "kamaka-mongoio",
          title: "Aldeia Indígena Kamakã Mongoió",
          description: "Território de retomada em Brumadinho com saberes agroecológicos vivos.",
        },
      ],
    },
  },
];

export function getTerritory(slug: string) {
  return territories.find((t) => t.slug === slug);
}