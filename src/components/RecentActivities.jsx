import { Card, List, Tag } from "antd";

function RecentActivities({
  transactions,
}) {
  const recentActivities =
    [...transactions]
      .sort(
        (a, b) =>
          new Date(
            b.createdAt || b.date
          ) -
          new Date(
            a.createdAt || a.date
          )
      )
      .slice(0, 5);

  return (
    <Card title="Recent Activities">
      <List
        dataSource={
          recentActivities
        }
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                item.description
              }
              description={
                item.date
              }
            />

            <div>
              <Tag
                color={
                  item.type ===
                  "Income"
                    ? "green"
                    : "red"
                }
              >
                {item.type}
              </Tag>

              <strong>
                ₦
                {item.amount.toLocaleString()}
              </strong>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default RecentActivities;