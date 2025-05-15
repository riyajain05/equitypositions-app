import { processTransactions } from "./logic/transactionProcessor";

test("correctly calculates positions", () => {
  const txs = [
    { transactionId: 1, tradeId: "1", version: 1, securityCode: "REL", quantity: 50, action: "INSERT", buySell: "Buy" },
    { transactionId: 2, tradeId: "2", version: 1, securityCode: "ITC", quantity: 40, action: "INSERT", buySell: "Sell" },
    { transactionId: 3, tradeId: "3", version: 1, securityCode: "INF", quantity: 70, action: "INSERT", buySell: "Buy" },
    { transactionId: 4, tradeId: "1", version: 2, securityCode: "REL", quantity: 60, action: "UPDATE", buySell: "Buy" },
    { transactionId: 5, tradeId: "2", version: 2, securityCode: "ITC", quantity: 30, action: "CANCEL", buySell: "Buy" },
    { transactionId: 6, tradeId: "4", version: 1, securityCode: "INF", quantity: 20, action: "INSERT", buySell: "Sell" },
  ];

  const result = processTransactions(txs);

  expect(result).toEqual({ REL: 60, ITC: 0, INF: 50 });
});
