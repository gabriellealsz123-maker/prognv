import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { readChoice, saveChoices } from "@/lib/consent";
import { needsOptionalAnswer, onOptionalChange } from "@/lib/optional-consent";

export function CookiePreferences({ onSaved }: { onSaved?: () => void }) {
  const [enabled, setEnabled] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const sync = () => {
      setEnabled(readChoice("analytics") === "granted");
      setGpc((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true);
    };
    sync();
    return onOptionalChange(sync);
  }, []);
  function save(granted: boolean) {
    saveChoices({ analytics: granted && !gpc ? "granted" : "denied" });
    setEnabled(granted && !gpc);
    setMessage("Preferências salvas neste navegador.");
    onSaved?.();
  }
  return <div className="space-y-5">
    <div className="border-b border-border pb-4">
      <h3 className="font-bold text-foreground">Necessários · sempre ativos</h3>
      <p className="mt-2 text-sm text-muted-foreground">A hospedagem pode usar cookies de proteção contra tráfego automatizado. Sua escolha é armazenada neste navegador, sem nome ou dados de contato.</p>
    </div>
    <div className="flex items-start justify-between gap-4">
      <div><label htmlFor="analytics-choice" className="font-bold text-foreground">Analytics, fornecido por Lovable</label>
        <p className="mt-2 text-sm text-muted-foreground">Permitir medição opcional de cliques. Não há cookies de publicidade, Google Analytics ou pixels instalados no código do site.</p>
      </div>
      <Switch id="analytics-choice" checked={enabled} onCheckedChange={setEnabled} disabled={gpc} />
    </div>
    {gpc && <p className="text-sm text-primary">O sinal de privacidade do seu navegador está ativo. As opções de medição permanecem desativadas.</p>}
    <p className="text-sm text-muted-foreground">As visitas, o tempo na página, a velocidade e os erros continuam sendo contados, sem cookies e sem identificar ninguém. Essa contagem não é desativada por este painel.</p>
    <div className="grid grid-cols-2 gap-3">
      <Button variant="outline" className="h-auto min-h-11 whitespace-normal" onClick={() => save(true)} disabled={gpc}>Aceitar todos</Button>
      <Button variant="outline" className="h-auto min-h-11 whitespace-normal" onClick={() => save(false)}>Rejeitar opcionais</Button>
    </div>
    <Button className="w-full h-auto min-h-11 whitespace-normal" onClick={() => save(enabled)}>Salvar preferências</Button>
    <p role="status" className="text-sm text-muted-foreground">{message}</p>
  </div>;
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [configure, setConfigure] = useState(false);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    let active = true;
    const sync = () => { void needsOptionalAnswer().then((needed) => { if (active) setOpen(needed); }); };
    sync();
    const unsubscribe = onOptionalChange(sync);
    return () => { active = false; unsubscribe(); };
  }, []);
  useEffect(() => { if (open) panel.current?.focus({ preventScroll: true }); }, [open]);
  if (!open) return null;
  function answer(granted: boolean) { saveChoices({ analytics: granted ? "granted" : "denied" }); setOpen(false); }
  return <aside ref={panel} tabIndex={-1} aria-labelledby="cookie-heading" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl max-h-[85dvh] overflow-y-auto rounded-lg border border-border bg-background p-5 shadow-lg sm:p-6">
    <h2 id="cookie-heading" className="text-lg font-bold text-foreground">Sua privacidade</h2>
    {configure ? <div className="mt-4"><CookiePreferences onSaved={() => setOpen(false)} /></div> : <>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Contamos visitas sem cookies. Se você aceitar, também permitimos a medição de cliques. A contagem de visitas, tempo na página, velocidade e erros continua mesmo se você rejeitar opcionais.</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button variant="outline" className="min-h-11 h-auto whitespace-normal" onClick={() => answer(true)}>Aceitar todos</Button>
        <Button variant="outline" className="min-h-11 h-auto whitespace-normal" onClick={() => answer(false)}>Rejeitar opcionais</Button>
      </div>
      <Button variant="ghost" className="mt-2 w-full" onClick={() => setConfigure(true)}>Configurar</Button>
    </>}
    <Link to="/politica-de-privacidade" className="mt-3 inline-block text-sm text-primary underline">Política de Privacidade</Link>
  </aside>;
}