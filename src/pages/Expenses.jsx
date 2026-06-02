import { useLedger } from "../context/LedgerContext";
import TransactionTable from "../components/TransactionTable";
import {
  Card,
  Statistic,
} from "antd";


function Expenses() {
  const { transactions } = useLedger();

  const expenses =
    transactions.filter(
      (item) => item.type === "Expense"
    );

  const totalExpenses =
    expenses.reduce(
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
      title="Total Expenses"
      value={totalExpenses}
      prefix="₦"
    />
    </Card>
    <TransactionTable
      transactions={expenses}
    />
    </>
  );
}

export default Expenses;