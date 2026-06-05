export type ProjectTag = {
  label: string;
  variant: "brown" | "green";
};

export type ProjectStep = {
  title: string;
  description: string;
};

export type ProjectStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type ProjectDetail = {
  publishedAt: string;
  territory: string;
  tags: ProjectTag[];
  heroImage: string;
  intro: string[];
  introSecondary: string[];
  steps: ProjectStep[];
  benefits: string[];
  stats: ProjectStat[];
  statsDescription: string;
  gallery: { src: string; alt: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  image?: string;
  imagePlaceholder?: boolean;
  imagePosition: "left" | "right";
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    slug: "hortas-comunitarias",
    title: "Hortas Comunitárias Urbanas",
    category: "EXTENSÃO",
    categoryColor: "text-brown",
    description:
      "Implementação de espaços produtivos em periferias urbanas para promover a segurança alimentar.",
    image: "/images/trabalho-terra.jpg",
    imagePosition: "left",
    detail: {
      publishedAt: "12 de Setembro de 2024",
      territory: "Aglomerado Cabana do Pai Tomás",
      tags: [
        { label: "Extensão", variant: "brown" },
        { label: "Comunidade", variant: "green" },
      ],
      heroImage: "/images/trabalho-terra.jpg",
      intro: [
        "O projeto de Hortas Comunitárias Urbanas nasce da urgência de garantir alimento saudável e acessível nas periferias de Belo Horizonte, onde o acesso a hortaliças frescas é limitado e caro.",
        "Através de mutirões semanais, oficinas de compostagem e feiras de troca, fortalecemos a autonomia alimentar de dezenas de famílias no Aglomerado Cabana do Pai Tomás.",
      ],
      introSecondary: [
        "Cada horta é co-gestionada pelas famílias participantes, que definem coletivamente o que plantar, como dividir a colheita e como reinvestir os recursos gerados nas próprias comunidades.",
      ],
      steps: [
        {
          title: "Diagnóstico Participativo",
          description:
            "Levantamento conjunto de terrenos disponíveis, interesse das famílias e recursos hídricos existentes no território.",
        },
        {
          title: "Implantação das Hortas",
          description:
            "Mutirões de preparo do solo, construção de canteiros elevados e instalação de sistemas simples de irrigação.",
        },
        {
          title: "Formação Continuada",
          description:
            "Oficinas mensais sobre compostagem, controle natural de pragas e conservação de alimentos.",
        },
      ],
      benefits: [
        "Acesso regular a hortaliças frescas e orgânicas para famílias de baixa renda.",
        "Fortalecimento dos laços comunitários através do trabalho coletivo.",
        "Redução do descarte de resíduos orgânicos com a compostagem doméstica.",
      ],
      statsDescription: "Resultados do primeiro ano de extensão no território.",
      stats: [
        { value: 8, label: "HORTAS IMPLANTADAS" },
        { value: 120, suffix: "+", label: "FAMÍLIAS BENEFICIADAS" },
      ],
      gallery: [
        { src: "/images/trabalho-terra.jpg", alt: "Trabalho na horta comunitária" },
        { src: "/images/vista-urbana.jpg", alt: "Vista do aglomerado" },
        { src: "/images/formacao.jpg", alt: "Formação em agroecologia" },
      ],
    },
  },
  {
    slug: "manejo-de-raizes",
    title: "Manejo de Raízes Nativas",
    category: "PESQUISA",
    categoryColor: "text-brown-dark",
    description:
      "Estudo e aprimoramento de técnicas sustentáveis para o cultivo de raízes nativas.",
    image: "/images/colheita.jpg",
    imagePosition: "right",
    detail: {
      publishedAt: "24 de Outubro de 2024",
      territory: "Território Quilombola do Vale Central",
      tags: [
        { label: "Pesquisa", variant: "brown" },
        { label: "Comunidade", variant: "green" },
      ],
      heroImage: "/images/raizes-colheita.jpg",
      intro: [
        "A pesquisa sobre o Manejo de Raízes Nativas surge da necessidade de documentar e fortalecer as práticas ancestrais de cultivo que sustentam as comunidades tradicionais há gerações. Este projeto une o rigor acadêmico da etnobiologia com o conhecimento empírico dos agricultores locais, buscando compreender a dinâmica de crescimento, colheita e regeneração de espécies tuberosas fundamentais para a segurança alimentar.",
      ],
      introSecondary: [
        "Ao longo de dois anos de imersão no território, nossa equipe multidisciplinar acompanhou os ciclos lunares e as estações das águas, registrando metodologias que preservam a umidade do solo e garantem a perpetuação das matrizes. O foco não é apenas a extração, mas a relação de reciprocidade com o ambiente.",
      ],
      steps: [
        {
          title: "Mapeamento Participativo",
          description:
            "Identificação conjunta das áreas de ocorrência natural e roçados tradicionais, guiada pelos anciãos da comunidade.",
        },
        {
          title: "Monitoramento de Matrizes",
          description:
            "Acompanhamento fenológico das plantas selecionadas, registrando períodos de dormência, brotação e maturidade ideal para colheita sustentável.",
        },
        {
          title: "Oficinas de Troca de Saberes",
          description:
            "Encontros mensais onde estudantes universitários e agricultores compartilham técnicas de conservação de sementes e manejo do solo.",
        },
      ],
      benefits: [
        "Segurança alimentar reforçada com base em espécies adaptadas ao bioma local.",
        "Preservação da biodiversidade genética através do cultivo on-farm.",
        "Fortalecimento da identidade cultural e valorização dos detentores de saberes tradicionais.",
      ],
      statsDescription: "Resultados quantitativos do primeiro ciclo de pesquisa-ação.",
      stats: [
        { value: 15, suffix: "+", label: "ESPÉCIES CATALOGADAS" },
        { value: 40, label: "FAMÍLIAS ENVOLVIDAS" },
      ],
      gallery: [
        { src: "/images/grupo-plantacao.jpg", alt: "Grupo na plantação" },
        { src: "/images/sementes-raizes.jpg", alt: "Sementes e raízes" },
        { src: "/images/paisagem-territorio.jpg", alt: "Paisagem do território" },
      ],
    },
  },
  {
    slug: "troca-de-saberes",
    title: "Troca de Saberes",
    category: "COMUNIDADE",
    categoryColor: "text-green",
    description:
      "Rodas de conversa e oficinas integrando conhecimento tradicional e acadêmico.",
    imagePlaceholder: true,
    imagePosition: "left",
    detail: {
      publishedAt: "5 de Novembro de 2024",
      territory: "Múltiplos territórios parceiros",
      tags: [
        { label: "Comunidade", variant: "green" },
        { label: "Extensão", variant: "brown" },
      ],
      heroImage: "/images/formacao.jpg",
      intro: [
        "A Troca de Saberes é um eixo transversal do NEA-Mutiró que promove encontros regulares entre comunidades tradicionais, agricultores familiares, estudantes e pesquisadores.",
        "Em rodas de conversa, oficinas práticas e visitas de intercâmbio, valorizamos o conhecimento empírico e a ciência acadêmica como fontes complementares de aprendizado.",
      ],
      introSecondary: [
        "Cada encontro é co-construído com as lideranças locais, respeitando os tempos, protocolos e formas de fala de cada comunidade participante.",
      ],
      steps: [
        {
          title: "Rodas de Conversa",
          description:
            "Espaços abertos para compartilhar experiências, desafios e conquistas relacionados à agroecologia e ao bem-viver.",
        },
        {
          title: "Oficinas Práticas",
          description:
            "Atividades hands-on sobre preparo de biofertilizantes, manejo de sementes crioulas e técnicas de conservação.",
        },
        {
          title: "Intercâmbios Territoriais",
          description:
            "Visitas recíprocas entre comunidades para conhecer diferentes realidades e fortalecer redes de apoio mútuo.",
        },
      ],
      benefits: [
        "Valorização do conhecimento tradicional junto à comunidade acadêmica.",
        "Fortalecimento de redes de solidariedade entre territórios distintos.",
        "Formação de jovens multiplicadores agroecológicos.",
      ],
      statsDescription: "Impacto acumulado nos últimos dois anos de atividades.",
      stats: [
        { value: 24, label: "OFICINAS REALIZADAS" },
        { value: 350, suffix: "+", label: "PARTICIPANTES" },
      ],
      gallery: [
        { src: "/images/formacao.jpg", alt: "Formação comunitária" },
        { src: "/images/milho-ancestral.jpg", alt: "Milho ancestral" },
        { src: "/images/flores-amarelas.jpg", alt: "Biodiversidade local" },
      ],
    },
  },
  {
    slug: "formacao-agroecologia",
    title: "Formação em Agroecologia",
    category: "ENSINO",
    categoryColor: "text-accent",
    description:
      "Cursos de capacitação para jovens agricultores focados em tecnologias sociais sustentáveis.",
    image: "/images/formacao.jpg",
    imagePosition: "right",
    detail: {
      publishedAt: "18 de Agosto de 2024",
      territory: "CEFET-MG e territórios parceiros",
      tags: [
        { label: "Ensino", variant: "brown" },
        { label: "Comunidade", variant: "green" },
      ],
      heroImage: "/images/formacao.jpg",
      intro: [
        "O curso de Formação em Agroecologia capacita jovens agricultores e estudantes em tecnologias sociais sustentáveis, integrando teoria e prática em campo nos territórios parceiros do NEA-Mutiró.",
        "Com carga horária de 120 horas, o programa aborda desde os fundamentos ecológicos da agroecologia até a gestão de projetos comunitários e políticas públicas de segurança alimentar.",
      ],
      introSecondary: [
        "Os participantes desenvolvem projetos finais aplicados em suas comunidades, recebendo mentoria de extensionistas e lideranças locais ao longo de seis meses de acompanhamento.",
      ],
      steps: [
        {
          title: "Fundamentos da Agroecologia",
          description:
            "Módulo introdutório sobre ecologia, solo vivo, ciclos de nutrientes e biodiversidade agrícola.",
        },
        {
          title: "Práticas de Campo",
          description:
            "Imersões semanais em hortas, roças e florestas agroflorestais dos territórios parceiros.",
        },
        {
          title: "Projeto Final Aplicado",
          description:
            "Desenvolvimento e implementação de um mini-projeto agroecológico na comunidade de origem do participante.",
        },
      ],
      benefits: [
        "Formação qualificada de jovens multiplicadores agroecológicos.",
        "Integração entre ensino universitário e realidade dos territórios rurais e urbanos.",
        "Produção de materiais didáticos acessíveis e contextualizados.",
      ],
      statsDescription: "Resultados das três primeiras turmas do curso.",
      stats: [
        { value: 3, label: "TURMAS FORMADAS" },
        { value: 72, label: "JOVENS CAPACITADOS" },
      ],
      gallery: [
        { src: "/images/formacao.jpg", alt: "Aula de formação" },
        { src: "/images/trabalho-terra.jpg", alt: "Prática em campo" },
        { src: "/images/colheita.jpg", alt: "Colheita agroecológica" },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
