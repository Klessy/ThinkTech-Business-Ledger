
// import { Card, Statistic, Row, Col } from "antd";
// import { useLedger } from "../context/LedgerContext";

// const income = transactions
//   .filter(t => t.type === "Income")
//   .reduce((a,b) => a + b.amount,0);

// const expense = transactions
//   .filter(t => t.type === "Expense")
//   .reduce((a,b) => a + b.amount,0);

// const profit = income - expense;

// export default DailyReport;

import { Card, Statistic, Row, Col } from "antd";
import { useLedger } from "../context/LedgerContext";

function DailyReport() {
  const { transactions } = useLedger();

  const today = new Date().toISOString().split("T")[0];

  const dailyTransactions = transactions.filter(
    (item) => item.date === today
  );

  const totalSales = dailyTransactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = dailyTransactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const netProfit = totalSales - totalExpenses;

  return (
    <Card title="Daily Report">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Statistic
            title="Sales"
            value={totalSales}
            prefix="₦"
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="Expenses"
            value={totalExpenses}
            prefix="₦"
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="Profit"
            value={netProfit}
            prefix="₦"
          />
        </Col>
      </Row>
    </Card>
  );
}

export default DailyReport;