export const navItems = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/territorios", label: "Territórios focais" },
  { href: "/projetos", label: "Ações" },
  { href: "/links-uteis", label: "Links úteis" },
  { href: "/contato", label: "Fale conosco" },
] as const;

export type NavItem = (typeof navItems)[number];
