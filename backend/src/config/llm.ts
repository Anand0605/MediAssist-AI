import { ChatGroq } from "@langchain/groq";
import { env } from "./env";

export const llm = new ChatGroq({
  apiKey: env.GROQ_API_KEY,
  model: "llama3-70b-8192",
  temperature: 0.2, // hospital use-case → low hallucination
});
