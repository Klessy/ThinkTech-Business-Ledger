import { Card, List } from "antd";

function TopExpenses({
  transactions,
}) {
  const topExpenses =
    transactions
      .filter(
        (item) =>
          item.type === "Expense"
      )
      .sort(
        (a, b) =>
          b.amount - a.amount
      )
      .slice(0, 5);

  return (
    <Card title="Top Expenses">
      <List
        dataSource={topExpenses}
        renderItem={(item) => (
          <List.Item>
            {item.description}
            {" - "}
            ₦
            {item.amount.toLocaleString()}
          </List.Item>
        )}
      />
    </Card>
  );
}

export default TopExpenses;