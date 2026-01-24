import { tools } from "./registry";

/**
 * MCP Tool Runner
 * This function is called by backend when LLM decides
 * which tool to execute
 */

interface ToolCall {
  name: string;
  args: any;
}

export const runMCPTool = async ({ name, args }: ToolCall) => {
  try {
    const tool = tools.find((t) => t.name === name);

    if (!tool) {
      return `❌ Tool "${name}" not found in MCP registry.`;
    }

    const result = await tool.execute(args);
    return result;
  } catch (error: any) {
    console.error("MCP Tool Error:", error.message);
    return "⚠️ Error while executing hospital service. Please try again later.";
  }
};
