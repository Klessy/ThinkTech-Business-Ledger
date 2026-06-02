import { useLedger } from "../context/LedgerContext";
import TransactionTable from "../components/TransactionTable";
import {
  Card,
  Statistic,
} from "antd";

function Sales() {
  const { transactions } = useLedger();

  const sales =
    transactions.filter(
      (item) => item.type === "Income"
    );

    const totalSales =
      sales.reduce(
        (sum, item) =>
          sum + item.amount,
        0
  );

  return (
    <>
    <Card
      style={{
        marginBottom: 24,
      }}
  >
    <Statistic
      title="Total Sales"
      value={totalSales}
      prefix="₦"
    />
    </Card>
    <TransactionTable
      transactions={sales}
    />
    </>
  );
}

export default Sales;