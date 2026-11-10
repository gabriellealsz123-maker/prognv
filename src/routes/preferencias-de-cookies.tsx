import { createFileRoute } from "@tanstack/react-router";
import { CookiePreferences } from "@/components/privacy/cookie-preferences";
import { LegalPage, legalHead } from "@/components/privacy/legal-page";

export const Route = createFileRoute("/preferencias-de-cookies")({
  head: () => legalHead("Preferências de Cookies", "Consulte e altere sua escolha de medição opcional no site da Pro GNV."),
  component: PreferencesPage,
});

function PreferencesPage() {
  return <LegalPage title="Preferências de Cookies">
    <p className="text-muted-foreground">Você pode alterar sua escolha a qualquer momento, neste navegador. Nenhuma opção de medição é pré-selecionada sem uma aceitação válida.</p>
    <CookiePreferences />
  </LegalPage>;
}