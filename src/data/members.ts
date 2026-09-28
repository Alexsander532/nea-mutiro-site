export type Member = {
  name: string;
  institution: string;
  role?: string;
  href?: string;
  territory?: string;
  image?: string;
};

export const members: Member[] = [
  {
    name: "Bráulio Silva Chaves",
    institution: "CEFET-MG",
    role: "Coordenação",
  },
];

export const collaboratorMembers: Member[] = [
  {
    name: "Walter José Rodrigues Matrangolo",
    institution: "Embrapa Milho e Sorgo",
    role: "Colaborador",
  },
  {
    name: "Gustavo Silva Noronha",
    institution: "CEFET-MG",
    role: "Colaborador",
  },
  {
    name: "Marilda Quintino Magalhães",
    institution: "CEFET-MG",
    role: "Colaboradora",
  },
  {
    name: "Hérsia de Andrade e Santos",
    institution: "CEFET-MG",
    role: "Colaboradora",
  },
  {
    name: "Marina Neiva Alvim",
    institution: "CEFET-MG",
    role: "Colaboradora",
  },
  {
    name: "Denise Nacif Pimenta",
    institution: "Fundação Oswaldo Cruz",
    role: "Colaboradora",
  },
  {
    name: "Flora Rodrigues Gonçalves",
    institution: "Universidade Federal de Minas Gerais",
    role: "Colaboradora",
  },
  {
    name: "Celina Maria Modena",
    institution: "Fundação Oswaldo Cruz",
    role: "Colaboradora",
  },
  {
    name: "Géssica de Souza Ezúbio",
    institution: "CEFET-MG",
    role: "Colaboradora",
  },
];
