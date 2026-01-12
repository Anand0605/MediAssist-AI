import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  doctor: String,
  date: String,
  status: String,
});

export default mongoose.model("Appointment",  appointmentSchema);
