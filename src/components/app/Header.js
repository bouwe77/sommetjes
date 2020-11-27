import React from "react";

export default function Header({ children }) {
  return (
    <header className="header">
      <div className="logo">Sommetjes</div>
      <div className="nav">{children} </div>
    </header>
  );
}
