import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import UserFrom from "./UserFrom";

it("shows two input and a button", () => {
  //mock the addNewUser function
  const addNewUser = jest.fn();

  //render Component
  render(<UserFrom addNewUser={addNewUser} />);

  //manipulate component or find elements
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  //assertion
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

it("call addNewUser function after form Submission", () => {
  //mock function
  const addNewUser = jest.fn();
  //render Component
  render(<UserFrom addNewUser={addNewUser} />);

  //Manipulate Component or Find elements
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  //simulate input and button
  user.click(nameInput);
  user.keyboard("alex");
  fireEvent.change(emailInput, { target: { value: "alex@gmail.com" } });
  //another way
  //   user.type(emailInput, "alex@gmail.com");
  user.click(button);

  //assertion: to make sure after form submission addNewUser function called
  expect(addNewUser).toHaveBeenCalled();
  expect(addNewUser).toHaveBeenCalledWith({
    name: "alex",
    email: "alex@gmail.com",
  });
});

test("should be empty input fields after form submission", () => {
  //mock function
  const addNewUser = jest.fn();
  //render component
  render(<UserFrom addNewUser={addNewUser} />);

  //manipulate component or find elements
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button", {
    name: /add user/i,
  });

  //simulate inputs and button
  fireEvent.change(nameInput, { target: { value: "samir" } });
  user.type(emailInput, "samir@gmail.com");
  fireEvent.click(button);

  //assertion: to make sure after form submission input fields are empty
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
