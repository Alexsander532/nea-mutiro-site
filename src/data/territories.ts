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
  quote: { text: string; author: string };
  figure: { src: string; caption: string };
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
      "Agricultura urbana, segurança alimentar e organização comunitária nas periferias.",
    image: "/images/vista-urbana.jpg",
    imagePosition: "left",
    detail: {
      subtitle:
        "Na periferia de Belo Horizonte, hortas comunitárias e mutirões de plantio transformam espaços urbanos em territórios de resistência alimentar e cuidado coletivo.",
      heroImage: "/images/vista-urbana.jpg",
      chips: [
        { label: "Comunidade Tradicional", variant: "green" },
        { label: "Extensão Urbana", variant: "pink" },
      ],
      intro: [
        "O Aglomerado Cabana do Pai Tomás é um dos maiores conjuntos habitacionais de Belo Horizonte, onde famílias construíram, ao longo de décadas, redes de solidariedade e práticas de agricultura urbana que garantem alimento saudável à mesa.",
        "No NEA-Mutiró, acompanhamos a organização comunitária em torno de hortas coletivas, feiras de troca e oficinas de compostagem, articulando saberes acadêmicos com a experiência vivida nas ruas e nos quintais do território.",
      ],
      sectionTitle: "Segurança Alimentar e Organização",
      sectionBody: [
        "As hortas comunitárias do Pai Tomás funcionam como espaços de formação, convivência e produção. Famílias cultivam hortaliças, ervas medicinais e frutas, reduzindo a dependência de alimentos industrializados e fortalecendo a autonomia alimentar.",
        "Os mutirões semanais reúnem moradores de todas as idades — crianças, jovens e idosos — em atividades que vão desde o preparo do solo até a distribuição da colheita entre as famílias participantes.",
      ],
      quote: {
        text: "Quando a gente planta junto, a fome diminui e a comunidade cresce. A horta é nosso lugar de encontro e de luta.",
        author: "Moradora e liderança comunitária, Cabana do Pai Tomás",
      },
      figure: {
        src: "/images/trabalho-terra.jpg",
        caption:
          "Figura 1: Mutirão de plantio em horta comunitária, integrando gerações e fortalecendo laços no território.",
      },
      info: [
        { label: "Localização", value: "Belo Horizonte, Região Nordeste - MG" },
        { label: "Perfil", value: "Periferia Urbana / Aglomerado Habitacional" },
        { label: "Foco de Pesquisa", value: "Agricultura Urbana, Segurança Alimentar, Organização Comunitária" },
      ],
      related: [
        {
          slug: "corrego-do-narciso",
          title: "Quilombo Córrego do Narciso",
          description: "Convivência com o semiárido, agroecologia e resistência cultural.",
        },
        {
          slug: "kamaka-mongoio",
          title: "Aldeia Indígena Kamakã Mongoió",
          description: "Resgate de práticas ancestrais e reflorestamento no território retomado.",
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
      "Resgate de práticas ancestrais e reflorestamento no território retomado.",
    image: "/images/aldeia.jpg",
    imagePosition: "right",
    detail: {
      subtitle:
        "No território retomado pelos Kamakã Mongoió, o reflorestamento com espécies nativas e o resgate de práticas ancestrais caminham lado a lado com a pesquisa científica.",
      heroImage: "/images/aldeia.jpg",
      chips: [
        { label: "Comunidade Indígena", variant: "green" },
        { label: "Pesquisa em Campo", variant: "pink" },
      ],
      intro: [
        "A Aldeia Indígena Kamakã Mongoió, localizada em Brumadinho, representa um processo de retomada territorial e reconstrução cultural após séculos de violência e deslocamento forçado.",
        "O NEA-Mutiró atua em parceria com a comunidade no resgate de saberes sobre manejo florestal, agricultura de corte e queima controlada, e identificação de plantas medicinais nativas do Cerrado.",
      ],
      sectionTitle: "Reflorestamento e Saberes Ancestrais",
      sectionBody: [
        "O projeto de reflorestamento utiliza mudas de espécies nativas selecionadas pelos próprios moradores, respeitando a composição original da mata ciliar e dos fragmentos de Cerrado remanescentes.",
        "Oficinas de troca de saberes reúnem jovens indígenas, estudantes universitários e pesquisadores para documentar práticas tradicionais de manejo, garantindo que o conhecimento ancestral continue vivo nas novas gerações.",
      ],
      quote: {
        text: "A floresta não é passado, é futuro. Cada muda que plantamos é um passo na retomada do que nos foi tirado.",
        author: "Liderança Kamakã Mongoió",
      },
      figure: {
        src: "/images/aldeia.jpg",
        caption:
          "Figura 1: Comunidade Kamakã Mongoió em atividade de reflorestamento com espécies nativas do Cerrado.",
      },
      info: [
        { label: "Localização", value: "Brumadinho, Região Metropolitana - MG" },
        { label: "Perfil", value: "Comunidade Indígena / Território Retomado" },
        { label: "Foco de Pesquisa", value: "Reflorestamento, Etnoecologia, Manejo Florestal" },
      ],
      related: [
        {
          slug: "corrego-do-narciso",
          title: "Quilombo Córrego do Narciso",
          description: "Convivência com o semiárido, agroecologia e resistência cultural.",
        },
        {
          slug: "cabana-pai-tomas",
          title: "Aglomerado Cabana do Pai Tomás",
          description: "Agricultura urbana e organização comunitária nas periferias.",
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
      "Convivência com o semiárido, agroecologia e resistência cultural.",
    image: "/images/quilombo.jpg",
    imagePosition: "left",
    detail: {
      subtitle:
        "Uma história viva de resistência no Vale do Jequitinhonha, onde o conhecimento ancestral guia o cuidado diário com a terra e a preservação das sementes nativas.",
      heroImage: "/images/paisagem-aracuai.jpg",
      chips: [
        { label: "Comunidade Tradicional", variant: "green" },
        { label: "Pesquisa em Campo", variant: "pink" },
      ],
      intro: [
        "Localizada no município de Araçuaí, Minas Gerais, a comunidade quilombola Córrego do Narciso representa um marco histórico de resistência cultural e preservação ambiental. Formada por famílias que guardam na memória e nas práticas diárias a herança de seus antepassados, a comunidade se destaca pelo manejo sustentável de um território marcado pelos desafios climáticos do semiárido.",
        "A relação dos moradores com o solo vai muito além da produção de alimentos. Trata-se de uma conexão espiritual e ancestral. O conhecimento sobre o ciclo das águas, os tempos de plantio e as propriedades curativas das plantas nativas é transmitido oralmente, de geração em geração, formando uma base de saberes que agora dialoga com pesquisadores e extensionistas do projeto NEA-Mutiró.",
      ],
      sectionTitle: "Agroecologia e Subsistência",
      sectionBody: [
        "As práticas agroecológicas no Córrego do Narciso são uma adaptação inteligente à Caatinga. O uso de sementes crioulas — sementes adaptadas ao longo de décadas às condições locais, sem modificações genéticas industriais — garante a segurança alimentar das famílias mesmo em períodos de seca severa.",
        "Entre as principais culturas estão o milho, o feijão andu, a mandioca e diversas hortaliças de quintal. O manejo não utiliza agrotóxicos, respeitando a biodiversidade local e promovendo a saúde tanto da comunidade quanto do ecossistema ao redor. Os quintais produtivos funcionam como verdadeiras farmácias vivas e laboratórios a céu aberto, onde a academia tem muito a aprender sobre resiliência e adaptação climática.",
      ],
      quote: {
        text: "A terra não é só chão pra pisar, é o ventre que nos alimenta e guarda a história dos nossos avós. Plantar aqui é um ato de teimosia e amor.",
        author: "Liderança local, Comunidade Córrego do Narciso",
      },
      figure: {
        src: "/images/praticas-agricolas.jpg",
        caption:
          "Figura 1: Moradores realizam o plantio consorciado respeitando o tempo de descanso do solo, uma prática milenar na região.",
      },
      info: [
        { label: "Localização", value: "Araçuaí, Vale do Jequitinhonha - MG" },
        { label: "Perfil", value: "Comunidade Quilombola Certificada" },
        { label: "Foco de Pesquisa", value: "Agroecologia, Sementes Crioulas, Manejo de Água" },
      ],
      related: [
        {
          title: "Assentamento Irmã Dorothy",
          description: "Experiências em transição agroecológica e organização…",
        },
        {
          title: "Comunidade Vazanteiros",
          description: "O ciclo das águas e a agricultura nas margens do…",
        },
        {
          title: "Aldeia Xukuru-Kariri",
          description: "Retomada territorial e reflorestamento com espécies nativas.",
        },
      ],
    },
  },
];

export function getTerritory(slug: string) {
  return territories.find((t) => t.slug === slug);
}
