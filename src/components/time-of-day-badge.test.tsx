import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TimeOfDayBadge } from "./time-of-day-badge";

describe("TimeOfDayBadge", () => {
  it("renders TimeOfDayBadge", () => {
    render(<TimeOfDayBadge timeOfDay="morning" />);

    const badge = screen.getByText("朝");

    expect(badge).toBeInTheDocument();
  });
});
