import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI as string,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY as string,
  GROQ_API_KEY: process.env.GROQ_API_KEY as string,
};
