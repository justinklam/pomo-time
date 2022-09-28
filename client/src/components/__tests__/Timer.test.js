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
});
