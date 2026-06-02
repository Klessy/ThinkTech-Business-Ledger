// import { useState } from "react";
// import { Row, Col } from "antd";

// import sampleData from "../data/data";
// import SummaryCards from "../components/SummaryCard";
// import TransactionForm from "../components/TransactionForm";
// import TransactionTable from "../components/TransactionTable";

// function Dashboard() {
//   const [transactions, setTransactions] = useState(sampleData);

//   return (
//     <>
//       <SummaryCards transactions={transactions} />

//       <Row gutter={20}>
//         <Col span={8}>
//           <TransactionForm
//             transactions={transactions}
//             setTransactions={setTransactions}
//           />
//         </Col>

//         <Col span={16}>
//           <TransactionTable transactions={transactions} />
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default Dashboard;

import { useState } from "react";

import { useLedger } from "../context/LedgerContext";


import { Row, Col } from "antd";

import sampleData from "../data/data";

import SummaryCards from "../components/SummaryCard";
import DashboardCharts from "../components/DashboardCharts";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";

function Dashboard() {
  // const [transactions, setTransactions] =
  //   useState(sampleData);

  const { transactions, setTransactions } =
  useLedger();

  return (
    <>
      <SummaryCards
        transactions={transactions}
      />

      <DashboardCharts 
        transactions={transactions}
      />

      <Row gutter={[20, 20]}>
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

export default Dashboard;