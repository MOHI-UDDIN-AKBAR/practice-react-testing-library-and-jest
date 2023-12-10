import { useState } from "react";
import UserFrom from "./Components/UserFrom/UserFrom";
import UserList from "./Components/UserList/UserList";
import { User } from "./types";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addNewUser = (newUser: User) => setUsers((user) => [...user, newUser]);

  return (
    <main className="max-container flex flex-col items-center justify-center">
      <UserFrom addNewUser={addNewUser} />
      <UserList users={users} />
    </main>
  );
};

export default App;
