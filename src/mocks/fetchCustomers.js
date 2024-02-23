import customers from "../../data/customers.json";

export const fetchCustomers = async () => {
  return new Promise((resolve) => {
    const timeout = Math.floor(Math.random() * 10) * 1000;
    setTimeout(() => {
      resolve(customers);
    }, timeout);
  });
};
