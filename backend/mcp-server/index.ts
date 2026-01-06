import { tools } from "./registry";

export const runTool = async (name, args) => {
  const tool = tools.find(t => t.name === name);
  if (!tool) throw new Error("Tool not found");
  return tool.execute(args);
};
