import { Row, Col } from "antd";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import TransactionSummaryCards from "../components/TransactionSummaryCards";
import { useLedger } from "../context/LedgerContext";

function Transactions() {
  const {
    transactions,
    setTransactions,
  } = useLedger();

  return (
    <>
      <h2>Transaction Management</h2>
      <TransactionSummaryCards
        transactions={transactions}
      />

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <TransactionForm
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Col>

        <Col xs={24} lg={16}>
          <TransactionTable
            transactions={transactions}
          />
        </Col>
      </Row>
    </>
  );
}

export default Transactions;