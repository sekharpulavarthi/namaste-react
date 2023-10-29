import { Sum } from "../Sum";

test("Sum function should calculate the sum of 2 numbers", () => {
  const result = Sum(3, 4);

  //This line is know as Assertion
  expect(result).toBe(7);
});
