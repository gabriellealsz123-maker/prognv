import { LegalLinks } from "@/components/privacy/legal-links";
import { Button } from "@/components/ui/button";
import { WorkshopGallery } from "@/components/workshop-gallery";
import "@/prognv-preview.css";
import { createFileRoute } from "@tanstack/react-router";
import {
  Menu,
  X,
  MessageCircle,
  BadgeCheck,
  ShieldCheck,
  Receipt,
  Award,
  Layers,
  Wrench,
  Cog,
  Cylinder,
  LifeBuoy,
  Fuel,
  PiggyBank,
  RefreshCcw,
  ArrowDownToDot,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Check,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/554188905279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20GNV.";
const WHATSAPP_INFO_URL =
  "https://wa.me/554188905279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20GNV.";
const WHATSAPP_INSTALACAO_URL =
  "https://wa.me/554188905279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20instala%C3%A7%C3%A3o%20de%20GNV.";
const WHATSAPP_REQUALIFICACAO_URL =
  "https://wa.me/554188905279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20requalifica%C3%A7%C3%A3o%20de%20cilindro%20GNV.";
const WHATSAPP_MANUTENCAO_URL =
  "https://wa.me/554188905279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20manuten%C3%A7%C3%A3o%20de%20GNV.";
const TEL_FIXO_URL = "tel:+554133934019";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Padre%20Natal%20Pigato%2C%201932%20-%20Campo%20Largo%2C%20PR";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pro GNV | Instalação e Manutenção de Kit GNV em Campo Largo" },
      {
        name: "description",
        content:
          "Especialistas em conversão, instalação, requalificação e manutenção de kit GNV em Campo Largo - PR. Oficina homologada pelo Inmetro. Faça um orçamento!",
      },
      {
        property: "og:title",
        content: "Pro GNV | Instalação e Manutenção de Kit GNV em Campo Largo",
      },
      {
        property: "og:description",
        content:
          "Especialistas em conversão, instalação, requalificação e manutenção de kit GNV em Campo Largo - PR. Oficina homologada pelo Inmetro. Faça um orçamento!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Fotos", href: "#galeria" },
    { label: "Serviços", href: "#servicos" },
    { label: "Kits", href: "#kits" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Cilindros", href: "#cilindros" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 border-b border-pg-line bg-pg-ink/90 backdrop-blur-md">
      <div className="header-contact">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin size={14} />Av. Padre Natal Pigato, 1932 · Campo Largo/PR</a>
          <a href={TEL_FIXO_URL}><Phone size={14} />(41) 3393-4019</a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a href="#inicio" className="pg-focus shrink-0 rounded-[2px] leading-none">
          <span className="text-xl font-black uppercase tracking-tight text-zinc-50 sm:text-[22px]">
            Pro <span className="text-pg">GNV</span>
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Homologada Inmetro
          </span>
        </a>

        <nav className="hidden min-w-0 items-center gap-1 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="pg-focus rounded-[2px] px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-300 transition-colors hover:text-zinc-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <details className="relative hidden xl:block"><summary className="pg-focus cursor-pointer rounded-[2px] px-2 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-400 transition-colors hover:text-zinc-50">Privacidade</summary><nav aria-label="Informações legais" className="absolute right-0 top-11 w-64 rounded-[4px] border border-pg-line bg-pg-ink p-4"><LegalLinks /></nav></details>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pg-focus pg-btn hidden h-10 items-center gap-2 rounded-[4px] bg-pg px-4 text-[13px] font-extrabold uppercase tracking-[0.06em] text-pg-on hover:bg-pg-hover sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Button variant="ghost" size="icon"
            onClick={() => setOpen(!open)}
            className="pg-focus rounded-[4px] text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50 xl:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto border-t border-pg-line bg-pg-ink px-4 py-4 sm:px-6 xl:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="pg-focus rounded-[2px] border-b border-pg-line py-3 text-sm font-bold uppercase tracking-[0.08em] text-zinc-200 hover:text-pg"
            >
              {l.label}
            </a>
          ))}
          <div className="py-3"><LegalLinks onNavigate={() => setOpen(false)} /></div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pg-focus inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-pg px-4 text-sm font-extrabold uppercase tracking-[0.06em] text-pg-on"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function WorkshopPhoto({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  return (
    <div className={`workshop-photo ${className}`}>
      <img src={`/oficina/${name}.jpg`} srcSet={`/oficina/${name}-640.jpg 640w, /oficina/${name}.jpg 1152w`} sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) 90vw, 850px" alt={alt} width={1152} height={648} loading="lazy" decoding="async" />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="pro-hero">
      <div className="pro-hero-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pro-hero-intro">
          <p className="mb-5 inline-flex items-center gap-2 rounded-[2px] border-l-2 border-pg bg-pg-surface px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-300">
            <BadgeCheck className="h-4 w-4 text-pg" />
            Oficina homologada Inmetro
          </p>
          <h1 className="pg-display text-zinc-50">
            PRO <span className="text-pg">GNV</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Instalação, manutenção e requalificação de kit GNV por oficina
            homologada pelo Inmetro e mais de 20 anos de tradição.
          </p>
        </div>
        <div className="pro-hero-photo">
          <img
            src="/visual/hero-civic.jpg"
            alt="Honda Civic lilás com rodas escuras, visto de frente e de lado"
            width={1672}
            height={941}
            fetchPriority="high"
          />
        </div>
        <div className="pro-hero-actions">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#kits"
              className="pg-focus pg-btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-[4px] bg-pg px-7 text-[15px] font-extrabold uppercase tracking-[0.06em] text-pg-on hover:bg-pg-hover sm:w-auto"
            >
              Ver Opções de Kits
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_INFO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pg-focus pg-btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-[4px] border border-zinc-500 bg-pg-ink/40 px-7 text-[15px] font-extrabold uppercase tracking-[0.06em] text-zinc-50 hover:border-zinc-50 hover:bg-pg-ink/80 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Especialista
            </a>
          </div>
          <a href="#galeria" className="hero-gallery-link pg-focus">
            Ver fotos da oficina <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-zinc-50/15 pt-5 text-[13px] font-semibold text-zinc-300 sm:gap-x-6 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-pg" /> 20 Anos de Experiência
            </span>
            <span className="inline-flex items-center gap-2">
              <Receipt className="h-4 w-4 text-pg" /> Nota Fiscal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsBar() {
  const items = [
    { icon: Award, label: "20+ Anos de Mercado" },
    { icon: BadgeCheck, label: "Selo Inmetro" },
    { icon: Layers, label: "2ª a 6ª Geração" },
    { icon: MessageCircle, label: "Solicite um orçamento" },
  ];
  return (
    <div className="border-y border-pg-line bg-pg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex min-w-0 items-center gap-3 px-2 py-5 text-[13px] font-bold uppercase tracking-[0.06em] text-zinc-100 sm:px-5 sm:text-sm ${i % 2 === 1 ? "border-l border-pg-line" : ""} ${i > 1 ? "border-t border-pg-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""} ${i === 0 ? "md:pl-0" : ""}`}
          >
            <item.icon className="h-5 w-5 text-pg shrink-0" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function KitCard({
  tag,
  title,
  subtitle,
  features,
  image,
  imageAlt,
}: {
  tag: string;
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[4px] border border-pg-line bg-pg-surface transition-colors duration-200 hover:border-zinc-600">
      <div className="aspect-[16/10] bg-zinc-100 p-4 sm:p-6">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-pg-line p-6 sm:p-8">
        <span className="inline-block self-start text-[11px] font-bold uppercase tracking-[0.2em] text-pg">
          {tag}
        </span>
        <h3 className="mt-3 text-2xl font-black uppercase leading-none tracking-tight text-zinc-50 sm:text-[28px]">
          {title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-zinc-400">{subtitle}</p>
        <ul className="mt-6 space-y-3 border-t border-pg-line pt-5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
              <Check className="h-5 w-5 text-pg shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pg-focus mt-auto block rounded-[4px] pt-8"
        >
          <span className="pg-btn flex h-12 items-center justify-center gap-2 rounded-[4px] bg-pg px-6 text-sm font-extrabold uppercase tracking-[0.06em] text-pg-on hover:bg-pg-hover">
            <MessageCircle className="h-5 w-5" />
            Solicitar Orçamento
          </span>
        </a>
      </div>
    </div>
  );
}

function PricingKits() {
  return (
    <section id="kits" className="pg-light bg-pg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="pg-eyebrow mb-4">
            Kits GNV
          </p>
          <h2 className="pg-h2">
            Escolha o Kit Ideal para o seu Veículo
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <KitCard
            tag="Custo-Benefício"
            title="KIT 3ª GERAÇÃO"
            subtitle="SGV / Salini"
            image="/kit-3-geracao.png"
            imageAlt="Componentes do kit GNV de 3ª geração instalados no veículo"
            features={[
              "Suporte específico",
            ]}
          />
          <KitCard
            tag="Alta Performance"
            title="Kit 5ª Geração"
            subtitle="Landi Renzo"
            image="/kit-5-geracao.png"
            imageAlt="Componentes do kit GNV de 5ª geração Landi Renzo Omegas EVO"
            features={[
              "Tecnologia Italiana",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Cylinders() {
  const cylinders = [
    { size: "7,5 m³", use: "Carros compactos", note: "Menor peso e espaço" },
    { size: "10 m³", use: "Hatch e sedãs pequenos", note: "Equilíbrio ideal" },
    { size: "12 m³", use: "Sedãs médios", note: "Mais autonomia" },
    { size: "15 m³", use: "Sedãs grandes e SUVs", note: "Alta autonomia" },
    { size: "16 m³", use: "SUVs e utilitários", note: "Uso intenso" },
    { size: "20 m³", use: "Vans e utilitários", note: "Rodagem diária" },
    { size: "25 m³", use: "Frotas e apps", note: "Máxima autonomia" },
  ];
  return (
    <section id="cilindros" className="pg-light bg-pg-ink pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 sm:mb-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-12">
          <div>
          <p className="pg-eyebrow mb-4">
            Capacidades disponíveis
          </p>
          <h2 className="pg-h2">
            Cilindros de 7,5 a 25 m³
          </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Trabalhamos com cilindros homologados em diversas capacidades. A escolha
            depende do porte do veículo e da autonomia desejada.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-pg-line bg-pg-line sm:grid-cols-3 lg:grid-cols-4">
          {cylinders.map((c) => (
            <div
              key={c.size}
              className="min-w-0 bg-pg-surface p-4 transition-colors duration-200 hover:bg-zinc-900 sm:p-6"
            >
              <div className="flex items-center gap-2 text-zinc-500">
                <Cylinder className="h-4 w-4 text-pg shrink-0" />
              </div>
              <p className="mt-4 text-[28px] font-black leading-none tracking-tight text-zinc-50 sm:text-4xl">{c.size}</p>
              <p className="mt-4 border-t border-pg-line pt-3 text-sm font-semibold leading-snug text-zinc-200">
                {c.use}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{c.note}</p>
            </div>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pg-focus group flex min-w-0 flex-col justify-end bg-pg p-4 text-pg-on transition-colors duration-200 hover:bg-pg-hover sm:p-6"
          >
            <MessageCircle className="mb-auto h-5 w-5" />
            <span className="mt-6 text-base font-black uppercase leading-tight tracking-tight sm:text-lg">
              Não sabe qual escolher?
            </span>
            <span className="mt-1 text-xs font-semibold">
              Fale com a gente no WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceActions() {
  const actions = [
    {
      icon: Wrench,
      title: "Instalação",
      desc: "Instalação completa de kit GNV de 2ª a 6ª geração, com homologação e regularização.",
      href: WHATSAPP_INSTALACAO_URL,
    },
    {
      icon: Cylinder,
      title: "Requalificação",
      desc: "Teste hidrostático e requalificação de cilindros conforme normas do Inmetro.",
      href: WHATSAPP_REQUALIFICACAO_URL,
    },
    {
      icon: Cog,
      title: "Manutenção",
      desc: "Revisões, regulagem e troca de filtros para máximo desempenho e segurança.",
      href: WHATSAPP_MANUTENCAO_URL,
    },
  ];
  return (
    <section className="service-actions bg-pg-ink pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {actions.map((a) => (
            <a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pg-focus group flex min-h-[280px] flex-col rounded-[4px] border border-pg-line bg-pg-surface p-6 transition-colors duration-200 hover:border-zinc-600 sm:p-8"
            >
              <a.icon className="h-7 w-7 text-pg" />
              <h3 className="mt-8 text-[28px] font-black uppercase leading-none tracking-tight text-zinc-50 sm:text-3xl">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{a.desc}</p>
              <span className="mt-auto flex items-center justify-between gap-2 border-t border-pg-line pt-5 text-sm font-extrabold uppercase tracking-[0.06em] text-pg transition-colors group-hover:text-pg-hover">
                <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
                </span>
                <ChevronRight className="pg-arrow h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Wrench,
      title: "INSTALAÇÃO 2ª A 6ª GERAÇÃO DE KIT GNV",
      desc: "Instalação completa de kits GNV de todas as gerações, com homologação e regularização.",
    },
    {
      icon: Cog,
      title: "Manutenção Preventiva",
      desc: "Revisões periódicas, troca de filtros e regulagem para máximo desempenho e segurança.",
    },
    {
      icon: Cylinder,
      title: "Requalificação de Cilindros",
      desc: "Teste hidrostático e requalificação de cilindros conforme normas do Inmetro.",
    },
    {
      icon: LifeBuoy,
      title: "Suporte e Pequenos Reparos",
      desc: "Diagnóstico rápido, vazamentos, chave comutadora e ajustes gerais do sistema.",
    },
  ];
  return (
    <section id="servicos" className="border-y border-pg-line bg-pg-surface py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="pg-eyebrow mb-4">
            O que fazemos
          </p>
          <h2 className="pg-h2">
            Serviços Especializados
          </h2>
          <WorkshopPhoto name="03-motor-instalacao" alt="Motor e componentes de GNV de um veículo na oficina" className="mt-8" />
        </div>
        <div className="grid gap-px overflow-hidden rounded-[4px] border border-pg-line bg-pg-line sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="min-w-0 bg-pg-ink p-6 transition-colors duration-200 hover:bg-zinc-900 sm:p-8"
            >
              <s.icon className="h-6 w-6 text-pg" />
              <h3 className="mt-6 text-lg font-black uppercase leading-tight tracking-tight text-zinc-50 [overflow-wrap:anywhere]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyGnv() {
  const topics = [
    {
      icon: PiggyBank,
      title: "IPVA a 1% no PR",
      desc: "Veículos movidos a GNV pagam apenas 1% de IPVA no Paraná.",
    },
    {
      icon: Fuel,
      title: "Economia diária",
      desc: "O GNV custa significativamente menos por km rodado que gasolina ou etanol.",
    },
    {
      icon: RefreshCcw,
      title: "Flexibilidade total",
      desc: "Seu carro continua rodando no álcool/gasolina e passa a rodar também no GNV.",
    },
    {
      icon: ArrowDownToDot,
      title: "Instalação sob o veículo",
      desc: "Conforme o modelo, o cilindro é instalado embaixo do carro, sem ocupar o porta-malas.",
    },
    {
      icon: Leaf,
      title: "Menor impacto ambiental",
      desc: "Combustão mais limpa, com menos emissão de poluentes.",
    },
  ];
  const [lead, ...others] = topics as [(typeof topics)[number], ...typeof topics];
  return (
    <section id="vantagens" className="pg-light bg-pg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="pg-eyebrow mb-4">
            Por que converter
          </p>
          <h2 className="pg-h2">
            Vantagens do GNV
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="border-l-2 border-pg pl-6 sm:pl-8">
            <lead.icon className="h-7 w-7 text-pg" />
            <h3 className="mt-6 text-[44px] font-black uppercase leading-[0.95] tracking-tight text-zinc-50 sm:text-6xl">
              {lead.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">{lead.desc}</p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
          {others.map((t) => (
            <div key={t.title} className={`flex gap-4 border-t border-pg-line py-6 ${t.title === "Instalação sob o veículo" ? "underbody-feature sm:col-span-2" : ""}`}>
              <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-pg" />
              <div className="min-w-0">
                <h3 className="text-base font-black uppercase tracking-tight text-zinc-50">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t.desc}</p>
                {t.title === "Instalação sob o veículo" && <WorkshopPhoto name="09-instalacao-inferior" alt="Cilindros de GNV e suportes vistos sob o veículo" className="mt-5" />}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const steps = ["Instalação", "Inspeção", "Regularização", "Selo GNV"];
  return (
    <section className="bg-pg py-16 text-pg-on sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-12">
        <h2 className="pg-h2 text-pg-on">
          Instalador Registrado <span className="underline decoration-4 underline-offset-[6px]">INMETRO</span>
        </h2>
        <p className="max-w-xl text-base font-medium leading-relaxed">
          Todo o processo é feito dentro da lei: da instalação à documentação,
          você sai com o selo GNV e o veículo regularizado.
        </p>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-y-10 sm:mt-16 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step} className="relative pr-4">
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-12 right-0 hidden h-px bg-pg-on/60 md:block" />
              )}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-[4px] border-2 border-pg-on text-base font-black tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-sm font-black uppercase tracking-[0.08em]">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-pg-line bg-black pt-16 pb-24 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,4fr)] md:gap-12">
          <div>
            <span className="text-3xl font-black tracking-tight text-zinc-50 uppercase">
              Pro <span className="text-pg">GNV</span>
            </span>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              Homologada Inmetro
            </p>
            <p className="mt-5 max-w-sm text-sm text-zinc-400 leading-relaxed">
              Mais de 20 anos de tradição em instalação e manutenção de GNV.
            </p>
          </div>
          <div>
            <h3 className="mb-4 border-b border-pg-line pb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-50">
              Endereço
            </h3>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pg-focus flex items-start gap-3 rounded-[2px] text-sm leading-relaxed text-zinc-300 hover:text-pg transition-colors"
            >
              <MapPin className="h-4 w-4 text-pg shrink-0 mt-0.5" />
              <span>
                Av. Padre Natal Pigato, 1932
                <br />
                Campo Largo/PR
              </span>
            </a>
          </div>
          <div>
            <h3 className="mb-4 border-b border-pg-line pb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-50">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pg-focus flex items-center gap-3 rounded-[2px] hover:text-pg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-pg" />
                  WhatsApp (41) 8890-5279
                </a>
              </li>
              <li>
                <a
                  href={TEL_FIXO_URL}
                  className="pg-focus flex items-center gap-3 rounded-[2px] hover:text-pg transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-pg" />
                  Fixo (41) 3393-4019
                </a>
              </li>
              <li>
                <a
                  href="mailto:contatoprognv@hotmail.com"
                  className="pg-focus flex items-center gap-3 rounded-[2px] [overflow-wrap:anywhere] hover:text-pg transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-pg" />
                  contatoprognv@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav aria-label="Informações legais" className="mt-12 border-t border-pg-line pt-6"><LegalLinks /></nav>
        <div className="mt-6 text-xs text-zinc-500">
          © 2026 Pro GNV. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="pg-focus pg-btn fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-[6px] bg-pg text-pg-on shadow-[0_10px_30px_-8px_rgb(0_0_0/0.7)] hover:bg-pg-hover sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const sections = document.querySelectorAll(".pg main > section:not(.pro-hero) > div");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-entered");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pg pg-preview min-h-screen overflow-x-clip bg-pg-ink font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <HighlightsBar />
        <WorkshopGallery />
        <PricingKits />
        <Cylinders />
        <ServiceActions />
        <Services />
        <WhyGnv />
        <TrustSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
