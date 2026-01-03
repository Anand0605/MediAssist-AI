export const generateAIResponse = async (query: string) => {
  const context = await vectorSearch(query);

  const prompt = `
  You are a hospital helpdesk assistant.
  Answer strictly from context.
  Context: ${context}
  Question: ${query}
  `;

  return await llm.generate(prompt);
};
