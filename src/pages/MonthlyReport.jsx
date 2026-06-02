import { Card, Statistic, Row, Col, Tag } from "antd";
import { useLedger } from "../context/LedgerContext";

function MonthlyReport() {
  const { transactions } = useLedger();

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTransactions =
    transactions.filter((item) => {
      const date = new Date(item.date);

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    });

    // const monthlyTransactions = transactions;

  const totalSales = monthlyTransactions
    .filter((item) => item.type === "Income")
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalExpenses = monthlyTransactions
    .filter((item) => item.type === "Expense")
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const netProfit =
    totalSales - totalExpenses;

  const profitMargin =
    totalSales > 0
      ? (
          (netProfit / totalSales) *
          100
        ).toFixed(1)
      : 0;

  return (
    <Card
      title="Monthly Report"
      bordered={false}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Statistic
            title="Monthly Sales"
            value={totalSales}
            prefix="₦"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Monthly Expenses"
            value={totalExpenses}
            prefix="₦"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Net Profit"
            value={netProfit}
            prefix="₦"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Transactions"
            value={
              monthlyTransactions.length
            }
          />
        </Col>
      </Row>

      <div
        style={{
          marginTop: 20,
          textAlign: "center",
        }}
      >
        <Tag
          color={
            profitMargin > 0
              ? "green"
              : "red"
          }
          style={{
            fontSize: 16,
            padding: "5px 12px",
          }}
        >
          Profit Margin: {profitMargin}%
        </Tag>
      </div>
    </Card>
  );
}

export default MonthlyReport;