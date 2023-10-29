import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaruantMenu from "../RestaruantMenu";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu components", async () => {
  await act(async () => render(<RestaruantMenu />));
});
