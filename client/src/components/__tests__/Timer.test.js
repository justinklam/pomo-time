import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// Component
import Timer from "../pages/Timer/Timer";

describe("(Component) Timer", () => {
  test("it should render /Timer", () => {
    render(
      <BrowserRouter>
        <Timer />
      </BrowserRouter>
    );
  });

  test("it should render all button elements", () => {
    render(
      <BrowserRouter>
        <Timer />
      </BrowserRouter>
    );
    const play = screen.getByTestId("play-btn");
    const settings = screen.getByTestId("settings-btn");

    expect(play).toBeInstanceOf(HTMLButtonElement);
    expect(settings).toBeInstanceOf(HTMLButtonElement);
  });
});
