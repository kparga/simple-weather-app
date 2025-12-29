import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NextFiveDays } from "@/app/components/NextFiveDays";
import { mockFetch } from "@/app/lib/mockFetch";
import { promises as fs } from "fs";

describe("NextFiveDays Component test", () => {
  it("renders a loading state when no data is available ", async () => {
    const file = await fs.readFile(
          process.cwd() + "/public/la_dummy.json",
          "utf8",
        );
        window.fetch = mockFetch(JSON.parse(file));
    render(<NextFiveDays city={"Los Angeles"} />);
    const children = screen.getByText('Loading')
    expect(children).toBeInTheDocument()
  });
});
