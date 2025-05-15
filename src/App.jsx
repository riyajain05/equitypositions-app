import React, { useState } from "react";
import TradeForm from "./components/TradeForm";
import PositionViewer from "./components/PositionViewer";
import Tabs from "./components/Tabs";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState("form");

  const addTransaction = (txn) => {
    setTransactions((prev) => [...prev, txn]);
  };

  return (
    <div className="container">
      <h1 className="app-title">Equity Positions Manager</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "form" ? (
        <TradeForm onSubmit={addTransaction} />
      ) : (
        <PositionViewer transactions={transactions} />
      )}
    </div>
  );
};

export default App;