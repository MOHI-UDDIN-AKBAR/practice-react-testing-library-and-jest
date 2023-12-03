import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form component", () => {
  test("should be visible two input fields and a button", () => {
    //Mock addNewUser function
    const addNewUserMock = jest.fn();
    //render Component
    render(<Form addNewUser={addNewUserMock} />);
    //find two inputs and a button fields
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    //assertions
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("should call addNewUser function after form submission", () => {
    //mock function
    const addNewUserMock = jest.fn();
    //render Component
    render(<Form addNewUser={addNewUserMock} />);
    //find inputs
    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    user.click(nameInput);
    user.keyboard("samir");
    user.click(emailInput);
    user.keyboard("samir@gmail.com");

    //find button
    const button = screen.getByRole("button", {
      name: /add user/i,
    });

    user.click(button);

    //assertion to ensure after button click addNewUser function should call
    expect(addNewUserMock).toHaveBeenCalledTimes(1);
    expect(addNewUserMock).toHaveBeenCalledWith({
      name: "samir",
      email: "samir@gmail.com",
    });
  });
});
