# Auditoria (somente leitura) — resultado

Nenhum arquivo, configuração ou dado foi alterado.

1. **API / backend:** não há backend com banco. Existe só um ponto de acesso público em `/mcp` (arquivo `src/routes/mcp.ts`, ferramentas em `src/lib/mcp/`) que devolve informações já mostradas no site (endereço, telefones, serviços, cilindros, links de WhatsApp). O restante é o site em si.
2. **Lovable Cloud / Supabase / banco / funções de servidor:** não usa. Não há pasta de banco, conexão nem funções de servidor próprias.
3. **Chaves:** não há arquivo de variáveis secretas e nenhuma chave, senha ou token foi encontrado no código enviado ao navegador.
4. **Login, tabelas e RLS:** não há login, nem tabelas, então regras de acesso (RLS) não se aplicam.
5. **Riscos:**
   - `/mcp` é público sem login — aceitável porque só expõe dados já públicos. Correção, se quiser: remover o MCP ou exigir login (exigiria Lovable Cloud).
   - Contagem de visitas do Lovable ocorre antes da escolha de cookies (sem identificação pessoal). Correção: desativar a análise de visitantes nas configurações do projeto, se você autorizar.
   - Páginas legais ainda têm dados pendentes (identificação da empresa, retenção etc.). Correção: preencher com dados reais.
6. **Não verifiquei:** configurações do painel da Vercel/hospedagem, versão publicada atual, e uma varredura completa de vulnerabilidades em pacotes (posso rodar se pedir).
