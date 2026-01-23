interface EmergencyArgs {
  message: string;
}

export const emergencyTool = async ({ message }: EmergencyArgs) => {
  const emergencyKeywords = [
    "chest pain",
    "breathing problem",
    "heart attack",
    "unconscious",
    "stroke",
    "heavy bleeding",
  ];

  const isEmergency = emergencyKeywords.some((k) =>
    message.toLowerCase().includes(k)
  );

  if (isEmergency) {
    return `
🚨 EMERGENCY ALERT 🚨

Your symptoms indicate a medical emergency.
➡️ Please visit the nearest emergency department immediately.
➡️ Call local emergency services.

⚠️ This AI system cannot provide emergency medical treatment.
`;
  }

  return `
Your issue does not appear to be an emergency.
You can:
• Book an OPD appointment
• Ask for doctor availability
• Contact hospital reception
`;
};
