import React, { useCallback, useState } from "react";

export default function NumberPad({ setNumber, clear }) {
  return (
    <>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number, index) => (
        <span key={number}>
          <Button onClick={() => setNumber(number)}>{number}</Button>
          {(index + 1) % 3 === 0 && <br />}
        </span>
      ))}
      <Button style={{ visibility: "hidden" }}>0</Button>
      <Button onClick={() => setNumber("0")}>0</Button>
      <Button onClick={clear}>WIS</Button>
    </>
  );
}

function Button(props) {
  return (
    <button className="number-button" {...props}>
      {props.children}
    </button>
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
