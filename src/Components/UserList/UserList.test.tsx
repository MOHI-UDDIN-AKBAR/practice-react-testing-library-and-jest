import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
import "@testing-library/jest-dom";

const renderComponent = () => {
  //fake users
  const users = [
    {
      name: "samir",
      email: "samir@gmail.com",
    },
    {
      name: "rifat",
      email: "rifat@gmail.com",
    },
  ];
  //render component
  const { container } = render(<UserList users={users} />);
  return { container, users };
};

test("should return null if user length is zero", () => {
  //fake users
  const users: any = [];
  //render component
  const { container } = render(<UserList users={users} />);
  //eslint-disable-next-line
  expect(container.firstChild).toBeNull();
});

test("render one user per row", () => {
  renderComponent();

  // Manipulate component or find elements
  //   screen.logTestingPlaygroundURL();
  //   const rows = screen.getByRole("row", {
  //     name: /samir samir@gmail\.com/i,
  //   });

  //another way
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //assertion: to make sure one user per row
  //   expect(rows).toBeInTheDocument();
  expect(rows).toHaveLength(2);
});

it("should show name and email for each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    //assertion
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
