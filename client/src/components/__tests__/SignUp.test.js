import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

// Component
import SignUp from "../pages/SignUp/SignUp";

describe("(Component) SignUp", () => {
  it("Should render all key form elements", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const username = screen.getByTestId("username-input");
    const email = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signUpButton = screen.getByTestId("signup-btn");

    expect(username).toBeInstanceOf(HTMLInputElement);
    expect(email).toBeInstanceOf(HTMLInputElement);
    expect(passwordInput).toBeInstanceOf(HTMLInputElement);
    expect(signUpButton).toBeInstanceOf(HTMLButtonElement);
  });
});
