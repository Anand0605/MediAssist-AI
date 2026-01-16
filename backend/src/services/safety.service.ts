export const safetyCheck = (query: string) => {
  const emergencyKeywords = ["chest pain", "breathing issue", "heart attack"];
  return emergencyKeywords.some(k => query.toLowerCase().includes(k));
};
