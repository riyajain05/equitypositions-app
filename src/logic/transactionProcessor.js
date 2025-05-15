export const processTransactions = (transactions) => {
    const tradeMap = new Map();
  
    for (const tx of transactions) {
      const existing = tradeMap.get(tx.tradeId);
  
      if (!existing || tx.version > existing.version) {
        tradeMap.set(tx.tradeId, tx);
      }
    }
  
    const positions = {};
  
    for (const [, tx] of tradeMap) {
      if (tx.action === "CANCEL") continue;
  
      const sign = tx.buySell === "Buy" ? 1 : -1;
      positions[tx.securityCode] = (positions[tx.securityCode] || 0) + sign * tx.quantity;
    }
  
    return positions;
  };