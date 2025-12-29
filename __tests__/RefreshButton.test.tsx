import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RefreshButton from "@/app/components/RefreshButton";

describe("RefreshButton Component test", () => {
  it("renders the button", async () => {
    render(<RefreshButton />);
    const button = screen.getByAltText("Reload");

    expect(button).toBeInTheDocument();
  });
});
