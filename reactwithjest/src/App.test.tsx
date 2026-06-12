import { render, screen } from "@testing-library/react";
import App from "./App";

import { test, expect } from "vitest";
test("renders get started header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
});
