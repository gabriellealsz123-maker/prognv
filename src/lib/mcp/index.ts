import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listServices from "./tools/list-services";
import listCylinders from "./tools/list-cylinders";
import getQuoteLink from "./tools/get-quote-link";

export default defineMcp({
  name: "gnv-experts-landing",
  title: "GNV Experts Landing",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas da Pro GNV, oficina de GNV em Campo Largo/PR. Use `get_company_info` para endereço e contatos, `list_services` para os serviços, `list_cylinders` para capacidades de cilindros e `get_quote_link` para gerar o link de WhatsApp com mensagem pronta.",
  tools: [getCompanyInfo, listServices, listCylinders, getQuoteLink],
});
