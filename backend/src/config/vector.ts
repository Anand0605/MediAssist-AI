import { Chroma } from "@langchain/community/vectorstores/chroma";
import { embeddings } from "../services/embedding.service";

export const vectorStore = new Chroma(embeddings, {
  collectionName: "hospital-docs",
  url: "http://localhost:8000", // chroma server
});
