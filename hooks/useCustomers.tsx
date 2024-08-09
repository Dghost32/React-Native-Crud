import { useEffect, useState } from "react";
import useLog from "./useLog";
import useAsyncStorage from "./useAsyncStorage";

function useCustomers() {
  const [customers, setCustomers] = useState<string[]>([]);

  useLog(customers);

  useAsyncStorage({
    value: customers,
    setValue: setCustomers,
    key: "customers",
  });

  const addCustomer = (name: string) => {
    if (name) {
      setCustomers([...customers, name]);
    }
  }

  const deleteCustomer = (name: string) => {
    setCustomers(customers.filter((customer) => customer !== name));
  }

  return { customers, addCustomer, deleteCustomer };
}

export default useCustomers;
