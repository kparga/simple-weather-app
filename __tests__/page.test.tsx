import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { mockFetch } from "@/app/lib/mockFetch";
import { promises as fs } from "fs";

describe("Page test", () => {
  it("renders a heading", async () => {
    const file = await fs.readFile(
      process.cwd() + "/__tests__/la_dummy.json",
      "utf8",
    );
    window.fetch = mockFetch(JSON.parse(file));
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
