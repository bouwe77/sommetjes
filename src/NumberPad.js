import React, { useCallback, useState } from "react";

export default function NumberPad({ setNumber, clear }) {
  return (
    <div>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
        <div key={number}>
          <button onClick={() => setNumber(number)}>{number}</button>
        </div>
      ))}
      <button onClick={() => setNumber("0")}>0</button>
      <button onClick={clear}>CLR</button>
    </div>
  );
}

export function useNumberConcatenater(cb) {
  const [numberAsString, setNumberAsString] = useState(null);

  function concatenateNumber(number) {
    const newNumberAsString = `${
      numberAsString ? numberAsString : ""
    }${number}`;

    // Validate is numeric and is max 6 characters long.
    if (isNaN(parseFloat(newNumberAsString))) return;
    if (newNumberAsString.length > 6) return;

    setNumberAsString(newNumberAsString);
    cb(newNumberAsString);
  }

  const clearNumber = useCallback(() => {
    setNumberAsString(null);
    cb(null);
  }, [cb]);

  return { concatenateNumber, clearNumber };
}
