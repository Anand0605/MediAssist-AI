import Report from "../../src/models/Report";

interface ReportArgs {
  patientId: string;
  reportName?: string;
}

export const reportTool = async ({
  patientId,
  reportName,
}: ReportArgs) => {
  const filter: any = { patientId };
  if (reportName) filter.reportName = reportName;

  const reports = await Report.find(filter);

  if (!reports.length) {
    return "No lab reports found for this patient.";
  }

  return reports
    .map(
      (r) => `
🧾 Report Name: ${r.reportName}
Status: ${r.status.toUpperCase()}
Generated At: ${
        r.generatedAt
          ? new Date(r.generatedAt).toDateString()
          : "Pending"
      }
`
    )
    .join("\n---------------------\n");
};
