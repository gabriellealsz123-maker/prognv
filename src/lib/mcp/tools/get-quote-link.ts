import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { WHATSAPP_MESSAGES, whatsappLink } from "../data";

export default defineTool({
  name: "get_quote_link",
  title: "Link de contato no WhatsApp",
  description:
    "Gera o link de WhatsApp da Pro GNV já com a mensagem automática do assunto escolhido (orçamento, informações, instalação, requalificação ou manutenção).",
  inputSchema: {
    subject: z
      .enum(["orcamento", "informacoes", "instalacao", "requalificacao", "manutencao"])
      .describe("Assunto da mensagem automática."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ subject }) => {
    const message = WHATSAPP_MESSAGES[subject];
    if (!message) throw new ToolError(`Assunto desconhecido: ${subject}`);
    const url = whatsappLink(message);
    return {
      content: [{ type: "text" as const, text: url }],
      structuredContent: { subject, message, url },
    };
  },
});
