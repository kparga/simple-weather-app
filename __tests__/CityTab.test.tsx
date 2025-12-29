import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CityTab } from "@/app/components/CityTab";

describe("CityTab Component test", () => {
  it("renders a tab for each city", async () => {
    const mockCities = ["Budapest", "Barcelona", "London"];
    const selectedCity = "Budapest";
    function handleChange() {}
    render(
      <CityTab
        cities={mockCities}
        selectedCity={selectedCity}
        setSelectedCity={handleChange}
      />,
    );
    const first_tab = screen.getByText("Budapest");
    const second_tab = screen.getByText("Barcelona");
    const third_tab = screen.getByText("London");

    expect(first_tab).toBeInTheDocument();
    expect(second_tab).toBeInTheDocument();
    expect(third_tab).toBeInTheDocument();
  });
});
