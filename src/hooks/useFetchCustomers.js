import { useEffect, useState } from "react";
import fetchCustomers from "../mocks/fetchCustomers";

const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setCustomers(await fetchCustomers());
    setLoading(false)
  };

  useEffect(() => {
    fetch();
  }, []);

  return [ customers, loading ];
};

export default useFetchCustomers;
