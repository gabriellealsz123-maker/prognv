import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES, WHATSAPP_MESSAGES, whatsappLink } from "../data";

export default defineTool({
  name: "list_services",
  title: "Serviços oferecidos",
  description:
    "Lista os serviços da Pro GNV (instalação, requalificação e manutenção) com o link de WhatsApp de cada um.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = SERVICES.map((s) => ({
      slug: s.slug,
      name: s.name,
      description: s.description,
      whatsappUrl: whatsappLink(WHATSAPP_MESSAGES[s.slug]!),
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
