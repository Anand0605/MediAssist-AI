import Appointment from "../../src/models/Appointment";

interface AppointmentArgs {
  patientId: string;
}

export const appointmentTool = async ({ patientId }: AppointmentArgs) => {
  const appointment = await Appointment.findOne({ patientId });

  if (!appointment) {
    return "No appointment found for this patient.";
  }

  return `
📅 Appointment Details:
Doctor: ${appointment.doctor}
Date: ${appointment.date}
Status: ${appointment.status}
`;
};
