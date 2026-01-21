import { appointmentTool } from "./tools/appointment.tool";
import { reportTool } from "./tools/report.tool";
import { emergencyTool } from "./tools/emergency.tool";
import { doctorTool } from "./tools/doctor.tool";

export const tools = [
  {
    name: "getAppointmentStatus",
    execute: appointmentTool,
  },
  {
    name: "getReportStatus",
    execute: reportTool,
  },
  {
    name: "handleEmergency",
    execute: emergencyTool,
  },
  {
    name: "getDoctorInfo",
    execute: doctorTool,
  },
];
