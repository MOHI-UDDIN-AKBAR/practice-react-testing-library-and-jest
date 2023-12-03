import { useState } from "react";
import { Form, ListOfUsers } from "./Components";
import { User } from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addNewUser = (singleUser: User) =>
    setUsers((user) => [...user, singleUser]);

  return (
    <main className="max-container flex flex-col items-center justify-start p-2">
      <Form addNewUser={addNewUser} />
      <div className="mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="w-fit  p-2 font-extrabold capitalize text-slate-900">
          all Users
        </h1>
        <ListOfUsers users={users} />
      </div>
    </main>
  );
};

export default App;
