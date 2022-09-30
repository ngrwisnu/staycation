import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";

// test("Should not allowed when there is a disabled props", () => {
//   const { container } = render(<Button isDisabled></Button>);
//   //   const button = screen.getByRole("button");
//   expect(container.classList.contains("disabled")).toBe(true);
// });

test("Should render loading text / spinner", () => {
  render(<Button isLoading></Button>);
  const button = screen.getByText(/loading/i);
  expect(button).toBeInTheDocument();
});

test("Should render tag <a> if the type is link and has props.isExternal", () => {
  render(<Button type="link" isExternal></Button>);
  const button = screen.getByRole("a");
  expect(button).toBeInTheDocument();
});

test("Should render tag <Link> if the type is link and has no props.isExternal", () => {
  render(
    <Router>
      <Button to="" type="link"></Button>
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
