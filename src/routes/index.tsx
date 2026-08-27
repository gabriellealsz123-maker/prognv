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
  CreditCard,
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
const TEL_FIXO_URL = "tel:+554133934019";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Padre%20Natal%20Pigato%2C%201932%20-%20Campo%20Largo%2C%20PR";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pro GNV — Instalação e Manutenção de GNV | Campo Largo/PR" },
      {
        name: "description",
        content:
          "Oficina homologada INMETRO com mais de 20 anos de mercado. Instalação de kits GNV 2ª a 5ª geração, manutenção e requalificação de cilindros. IPVA a 1% no PR.",
      },
      { property: "og:title", content: "Pro GNV — Instalação e Manutenção de GNV" },
      {
        property: "og:description",
        content:
          "Economia e potência. Reduza seu IPVA para 1%. Oficina homologada INMETRO com mais de 20 anos de tradição em Campo Largo/PR.",
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
    { label: "Serviços", href: "#servicos" },
    { label: "Kits", href: "#kits" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="leading-tight">
          <span className="text-xl font-black tracking-tight text-zinc-50 uppercase">
            Pro <span className="text-orange-500">GNV</span>
          </span>
          <span className="block text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
            Homologada Inmetro
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-bold text-zinc-950 hover:bg-orange-400 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-zinc-300 hover:text-zinc-50"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-zinc-800/60 bg-zinc-950 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-orange-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-bold text-zinc-950"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20"
      style={{
        backgroundImage:
          "repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 6px), linear-gradient(to bottom, var(--color-zinc-900), var(--color-zinc-950))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-zinc-300 uppercase">
          <BadgeCheck className="h-4 w-4 text-orange-500" />
          Oficina homologada Inmetro
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-zinc-50 leading-[1.05]">
          PRO&nbsp;GNV
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-400">
          Instalação e manutenção de GNV com oficina homologada pelo Inmetro e
          mais de 20 anos de tradição.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-3.5 text-base font-bold text-zinc-950 hover:bg-orange-400 transition-colors"
          >
            Ver Opções de Kits
            <ChevronRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-zinc-500 px-8 py-3.5 text-base font-bold text-zinc-50 hover:border-zinc-300 hover:bg-zinc-900 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com Especialista
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <Award className="h-4 w-4 text-orange-500" /> 20 Anos de Experiência
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-orange-500" /> Garantia de 1 Ano
          </span>
          <span className="inline-flex items-center gap-2">
            <Receipt className="h-4 w-4 text-orange-500" /> Nota Fiscal
          </span>
        </div>
      </div>
    </section>
  );
}

function HighlightsBar() {
  const items = [
    { icon: Award, label: "20+ Anos de Mercado" },
    { icon: BadgeCheck, label: "Selo Inmetro" },
    { icon: Layers, label: "2ª a 5ª Geração" },
    { icon: CreditCard, label: "Parcelamento em 12x" },
  ];
  return (
    <div className="bg-zinc-900 border-y border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-2.5 text-sm font-semibold text-zinc-200"
          >
            <item.icon className="h-5 w-5 text-orange-500 shrink-0" />
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
  price,
  installments,
  features,
}: {
  tag: string;
  title: string;
  subtitle: string;
  price: string;
  installments: string;
  features: string[];
}) {
  return (
    <div className="group relative rounded-xl border-t-4 border-t-orange-500 border border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_-8px_rgba(249,115,22,0.35)] hover:border-zinc-700">
      <span className="inline-block rounded-full bg-orange-500/10 border border-orange-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500">
        {tag}
      </span>
      <h3 className="mt-5 text-2xl font-black uppercase tracking-tight text-zinc-50">
        {title}
      </h3>
      <p className="text-sm font-medium text-zinc-400">{subtitle}</p>
      <div className="mt-6 border-y border-zinc-700/60 py-5">
        <p className="text-4xl font-black text-zinc-50">{price}</p>
        <p className="mt-1 text-sm text-zinc-400">
          à vista ou <span className="text-orange-500 font-semibold">{installments}</span>
        </p>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
            <Check className="h-5 w-5 text-orange-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-base font-bold text-zinc-950 hover:bg-orange-400 transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        Solicitar Orçamento
      </a>
    </div>
  );
}

function PricingKits() {
  return (
    <section id="kits" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
            Kits GNV 5ª Geração
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-50">
            Escolha o Kit Ideal para o seu Veículo
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <KitCard
            tag="Custo-Benefício"
            title="Kit 5ª Geração"
            subtitle="SGV / Salini"
            price="R$ 3.190,00"
            installments="10x R$ 367,00 s/ juros"
            features={[
              "Cilindro Xm³",
              "Suporte específico",
              "X tempo de Garantia ",
            ]}
          />
          <KitCard
            tag="Alta Performance"
            title="Kit 5ª Geração"
            subtitle="Landi Renzo"
            price="R$ 4.190,00"
            installments="10x R$ 460,00 s/ juros"
            features={[
              "Tecnologia Italiana",
              "Cilindro Xm³",
              " x tempo Garantia Manutenção",
              "x tempo de Garantia Cilindro",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Instalação 2ª a 5ª Geração",
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
    <section id="servicos" className="bg-zinc-900 py-20 border-y border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
            O que fazemos
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-50">
            Serviços Especializados
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-7 hover:border-orange-500/50 transition-colors"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                <s.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-zinc-50 uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
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
  return (
    <section id="vantagens" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
            Por que converter
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-50">
            Vantagens do GNV
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {topics.map((t) => (
            <div key={t.title} className="flex gap-4">
              <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                <t.icon className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-50 uppercase tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const steps = ["Instalação", "Inspeção", "Regularização", "Selo GNV"];
  return (
    <section className="bg-zinc-900 py-20 border-y border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-50">
          Instalador Registrado <span className="text-orange-500">INMETRO</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Todo o processo é feito dentro da lei: da instalação à documentação,
          você sai com o selo GNV e o veículo regularizado.
        </p>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {steps.map((step, i) => (
            <div key={step} className="relative flex flex-col items-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-zinc-700" />
              )}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-500 bg-zinc-950 text-lg font-black text-orange-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-zinc-200">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-black py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="text-2xl font-black tracking-tight text-zinc-50 uppercase">
              Pro <span className="text-orange-500">GNV</span>
            </span>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              Homologada Inmetro
            </p>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Mais de 20 anos de tradição em instalação e manutenção de GNV.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-50 mb-4">
              Endereço
            </h3>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-zinc-400 hover:text-orange-500 transition-colors"
            >
              <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
              <span>
                Av. Padre Natal Pigato, 1932
                <br />
                Campo Largo/PR
              </span>
            </a>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-50 mb-4">
              Contato
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-orange-500" />
                  WhatsApp (41) 8890-5279
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                Fixo (41) 3393-4019
              </li>
              <li>
                <a
                  href="mailto:contatoprognv@hotmail.com"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <Mail className="h-4 w-4 text-orange-500" />
                  contatoprognv@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-900 pt-6 text-center text-xs text-zinc-600">
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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-zinc-950 shadow-[0_8px_30px_rgba(249,115,22,0.4)] hover:bg-orange-400 hover:scale-105 transition-all"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <HighlightsBar />
        <PricingKits />
        <Services />
        <WhyGnv />
        <TrustSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
