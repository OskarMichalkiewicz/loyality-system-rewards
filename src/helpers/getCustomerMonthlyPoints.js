export const getCustomerMonthlyPoints = (monthlyTransactions) => {
  const months = Object.keys(monthlyTransactions);

  return months.reduce((acc, month) => {
    const pointsPerMonth = monthlyTransactions[month].reduce(
      (monthSum, transaction) => {
        return monthSum + transaction.loyalityPoints;
      },
      0,
    );
    acc[month] = pointsPerMonth;
    return acc;
  }, {});
};
