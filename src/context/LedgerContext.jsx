import { createContext, useContext, useState } from "react";
import sampleData from "../data/data";

const LedgerContext = createContext();

export function LedgerProvider({ children }) {
  const [transactions, setTransactions] =
    useState(sampleData);

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