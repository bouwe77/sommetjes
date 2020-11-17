import React, { useCallback, useState } from "react";
import Button from "./Button";
import { useKeyPress } from "./hooks/useKeyPress";

export default function NumberPad({ setNumber, clear }) {
  useKeyPress("1", () => setNumber("1"));
  useKeyPress("2", () => setNumber("2"));
  useKeyPress("3", () => setNumber("3"));
  useKeyPress("4", () => setNumber("4"));
  useKeyPress("5", () => setNumber("5"));
  useKeyPress("6", () => setNumber("6"));
  useKeyPress("7", () => setNumber("7"));
  useKeyPress("8", () => setNumber("8"));
  useKeyPress("9", () => setNumber("9"));
  useKeyPress("0", () => setNumber("0"));

  return (
    <>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number, index) => (
        <span key={number}>
          <NumberButton onClick={() => setNumber(number)}>
            {number}
          </NumberButton>
          {(index + 1) % 3 === 0 && <br />}
        </span>
      ))}
      <NumberButton style={{ visibility: "hidden" }}>0</NumberButton>
      <NumberButton onClick={() => setNumber("0")}>0</NumberButton>
      <NumberButton onClick={clear}>wis</NumberButton>
    </>
  );
}

function NumberButton(props) {
  return (
    <Button className="number-button" {...props}>
      {props.children}
    </Button>
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
