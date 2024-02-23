import { useEffect, useState } from "react";
import { fetchCustomers } from "../mocks/fetchCustomers";

export const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([]);

  const fetch = async () => {
    setCustomers(await fetchCustomers());
  };

  useEffect(() => {
    fetch();
  }, []);

  return customers;
};

