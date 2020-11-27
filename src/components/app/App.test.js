import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("Renders the header", async () => {
  render(<App />);

  const headerText = "Sommetjes";
  const linkElement = screen.getByText(headerText);
  expect(linkElement).toBeInTheDocument();
});
