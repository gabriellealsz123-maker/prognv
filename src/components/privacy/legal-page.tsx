import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LegalLinks } from "./legal-links";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border"><div className="mx-auto max-w-4xl px-5 py-5 flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="text-2xl font-black">PRO <span className="text-primary">GNV</span></Link>
      <nav aria-label="Informações legais"><LegalLinks /></nav>
    </div></header>
    <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <Button asChild variant="ghost" className="mb-6"><Link to="/"><ArrowLeft /> Voltar ao site</Link></Button>
      <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 shrink-0 text-primary" /><h1 className="text-3xl font-black sm:text-4xl break-words">{title}</h1></div>
      <div className="legal-content mt-8 space-y-8 leading-relaxed">{children}</div>
    </main>
    <footer className="border-t border-border"><div className="mx-auto max-w-4xl px-5 py-7"><LegalLinks /><p className="mt-4 text-sm text-muted-foreground">Pro GNV · Campo Largo / PR</p></div></footer>
  </div>;
}

export function PendingInformation({ children }: { children: ReactNode }) {
  return <section className="border-l-4 border-primary bg-muted p-5" aria-label="Informações pendentes">
    <h2 className="text-lg font-bold">Informações a completar antes da publicação</h2>
    <p className="mt-2 text-sm text-muted-foreground">Documento em revisão. O responsável pela Pro GNV precisa confirmar os itens abaixo; nenhum dado ausente foi presumido.</p>
    <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">{children}</ul>
  </section>;
}

export function legalHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | Pro GNV` }, { name: "description", content: description },
    { property: "og:title", content: `${title} | Pro GNV` }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] };
}