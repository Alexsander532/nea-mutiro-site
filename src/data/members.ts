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
    name: "Alexsander Augusto Lima",
    institution: "CEFET-MG",
    role: "Equipe colaboradora",
  },
  {
    name: "Isadora",
    institution: "CEFET-MG",
    role: "Equipe colaboradora",
  },
];
