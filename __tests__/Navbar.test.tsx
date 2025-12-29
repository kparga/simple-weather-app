import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavBar } from "@/app/components/Navbar";

describe("Navbar Component test", () => {
  it("renders the header", async () => {
    render(
      <NavBar/>,
    );
    const title = screen.getByText("Simple Weather");

    expect(title).toBeInTheDocument();
  });
});

