import { useLedger } from "../context/LedgerContext";
import TransactionTable from "../components/TransactionTable";

function Sales() {
  const { transactions } = useLedger();

  const sales =
    transactions.filter(
      (item) => item.type === "Income"
    );

  return (
    <TransactionTable
      transactions={sales}
    />
  );
}

export default Sales;