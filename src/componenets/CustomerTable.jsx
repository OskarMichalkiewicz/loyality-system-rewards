import getCustomerMonthlyPoints from "../helpers/getCustomerMonthlyPoints";
import sortTransactionsMonthly from "../helpers/sortTransactionsMonthly";
import getQuaterlyPoints from "../helpers/getQuaterlyPoints";

const CustomerTable = ({ customer, transactions }) => {
  const transactionsSorted = sortTransactionsMonthly(customer, transactions);
  const monthlyPoints = getCustomerMonthlyPoints(transactionsSorted);
  const quaterlyPoints = getQuaterlyPoints(monthlyPoints);

  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium border-gray-700 bg-gray-800">
        <tr>
          <th className="px-6 py-4">Month</th>
          <th className="px-6 py-4">Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(monthlyPoints).map((month) => {
          const summary = monthlyPoints[month];
          return (
            <tr
              key={month}
              className="border-b border-gray-700 bg-gray-800"
            >
              <td className="whitespace-nowrap px-6 py-4">{month}</td>
              <td className="whitespace-nowrap px-6 py-4">{summary}</td>
            </tr>
          );
        })}
        <tr className="bg-gray-800">
          <td className="font-bold whitespace-nowrap px-6 py-4">Total</td>
          <td className="font-bold whitespace-nowrap px-6 py-4">{quaterlyPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomerTable;
