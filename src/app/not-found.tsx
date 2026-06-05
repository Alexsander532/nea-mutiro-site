import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="font-display text-5xl font-bold text-brown">404</h1>
      <p className="mt-4 text-lg text-text-muted">Página não encontrada.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brown px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
