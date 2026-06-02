import { Row, Col, Card, Statistic } from "antd";

function TransactionSummaryCards({
  transactions,
}) {
  const totalSales = transactions
    .filter(
      (item) =>
        item.type === "Income"
    )
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const totalExpenses =
    transactions
      .filter(
        (item) =>
          item.type ===
          "Expense"
      )
      .reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

  const balance =
    totalSales - totalExpenses;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Sales"
            value={totalSales}
            prefix="₦"
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Expenses"
            value={totalExpenses}
            prefix="₦"
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Balance"
            value={balance}
            prefix="₦"
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Transactions"
            value={
              transactions.length
            }
          />
        </Card>
      </Col>
    </Row>
  );
}

export default TransactionSummaryCards;