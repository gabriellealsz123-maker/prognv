import { Link } from "@tanstack/react-router";

export function LegalLinks({ onNavigate }: { onNavigate?: () => void }) {
  return <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
    <Link to="/politica-de-privacidade" onClick={onNavigate} className="text-muted-foreground hover:text-primary">Política de Privacidade</Link>
    <Link to="/termos-de-uso" onClick={onNavigate} className="text-muted-foreground hover:text-primary">Termos de Uso</Link>
    <Link to="/preferencias-de-cookies" onClick={onNavigate} className="text-muted-foreground hover:text-primary">Preferências de Cookies</Link>
  </div>;
}