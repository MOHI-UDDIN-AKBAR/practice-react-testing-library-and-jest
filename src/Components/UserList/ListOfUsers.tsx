import { User } from "../../types";
type ListOfUsersPropsType = {
  users: User[];
};

const ListOfUsers = ({ users }: ListOfUsersPropsType) => {
  return (
    <section className="mt-4 flex w-11/12 flex-row flex-wrap items-center justify-center gap-4 p-4">
      {users?.map((user: User) => (
        <div
          key={user.name}
          className="rounded-lg border-2 border-blue-200 p-5 shadow-lg"
        >
          <h1 className="font-bold capitalize text-blue-500">{user.name}</h1>
          <p className=" text-center text-sm text-slate-600">{user.email}</p>
        </div>
      ))}
      {!users.length && <p className="text-sm text-slate-500">0 user</p>}
    </section>
  );
};

export default ListOfUsers;
