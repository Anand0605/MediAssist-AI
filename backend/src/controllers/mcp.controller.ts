import { Request, Response } from "express";
import { callMCP } from "../config/mcp";

/**
 * MCP Controller
 * This controller acts as a bridge between
 * Express backend and MCP server
 *
 * Route: POST /api/mcp/call
 */

export const callMCPController = async (
  req: Request,
  res: Response
) => {
  try {
    const { tool, args } = req.body;

    if (!tool) {
      return res.status(400).json({
        success: false,
        message: "Tool name is required",
      });
    }

    const result = await callMCP({
      tool,
      args,
    });

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("MCP Controller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to execute MCP tool",
    });
  }
};
