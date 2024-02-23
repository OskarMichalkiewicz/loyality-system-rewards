import { calculatePoints } from "./calculatePoints";

export const sortTransactionsMonthly = ({ id }, transactions) => {
  const customerTransactions = transactions.filter((transaction) => transaction.customer_id === id);

  const monthlyTransactions = customerTransactions.reduce((acc, transaction) => {
    const month = transaction.date.toLocaleString("default", { month: "long" });
    if (!acc[month]) {
      acc[month] = [];
    }
    const loyalityPoints = calculatePoints(transaction.total);
    return {
      ...acc,
      [month]: [...acc[month], { ...transaction, loyalityPoints }],
    };
  }, {});

  return monthlyTransactions;
};
