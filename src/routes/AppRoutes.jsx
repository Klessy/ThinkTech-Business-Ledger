

import {
  Routes,
  Route
} from "react-router-dom";

import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";
import Expenses from "../pages/Expenses";
import Reports from "../pages/Reports";

import MainLayout from "../layouts/MainLayout";
import Transactions from "../pages/Transactions";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route element={<MainLayout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/sales"
          element={<Sales />}
        />

        <Route
          path="/expenses"
          element={<Expenses />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;