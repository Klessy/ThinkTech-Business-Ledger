import * as XLSX from "xlsx";

const exportExcel = (data) => {
  const ws =
    XLSX.utils.json_to_sheet(data);

  const wb =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    wb,
    ws,
    "Report"
  );

  XLSX.writeFile(
    wb,
    "business-report.xlsx"
  );
};

export default exportExcel;