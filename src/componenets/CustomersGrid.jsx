import { useFetchCustomers } from "../hooks/useFetchCustomers";
import { useFetchTransactions } from "../hooks/useFetchTransactions";
import { CustomerTable } from "./CustomerTable";
import { Card } from "./Card";

export const CustomersGrid = () => {
  const transactions = useFetchTransactions();
  const customers = useFetchCustomers();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 dark:bg-gray-900">
      {customers.map((customer) => {
        return (
          <Card key={customer.id} title={customer.name}>
            <CustomerTable transactions={transactions} customer={customer} />
          </Card>
        );
      })}
    </div>
  );
};
