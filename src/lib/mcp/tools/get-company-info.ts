import { defineTool } from "@lovable.dev/mcp-js";
import { COMPANY } from "../data";

export default defineTool({
  name: "get_company_info",
  title: "Informações da Pro GNV",
  description:
    "Retorna dados públicos da oficina Pro GNV: endereço, contatos, site e diferenciais.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const company = {
      name: COMPANY.name,
      description: COMPANY.description,
      address: COMPANY.address,
      mapsUrl: COMPANY.mapsUrl,
      whatsapp: COMPANY.whatsapp,
      phone: COMPANY.phone,
      email: COMPANY.email,
      website: COMPANY.website,
      highlights: [...COMPANY.highlights],
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(company, null, 2) }],
      structuredContent: { company },
    };
  },
});
