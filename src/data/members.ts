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
    name: "PET conecTTE",
    institution: "CEFET-MG",
    role: "Equipe colaboradora",
    href: "https://www.petconectte.cefetmg.br/",
  },
  {
    name: "Kaiporá",
    institution: "UEMG",
    role: "Equipe colaboradora",
    href: "https://revista.uemg.br/index.php/sulear/article/view/6156",
  },
  {
    name: "SoFiA",
    institution: "CEFET-MG",
    role: "Equipe colaboradora",
    href: "https://www.sofia.cefetmg.br/",
  },
];
