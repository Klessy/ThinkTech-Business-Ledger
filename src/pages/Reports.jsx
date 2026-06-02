import {
  Row,
  Col,
  Button,
  Card,
} from "antd";

import DailyReport from "./DailyReport";
import MonthlyReport from "./MonthlyReport";
import exportExcel from "../utility/Excel";
import { useLedger } from "../context/LedgerContext";

function Reports() {
   const { transactions } = useLedger();
   
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <DailyReport />
        </Col>

        <Col span={12}>
          <MonthlyReport />
        </Col>
      </Row>

      <br />

      {/* <Button type="primary">
        Export Excel
      </Button> */}

    <Button
      type="primary"
      onClick={() =>
        exportExcel(transactions)
        }
    >
      Export Excel
    </Button>

      <Button
        style={{ marginLeft: 10 }}
        onClick={() => window.print()}
      >
        Print Report
      </Button>
    </>
  );
}

export default Reports;