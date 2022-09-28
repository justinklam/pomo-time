import { render, screen } from "@testing-library/react";

// Components
import App from "../../App";

describe("App", () => {
  test("it should render /App", () => {
    render(<App />);
  });
});
