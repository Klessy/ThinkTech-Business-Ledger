// import { Card, Row, Col } from "antd";

// function SummaryCards({ transactions }) {
//   const income = transactions
//     .filter((t) => t.type === "Income")
//     .reduce((acc, item) => acc + item.amount, 0);

//   const expense = transactions
//     .filter((t) => t.type === "Expense")
//     .reduce((acc, item) => acc + item.amount, 0);

//   const balance = income - expense;

//   return (
//     <Row gutter={16} style={{ marginBottom: 20 }}>
//       <Col span={8}>
//         <Card title="Total Income">
//           ₦{income.toLocaleString()}
//         </Card>
//       </Col>

//       <Col span={8}>
//         <Card title="Total Expense">
//           ₦{expense.toLocaleString()}
//         </Card>
//       </Col>

//       <Col span={8}>
//         <Card title="Balance">
//           ₦{balance.toLocaleString()}
//         </Card>
//       </Col>
//     </Row>
//   );
// }

// export default SummaryCards;

import { Card, Row, Col, Statistic } from "antd";
import {
  DollarOutlined,
  WalletOutlined,
  RiseOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

function SummaryCards({ transactions }) {
  const totalSales = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalExpenses = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const netProfit = totalSales - totalExpenses;

  const totalTransactions = transactions.length;

  const percentage =
  totalSales > 0
    ? (
        (netProfit / totalSales) * 100
      ).toFixed(1)
    : 0;

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Sales"
            value={totalSales}
            prefix={<DollarOutlined />}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Expenses"
            value={totalExpenses}
            prefix={<WalletOutlined />}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Net Profit"
            value={netProfit}
            prefix={<RiseOutlined />}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Transactions"
            value={totalTransactions}
            prefix={<FileTextOutlined />}
          />
        </Card>
      </Col>
      <Col>
      <Card>
        <Statistic
          title="Profit Margin"
          value={percentage}
          suffix="%"
        />
    </Card>
      </Col>
    </Row>
  );
}

export default SummaryCards;