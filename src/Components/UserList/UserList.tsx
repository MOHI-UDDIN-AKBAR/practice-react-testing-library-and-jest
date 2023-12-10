import React from "react";
import { User } from "../../types";

type UserListPropsType = {
  users: User[];
};

const UserList: React.FC<UserListPropsType> = ({ users }) => {
  if (users.length === 0) {
    return null;
  }

  return (
    <table className="mt-10 w-11/12 divide-y-2 divide-solid divide-slate-300 border-2 border-slate-400 lg:mt-24 lg:w-7/12">
      <thead>
        <tr className="font-mono text-slate-800">
          <th className="p-1">Name</th>
          <th className="p-1">Email</th>
        </tr>
      </thead>
      <tbody
        data-testid="users"
        className="divide-y divide-solid divide-slate-100"
      >
        {users?.map((user: User, i: number) => (
          <tr
            className="text-center font-sans leading-normal text-sky-600"
            key={i}
          >
            <td className=" p-1 text-sm capitalize">{user.name}</td>
            <td className="p-1 text-sm lowercase">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
