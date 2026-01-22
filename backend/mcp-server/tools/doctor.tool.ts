import mongoose from "mongoose";

/**
 * Inline Doctor Model
 * (You can move this to src/models later)
 */
const Doctor = mongoose.model(
  "Doctor",
  new mongoose.Schema({
    name: String,
    department: String,
    opdTime: String,
    available: Boolean,
  })
);

interface DoctorArgs {
  doctorName?: string;
  department?: string;
}

export const doctorTool = async ({
  doctorName,
  department,
}: DoctorArgs) => {
  if (doctorName) {
    const doctor = await Doctor.findOne({ name: doctorName });

    if (!doctor) {
      return `Doctor ${doctorName} not found in hospital records.`;
    }

    return `
👨‍⚕️ Doctor Information:
Name: ${doctor.name}
Department: ${doctor.department}
OPD Timing: ${doctor.opdTime}
Status: ${doctor.available ? "Available Today" : "Not Available Today"}
`;
  }

  if (department) {
    const doctors = await Doctor.find({
      department,
      available: true,
    });

    if (!doctors.length) {
      return `No doctors available today in ${department} department.`;
    }

    return doctors
      .map(
        (d) =>
          `${d.name} | OPD: ${d.opdTime} | Available`
      )
      .join("\n");
  }

  return "Please provide doctor name or department.";
};
