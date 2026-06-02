import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell
} from "recharts";

import { Row, Col, Card } from "antd";

function DashboardCharts({ transactions }) {
  const salesData = [
    { day: "Mon", sales: 120000 },
    { day: "Tue", sales: 250000 },
    { day: "Wed", sales: 180000 },
    { day: "Thu", sales: 320000 },
    { day: "Fri", sales: 400000 },
    { day: "Sat", sales: 550000 },
  ];

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((a, b) => a + b.amount, 0);

  const pieData = [
    {
      name: "Income",
      value: income,
    },

    {
      name: "Expense",
      value: expense,
    },
  ];

  const COLORS = [
    "#52c41a",
    "#ff4d4f",
  ];

  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} lg={16}>
        <Card title="Sales Trend">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#1677ff"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} lg={8}>
        <Card title="Income vs Expense">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={90}
              >
                {pieData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Col>
    </Row>
  );
}

export default DashboardCharts;