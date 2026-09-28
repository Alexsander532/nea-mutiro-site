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

export const neaTeamMembers: Member[] = [
  { name: "Walter José Rodrigues Matrangolo", institution: "Embrapa Milho e Sorgo", role: "Colaborador" },
  { name: "Gustavo Silva Noronha", institution: "CEFET-MG", role: "Colaborador" },
  { name: "Marilda Quintino Magalhães", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Hérsilia de Andrade e Santos", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Marina Neiva Alvim", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Denise Nacif Pimenta", institution: "Fundação Oswaldo Cruz", role: "Colaboradora" },
  { name: "Flora Rodrigues Gonçalves", institution: "Universidade Federal de Minas Gerais", role: "Colaboradora" },
  { name: "Celina Maria Modena", institution: "Fundação Oswaldo Cruz", role: "Colaboradora" },
  { name: "Géssica de Souza Euzébio", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Marília Duarte de Souza", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Polyana Aparecida Valente", institution: "UEMG/Ibirité", role: "Colaboradora" },
  { name: "Tânia Maria de Almeida Alves", institution: "Fiocruz-MG", role: "Colaboradora" },
  { name: "Adrielly de Souza Ribeiro Basílio", institution: "Fiocruz-MG", role: "Colaborador" },
  { name: "Danielle Costa Silveira", institution: "Fiocruz-MG", role: "Colaboradora" },
  { name: "Mariana Oliveira e Souza", institution: "UEMG/Ibirité", role: "Colaboradora" },
  { name: "Emmanuel Duarte Almada", institution: "UEMG/Ibirité", role: "Colaborador" },
  { name: "Andréia Fonseca Silva", institution: "EPAMIG", role: "Colaboradora" },
  { name: "Cláudia Gomes França", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Ildefonso Binatti", institution: "CEFET-MG", role: "Colaborador" },
  { name: "Jeferson Figueiredo Chaves", institution: "CEFET-MG", role: "Colaborador" },
  { name: "Lucas Araújo Dutra Rodrigues", institution: "Fiocruz-MG", role: "Colaborador" },
  { name: "Lília Maria de Oliveira", institution: "CEFET-MG", role: "Colaboradora" },
  { name: "Isabella de Menezes Garrido", institution: "EE Professora de Oliveira Santana/CEFET-MG", role: "Colaboradora" },
  { name: "Cristiana Guimarães Alves", institution: "Rede de Intercâmbio de Tecnologias Alternativas", role: "Colaboradora" },
];

export const collaboratorMembers: Member[] = [
  { name: "Alexsander Augusto Lima", institution: "CEFET-MG", role: "Bolsista colaborador" },
  { name: "Isadora", institution: "CEFET-MG", role: "Bolsista colaboradora" },
];

export const territoryScholarshipMembers: Member[] = [
  { name: "Adriana Fernandes de Souza", institution: "Cabana do Pai Tomás", role: "Bolsista do território" },
  { name: "Cacica Katorã Kamakã", institution: "Território Kamakã Mongoio", role: "Bolsista do território" },
  { name: "Cleiton Mendes", institution: "Quilombo Córrego do Narciso", role: "Bolsista do território" },
];
