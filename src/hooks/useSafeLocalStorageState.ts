import { useCallback, useState } from "react";


export function useSafeLocalStorageState(key: string, initialValue: any) {
  const [storedValueState, setStoredValue] = useState<{
    value: any;
    key: string;
    isStoredValue: boolean;
    isInitialValue: boolean;
  }>(() => {
    if (typeof window === "undefined") {
      return {
        value: initialValue,
        key,
        isStoredValue: false,
        isInitialValue: true,
      };
    }

    try {
      const item = window.localStorage.getItem(key);
      return item
        ? {
            value: JSON.parse(item),
            key,
            isStoredValue: true,
            isInitialValue: false,
          }
        : {
            value: initialValue,
            key,
            isStoredValue: false,
            isInitialValue: true,
          };
    } catch (error) {
      console.error(error);
      return {
        value: initialValue,
        key,
        isStoredValue: false,
        isInitialValue: true,
      };
    }
  });

  const reduceValue = useCallback(
    (value: any | ((prev: any) => any)) => {
      return value instanceof Function ? value(storedValueState) : value;
    },
    [storedValueState]
  );

  const setValue = useCallback(
    (value: any | ((prev: any) => any), removeIfFailed = false) => {
      if (typeof window === "undefined") {
        setStoredValue({
          value: reduceValue(value),
          key,
          isStoredValue: false,
          isInitialValue: false,
        });
      }

      try {
        const nextValue = reduceValue(value);
        window.localStorage.setItem(key, JSON.stringify(nextValue));
        setStoredValue({
          value: nextValue,
          key,
          isStoredValue: true,
          isInitialValue: false,
        });
      } catch (error) {
        console.error(error);
        try {
          removeIfFailed && window.localStorage.removeItem(key);
        } catch (e) {
          console.error(e);
        }
        setStoredValue({
          value: reduceValue(value),
          key,
          isStoredValue: false,
          isInitialValue: false,
        });
      }
    },
    [key, reduceValue]
  );
  return [storedValueState, setValue] as const;
}
