# Revisão de privacidade — Pro GNV

## Alterações (somente versão de revisão)
- Páginas: `/politica-de-privacidade`, `/termos-de-uso`, `/preferencias-de-cookies`, com links no menu e rodapé.
- `src/routes/index.tsx`: remoção dos preços R$ 0.000,00, parcelas fictícias, capacidades Xm³ e garantias de exemplo, inclusive a garantia de um ano e parcelamento em 12x não confirmados. Mantidos os pedidos de orçamento.
- `src/routes/__root.tsx`: idioma pt-BR, consentimento negado globalmente antes de qualquer tag, painel global e remoção de conexões a Google Fonts.
- `src/components/privacy/*`, `src/lib/consent.ts`, `src/lib/optional-consent.ts`: painel não modal, escolha por finalidade, botões equivalentes, reabertura, armazenamento da escolha/data, GPC, atualização nesta aba e em outras abas.
- `src/styles.css`, `public/fonts/*`: tipografia local e estilos das páginas legais.
- `src/lib/optional-consent.test.js`: testes de ausência de consentimento, aceitação, recusa posterior, GPC e expiração.
- `AGENTS.md`, `roadmap.md`: decisões técnicas e pendência externa.

## Inventário confirmado
- TanStack Start / React / Tailwind; página inicial e endpoints MCP públicos preexistentes. Nenhum endpoint novo criado.
- Lovable Visitor analytics e Click tracking ativos nas configurações consultadas. Página, tempo, velocidade e erros são contados mesmo antes da escolha. Não houve alteração de produção.
- Não foram encontrados Google Analytics, Tag Manager, pixels publicitários, formulários ativos, login, pagamentos, vídeos ou mapas incorporados.
- Google Consent Mode: fila de sinais locais, não instala uma tag Google. Sinais de analytics e publicidade negados globalmente inicialmente; somente analytics recebe uma escolha. Não há finalidade de publicidade instalada.
- WhatsApp e Maps são apenas links externos; mensagens incluem somente texto genérico e o número comercial, Maps contém apenas endereço comercial. E-mail e telefone abrem aplicativos externos.
- Google Fonts foi removido como serviço remoto; a fonte Archivo agora é local.
- MCP público: quatro ferramentas consultam dados comerciais, serviços, cilindros e links de contato. Não consultam clientes, não enviam mensagens.
- Relatórios de erro preexistentes usam `window.__lovableEvents.captureException`; não foram encontrados eventos próprios de ações de usuário.
- A resposta HTTPS publicada inclui Cloudflare e cookie `__cf_bm`, Secure/HttpOnly, com validade aproximada de 30 minutos. Não é cookie instalado pelo painel; a hospedagem controla seu funcionamento.
- A biblioteca de sidebar contém código para um cookie de interface, mas não é usada pela página e não foi observada no fluxo ativo.
- Nenhuma credencial ou segredo literal foi encontrado no código/arquivos públicos examinados. Não é certificação de ausência em todo histórico Git ou configurações externas.

## Dados pendentes do responsável
Razão social/CNPJ se aplicável; identificação do controlador; confirmação do canal e eventual encarregado; bases legais por finalidade; retenção de atendimentos e infraestrutura; medidas internas de segurança e descarte; operadores, países e mecanismos de transferências; preços, pagamento, componentes e garantias reais; comprovação/alcance de registro e homologação; políticas de contratação/cancelamento e validação de alegações comerciais (inclusive benefício de IPVA e economia).

## Verificações e limites
- Antes: duas ocorrências de preço e capacidade fictícios; sem links legais; fonte remota.
- Depois: esses exemplos ausentes; sem conexão a Google Fonts; todas as novas páginas acessíveis diretamente.
- Navegador: recusar → reabrir preferências → aceitar → recarregar → retirar consentimento → navegar nas páginas. Testes em 1280×1800 e 390×844, sem transbordamento horizontal ou erros JavaScript no fluxo.
- Cinco testes de regras passaram. Defaults verificados como negados antes da escolha. Não há tags opcionais de terceiros instaladas para verificar recebimento externo.
- A prévia não executa a medição nativa de produção: bloqueio real de cliques na plataforma não foi verificado no domínio publicado porque a publicação não foi autorizada.
- HTTPS publicado 200; HTTP redireciona 301 para HTTPS. Observados HSTS, X-Content-Type-Options e Referrer-Policy. CSP, Permissions-Policy e proteção de enquadramento não apareceram na resposta examinada. Nenhum cabeçalho, servidor ou DNS foi alterado. Uma futura CSP/proteção de enquadramento deve ser avaliada separadamente: bloquear indiscriminadamente scripts ou frames pode impedir a prévia e a medição.
- Bloqueador: o proprietário não autorizou mudanças de produção. Visitor analytics continua ativo; portanto, a exigência de não registrar nenhuma visita antes do consentimento permanece pendente. Consent Mode não elimina a contagem essencial da plataforma. Não afirmamos conformidade legal.
- Nenhuma publicação foi realizada. Os textos estão identificados como revisão e exigem validação antes da publicação final.
