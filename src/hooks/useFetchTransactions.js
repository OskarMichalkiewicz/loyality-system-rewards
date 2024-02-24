import { useEffect, useState } from "react";
import fetchTransactions from "../mocks/fetchTransactions";

const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setTransactions(await fetchTransactions());
    setLoading(false)
  };

  useEffect(() => {
    fetch();
  }, []);

  return [ transactions, loading ];
};

export default useFetchTransactions;
