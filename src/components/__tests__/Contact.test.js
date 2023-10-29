import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test case", () => {
  beforeAll(() => {
    console.log("Executed Before All Test cases");
  });

  beforeEach(() => {
    console.log("Executed Before Each Test case");
  });

  afterAll(() => {
    console.log("Executed After All Test cases");
  });

  afterEach(() => {
    console.log("Executed After Each Test case");
  });

  test("Should load Contact US component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact US component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact US component", () => {
    render(<Contact />);

    const inputEl = screen.getByPlaceholderText("name");

    expect(inputEl).toBeInTheDocument();
  });

  test("Should load multiple input elements inside Contact US component", () => {
    render(<Contact />);

    const inputElements = screen.getAllByRole("textbox");
    console.log(inputElements.length);
  });
});
