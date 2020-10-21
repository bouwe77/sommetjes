import React, { useEffect, useState } from "react";

export default function NumberPad({ setNumber }) {
  const [numberAsString, setNumberAsString] = useState(null);

  function handleNumberClick(buttonValue) {
    const newNumberAsString = `${
      numberAsString ? numberAsString : ""
    }${buttonValue}`;
    if (isNaN(parseFloat(newNumberAsString))) return;
    setNumberAsString(newNumberAsString);
  }

  function handleClearClick() {
    setNumberAsString(null);
  }

  useEffect(() => {
    setNumber(numberAsString ? numberAsString : null);
  }, [numberAsString, setNumber]);

  return (
    <div>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
        <div key={number}>
          <button onClick={() => handleNumberClick(number)}>{number}</button>
        </div>
      ))}
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button onClick={handleClearClick}>CLR</button>
    </div>
  );
}
