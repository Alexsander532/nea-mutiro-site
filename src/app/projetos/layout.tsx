import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ensino, Pesquisa e Extensão",
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
