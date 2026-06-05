import Link from "next/link";
import { Leaf, Mail, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto rounded-t-3xl border-t-2 border-border bg-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-8">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <Leaf className="h-6 w-6 text-green" />
            <span className="font-display text-2xl font-bold text-green">NEA-Mutiró</span>
          </Link>
          <div className="space-y-4 text-base text-text">
            <p>© 2024 NEA-Mutiró. Núcleo de Estudos em Agroecologia e Bem-Viver.</p>
            <p>Parcerias: CEFET-MG, UEMG, FIOCRUZ.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Links Úteis</h4>
          {["Políticas de Privacidade", "Acessibilidade", "Documentos Importantes"].map(
            (link) => (
              <Link
                key={link}
                href="#"
                className="block text-base text-text hover:text-brown transition-colors"
              >
                {link}
              </Link>
            )
          )}
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-text">Fale Conosco</h4>
          <a
            href="mailto:contato@neamutiro.org.br"
            className="flex items-center gap-3 text-base text-text hover:text-brown transition-colors"
          >
            <Mail className="h-5 w-5 shrink-0" />
            contato@neamutiro.org.br
          </a>
          <a
            href="#"
            className="inline-flex rounded-full bg-cream-dark p-2 text-text hover:bg-green-light/40 transition-colors"
            aria-label="Redes sociais"
          >
            <Share2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
