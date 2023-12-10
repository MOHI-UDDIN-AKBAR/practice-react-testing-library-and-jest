import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("should get user from UserFrom and should Show users in UserList", () => {
  render(<App />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button", { name: /add user/i });

  fireEvent.change(nameInput, { target: { value: "samir" } });
  user.type(emailInput, "samir@gmail.com");
  fireEvent.click(button);
  const name = screen.getByRole("cell", { name: "samir" });
  const email = screen.getByRole("cell", { name: "samir@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
