import { getCustomerMonthlyPoints } from "./helpers/getCustomerMonthlyPoints";
import { getQuaterlyPoints } from "./helpers/getQuaterlyPoints";
import { sortTransactionsMonthly } from "./helpers/sortTransactionsMonthly";
import { useFetchCustomers } from "./hooks/useFetchCustomers";
import { useFetchTransactions } from "./hooks/useFetchTransactions";

function App() {
  const transactions = useFetchTransactions();
  const customers = useFetchCustomers();

  return (
    <>
      {customers.map((customer) => {
        return (
          <div key={customer.id}>
            <h4>{customer.name}</h4>
            <div>
              <pre>
                  {JSON.stringify(getQuaterlyPoints(getCustomerMonthlyPoints(sortTransactionsMonthly(customer, transactions))))}
              </pre>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
