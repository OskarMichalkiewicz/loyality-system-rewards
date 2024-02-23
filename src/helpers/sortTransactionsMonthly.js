import { calculatePoints } from "./calculatePoints";

export const sortTransactionsMonthly = ({ id }, transactions) => {
  const customerTransactions = transactions.filter(
    (transaction) => transaction.customer_id === id,
  );

  const monthlyTransactions = customerTransactions.reduce(
    (acc, transaction) => {
      const month = transaction.date.toLocaleString("default", {
        month: "long",
      });
      if (!acc[month]) {
        acc[month] = { order: transaction.date.getMonth(), values: [] };
      }
      const loyalityPoints = calculatePoints(transaction.total);
      return {
        ...acc,
        [month]: {
          ...acc[month],
          values: [...acc[month].values, { ...transaction, loyalityPoints }],
        },
      };
    },
    {},
  );
  const monthsSorted = Object.keys(monthlyTransactions).sort(
    (a, b) => monthlyTransactions[a].order - monthlyTransactions[b].order,
  );
  const transactionsSorted = monthsSorted.reduce((acc, month) => {
    if (!acc[month]) {
      acc[month] = [];
    }
    return {
      ...acc,
      [month]: [...acc[month],  ...monthlyTransactions[month].values ],
    };
  }, {});

  return transactionsSorted;
};
