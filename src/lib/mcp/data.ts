export const COMPANY = {
  name: "Pro GNV",
  description:
    "Oficina especializada em GNV com mais de 20 anos de mercado, homologada pelo Inmetro. Instalação, manutenção e requalificação de kit GNV.",
  address: "Av. Padre Natal Pigato, 1932 - Campo Largo/PR",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.%20Padre%20Natal%20Pigato%2C%201932%20-%20Campo%20Largo%2C%20PR",
  whatsapp: "(41) 8890-5279",
  phone: "(41) 3393-4019",
  email: "contatoprognv@hotmail.com",
  website: "https://prognv.lovable.app",
  highlights: [
    "20+ anos de mercado",
    "Selo Inmetro",
    "Kits de 2ª a 6ª geração",
    "Parcelamento em 12x",
    "Nota fiscal",
  ],
} as const;

export const SERVICES = [
  {
    slug: "instalacao",
    name: "Instalação",
    description:
      "Instalação completa de kit GNV de 2ª a 6ª geração, com homologação e regularização.",
  },
  {
    slug: "requalificacao",
    name: "Requalificação",
    description:
      "Teste hidrostático e requalificação de cilindros conforme normas do Inmetro.",
  },
  {
    slug: "manutencao",
    name: "Manutenção",
    description:
      "Revisões, regulagem e troca de filtros para máximo desempenho e segurança.",
  },
] as const;

export const CYLINDERS = [
  { size: "7,5 m³", use: "Carros compactos", note: "Menor peso e espaço" },
  { size: "10 m³", use: "Hatch e sedãs pequenos", note: "Equilíbrio ideal" },
  { size: "12 m³", use: "Sedãs médios", note: "Mais autonomia" },
  { size: "15 m³", use: "Sedãs grandes e SUVs", note: "Alta autonomia" },
  { size: "16 m³", use: "SUVs e utilitários", note: "Uso intenso" },
  { size: "20 m³", use: "Vans e utilitários", note: "Rodagem diária" },
  { size: "25 m³", use: "Frotas e apps", note: "Máxima autonomia" },
] as const;

const WHATSAPP_NUMBER = "554188905279";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES: Record<string, string> = {
  orcamento: "Olá, vim pelo site e gostaria de um orçamento para GNV.",
  informacoes: "Olá, vim pelo site e gostaria de mais informações sobre GNV.",
  instalacao: "Olá, vim pelo site e gostaria de uma instalação de GNV.",
  requalificacao:
    "Olá, vim pelo site e gostaria de uma requalificação de cilindro GNV.",
  manutencao: "Olá, vim pelo site e gostaria de uma manutenção de GNV.",
};
