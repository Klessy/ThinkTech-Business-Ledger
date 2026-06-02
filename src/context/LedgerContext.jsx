import { createContext, useContext, useState, useEffect } from "react";
import sampleData from "../data/data";

const LedgerContext = createContext();

export function LedgerProvider({ children }) {
  // const [transactions, setTransactions] =
  //   useState(sampleData);

  const [transactions, setTransactions] =
  useState(() => {
    const savedData =
      localStorage.getItem(
        "ledgerTransactions"
      );

    return savedData
      ? JSON.parse(savedData)
      : sampleData;
  });

  useEffect(() => {
  localStorage.setItem(
    "ledgerTransactions",
    JSON.stringify(transactions)
  );
}, [transactions]);

  return (
    <LedgerContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </LedgerContext.Provider>
  );
}

export const useLedger = () =>
  useContext(LedgerContext);