import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTerritory, territories } from "@/data/territories";
import { TerritoryDetailView } from "@/components/territories/TerritoryDetailView";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return territories.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const territory = getTerritory(slug);
  if (!territory) return { title: "Território" };
  return { title: territory.title };
}

export default async function TerritorioDetailPage({ params }: Props) {
  const { slug } = await params;
  const territory = getTerritory(slug);

  if (!territory) {
    notFound();
  }

  return <TerritoryDetailView territory={territory} />;
}
