import { useEffect, useState } from "react";
import { fetchTransactions } from "../mocks/fetchTransactions";

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetch = async () => {
    setTransactions(await fetchTransactions());
  };

  useEffect(() => {
    fetch();
  }, []);

  return transactions;
};
