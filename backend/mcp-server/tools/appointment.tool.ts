export const getAppointmentStatus = async ({ patientId }) => {
  const appointment = await Appointment.findOne({ patientId });
  return appointment
    ? `Your appointment is on ${appointment.date}`
    : "No appointment found";
};
