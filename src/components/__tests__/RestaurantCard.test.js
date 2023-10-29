import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should render Restaurant Card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Haldiram's Restaurant");

  expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card with promoted label", () => {
  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardWithLabel resData={MOCK_DATA} />);

  const name = screen.getByText("Promoted");

  expect(name).toBeInTheDocument();
});
