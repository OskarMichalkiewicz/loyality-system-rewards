import transactions from "../../data/transactions.json";

export const fetchTransactions = async () => {
  return new Promise((resolve) => {
    const timeout = Math.floor(Math.random() * 10) * 1000;
    setTimeout(() => {
      resolve(
        transactions.map((transaction) => ({
          ...transaction,
          date: new Date(transaction.date),
        })),
      );
    }, timeout);
  });
};
