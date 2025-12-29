import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LastUpdatedFooter } from "@/app/components/LastUpdatedFooter";

describe("LastUpdatedFooter Component test", () => {
  it("renders a date and time ", async () => {
    const fechaEnMiliseg = new Date(Date.now()).toString();
    render(<LastUpdatedFooter/>);
    const children = screen.getByText('Last Updated on '+ fechaEnMiliseg)
    expect(children).toBeInTheDocument()
  });
});
