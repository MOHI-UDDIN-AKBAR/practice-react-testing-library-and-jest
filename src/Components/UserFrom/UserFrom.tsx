import React from "react";
import { User } from "../../types";

type UserFormPropType = {
  addNewUser: (user: User) => void;
};

const UserFrom: React.FC<UserFormPropType> = ({ addNewUser }) => {
  const [user, setUser] = React.useState<User>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.email && user.name) {
      addNewUser(user);
      setUser({ name: "", email: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-2 sm:w-[500px] lg:w-full lg:flex-row"
    >
      <div className="flex w-full flex-col flex-nowrap px-2 lg:w-80 lg:p-2">
        <label
          htmlFor="name"
          className="indent-1 font-serif font-light text-slate-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="type name"
          className="rounded-md border-2 border-blue-300 p-2 text-xs text-slate-900 placeholder:text-xs placeholder:capitalize placeholder:text-slate-400 focus:outline-none"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="flex w-full flex-col flex-nowrap px-2 lg:w-80 lg:p-2">
        <label
          htmlFor="email"
          className="indent-1 font-serif font-light text-slate-900"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="xyz@email.com"
          className="rounded-md border-2 border-blue-300 p-2 text-xs text-slate-900 placeholder:text-xs placeholder:capitalize placeholder:text-slate-400 focus:outline-none"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="my-2 w-40 rounded-lg border-none bg-blue-500 p-1 py-[5px] text-white ring-blue-600 hover:ring-2 lg:translate-y-[12px]"
      >
        Add User
      </button>
    </form>
  );
};

export default UserFrom;
