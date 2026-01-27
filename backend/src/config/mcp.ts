import { runMCPTool } from "../../mcp-server";

interface MCPCall {
  tool: string;
  args: any;
}

/**
 * Call MCP tool safely from backend
 */
export const callMCP = async ({ tool, args }: MCPCall) => {
  const response = await runMCPTool({
    name: tool,
    args,
  });

  return response;
};
