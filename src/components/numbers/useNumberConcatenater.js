import { useCallback, useState } from "react";

export default function useNumberConcatenater(cb) {
  const [numberAsString, setNumberAsString] = useState(null);

  function concatenateNumber(number) {
    const newNumberAsString = `${
      numberAsString ? numberAsString : ""
    }${number}`;

    // Validate is numeric and is max 6 characters long.
    if (isNaN(parseFloat(newNumberAsString))) return;
    if (newNumberAsString.length > 6) return;

    // Number cannot start with 0.
    if (
      newNumberAsString.length > 1 &&
      newNumberAsString.substring(0, 1) === "0"
    )
      return;

    setNumberAsString(newNumberAsString);
    cb(newNumberAsString);
  }

  const clearNumber = useCallback(() => {
    setNumberAsString(null);
    cb(null);
  }, [cb]);

  return { concatenateNumber, clearNumber };
}
