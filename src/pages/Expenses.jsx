import { useLedger } from "../context/LedgerContext";
import TransactionTable from "../components/TransactionTable";

function Expenses() {
  const { transactions } = useLedger();

  const expenses =
    transactions.filter(
      (item) => item.type === "Expense"
    );

  return (
    <TransactionTable
      transactions={expenses}
    />
  );
}

export default Expenses;