import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value, null);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== debouncedValue) {
        setDebouncedValue(value);
      }
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
