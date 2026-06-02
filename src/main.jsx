import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { LedgerProvider } from "./context/LedgerContext";
import 'antd/dist/reset.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LedgerProvider>
        <App />
      </LedgerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
