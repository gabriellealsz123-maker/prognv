import { defineTool } from "@lovable.dev/mcp-js";
import { CYLINDERS } from "../data";

export default defineTool({
  name: "list_cylinders",
  title: "Capacidades de cilindros",
  description:
    "Lista as capacidades de cilindros de GNV disponíveis (7,5 m³ a 25 m³) e o tipo de veículo indicado para cada uma.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const cylinders = CYLINDERS.map((c) => ({
      size: c.size,
      recommendedFor: c.use,
      note: c.note,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(cylinders, null, 2) }],
      structuredContent: { cylinders },
    };
  },
});
