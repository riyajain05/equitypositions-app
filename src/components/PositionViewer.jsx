import React from "react";
import { processTransactions } from "./logic/transactionProcessor";

const PositionViewer = ({ transactions }) => {
  const positions = processTransactions(transactions);

  return (
    <div className="position-viewer">
      <h2>Current Positions</h2>
      <ul>
        {Object.entries(positions).map(([code, qty]) => (
          <li key={code}>
            <span className="security">{code}</span>
            <span className="quantity">{qty > 0 ? "+" : ""}{qty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositionViewer;