import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

interface Props<T> {
  value: T;
  setValue: (value: T) => void;
  key: string;
}

function useAsyncStorage<T extends unknown>(props: Props<T>) {
  const { value, setValue, key } = props;

  async function save() {
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify({
          key: value,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function restore() {
    try {
      const item = await AsyncStorage.getItem(key);
      if (item) {
        const { key: storedValue } = JSON.parse(item);
        setValue(storedValue ?? value);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    restore();

    return setValue(value);
  }, []);

  useEffect(() => {
    save();
  }, [value]);
}

export default useAsyncStorage;
