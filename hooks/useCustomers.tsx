import useLog from "./useLog";
import useAsyncStorage from "./useAsyncStorage";

function useCustomers() {
  const [customers, setCustomers] = useAsyncStorage<string[]>({
    initialValue: [],
    key: "customers",
  });

  useLog(customers);

  const addCustomer = (name: string) => {
    if (name) {
      setCustomers([...customers, name]);
    }
  };

  const deleteCustomer = (name: string) => {
    setCustomers(customers.filter((customer) => customer !== name));
  };

  return { customers, addCustomer, deleteCustomer };
}

export default useCustomers;
