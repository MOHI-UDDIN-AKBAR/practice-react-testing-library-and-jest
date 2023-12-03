import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form component", () => {
  test("should be visible two input fields and a button", () => {
    const addNewUserMock = jest.fn();
    render(<Form addNewUser={addNewUserMock} />);

    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("should call addNewUser function after form submission", () => {
    const addNewUserMock = jest.fn();
    render(<Form addNewUser={addNewUserMock} />);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    user.type(nameInput, "samir");
    user.type(emailInput, "samir@gmail.com");
    const button = screen.getByRole("button", {
      name: /add user/i,
    });
    user.click(button);

    expect(addNewUserMock).toHaveBeenCalledTimes(1);
    expect(addNewUserMock).toHaveBeenCalledWith({
      name: "samir",
      email: "samir@gmail.com",
    });
  });
});
