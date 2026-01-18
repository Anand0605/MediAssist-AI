import { runRAG } from "../services/rag.service";
import { safetyCheck } from "../services/safety.service";

export const chatHandler = async (req, res) => {
  const { message } = req.body;

  if (safetyCheck(message)) {
    return res.json({
      reply: "⚠️ This may be an emergency. Please contact hospital immediately.",
    });
  }

  // dummy context for now (vector DB later)
  const context = "Hospital OPD timing is 9 AM to 5 PM.";

  const reply = await runRAG(message, context);
  res.json({ reply });
};
