# GNV Experts Landing

Crie uma Landing Page em Next.js + React + Tailwind CSS para a "Pro GNV", oficina especializada em GNV com mais de 20 anos de mercado. 

## Stack e Estilo Visual
- Next.js (App Router), componentes React funcionais.
- Tailwind CSS. Ícones: `lucide-react`.
- Tema Dark Automotivo: Fundo predominante em cinza chumbo/grafite escuro (zinc-900 e zinc-950), evitando excesso de laranja nas imagens de fundo. O laranja (orange-500) deve ser usado APENAS como cor de destaque (botões, ícones, bordas sutis e palavras-chave).
- Tipografia: Bold/condensada nos títulos.
- Links de WhatsApp devem usar a URL exata com mensagem automática: `https://wa.me/554188905279?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20GNV.`

## Estrutura de Componentes (Nesta ordem)

1. **Header (Fixo, fundo zinc-950/90 com blur)**
- Logo textual: "PRO GNV" (Branco, com "GNV" em laranja). Subtítulo: "Homologada INMETRO".
- Menu: Início | Serviços | Kits | Vantagens | Contato.
- CTA: Botão "WhatsApp" (Laranja).

2. **Hero Section (Menos laranja, mais chumbo)**
- Fundo: Gradiente cinza escuro escovado (zinc-900 para zinc-950). Sem imagens de fundo muito vibrantes.
- Título principal: "ECONOMIA E POTÊNCIA." / "REDUZA SEU IPVA PARA 1%." (Destaque "1%" em laranja).
- Subtítulo: "Instalação e manutenção de GNV com oficina homologada pelo Inmetro e mais de 20 anos de tradição."
- Botões: "Ver Opções de Kits" (Laranja sólido) e "Falar com Especialista" (Outline cinza claro com texto branco).
- Trust badges abaixo dos botões (ícones pequenos): 20 Anos de Experiência | Garantia de 1 Ano | Nota Fiscal.

3. **HighlightsBar (Faixa horizontal fina bg-zinc-900)**
- 4 Itens com ícone laranja: 20+ Anos de Mercado | Selo Inmetro | 2ª a 5ª Geração | Parcelamento em 12x.

4. **PricingKits (NOVA SEÇÃO - Cards de Preços Diferenciados)**
- Título: "Escolha o Kit Ideal para o seu Veículo"
- Design dos cards: Diferente do resto do site. Usar fundo gradient leve (zinc-800 para zinc-900), borda superior grossa em laranja e efeito de 'glow' laranja ao passar o mouse (hover).
- **Card 1: Kit 5ª Geração (SGV / Salini)**
  - Tag: "Custo-Benefício"
  - Preço: R$ 3.190,00 à vista (ou 10x R$ 367,00 s/ juros).
  - Checklist: Cilindro 15m³, Suporte específico, 1 Ano de Garantia (Peças).
  - Botão CTA: "Solicitar Orçamento" (Link WhatsApp).
- **Card 2: Kit 5ª Geração (Landi Renzo)**
  - Tag: "Alta Performance"
  - Preço: R$ 4.190,00 à vista (ou 10x R$ 460,00 s/ juros).
  - Checklist: Tecnologia Italiana, Cilindro 15m³, 2 Anos Garantia Manutenção, 5 Anos Garantia Cilindro.
  - Botão CTA: "Solicitar Orçamento" (Link WhatsApp).

5. **Services (Grid 3 colunas, cards simples bg-zinc-950 com borda zinc-800)**
- Instalação 2ª a 5ª Geração | Manutenção Preventiva | Requalificação de Cilindros | Suporte e Pequenos Reparos. (Usar ícones Lucide para cada).

6. **WhyGnv (Grid 2 colunas com texto objetivo)**
- Título: "Vantagens do GNV"
- Tópicos: IPVA a 1% no PR, Economia diária, Flexibilidade (Roda no álcool/gasolina e GNV), Instalação sob o veículo (conforme modelo), Menor impacto ambiental.

7. **TrustSection (Foco em Autoridade)**
- Stepper visual horizontal: 01 Instalação -> 02 Inspeção -> 03 Regularização -> 04 Selo GNV.
- Destaque grande para o Logo/Texto: "Instalador Registrado INMETRO".

8. **Footer**
- Fundo totalmente preto (black).
- Informações: Av. Padre Natal Pigato, 1932 - Campo Largo/PR.
- Contatos: WhatsApp (41) 8890-5279 | Fixo (41) 3393-4019 | Email contatoprognv@hotmail.com.
- Direitos autorais 2026. Botão flutuante do WhatsApp fixo no canto inferior direito da tela inteira.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://prognv.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/31c420c1-6510-4ba6-87b3-c5cd8bbb427a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
