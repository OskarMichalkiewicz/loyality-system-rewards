import useFetchCustomers from "../hooks/useFetchCustomers";
import useFetchTransactions from "../hooks/useFetchTransactions";
import CustomerTable from "./CustomerTable";
import Card from "./Card";
import Loader from "./Loader"

const CustomersGrid = () => {
  const [transactions,  transactionsLoading] = useFetchTransactions();
  const [customers,  customersLoading] = useFetchCustomers();

  return (
    <>
      {transactionsLoading || customersLoading ?
        <Loader />
        : 

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-900">
        {customers.map((customer) => {
          return (
            <Card key={customer.id} title={customer.name}>
              <CustomerTable transactions={transactions} customer={customer} />
            </Card>
          );
        })}
        </div>
      }
    </>
  );
};
export default CustomersGrid;
