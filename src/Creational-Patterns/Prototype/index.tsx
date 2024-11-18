import { useState } from "react";
import { User, UserPrototype } from "./pattern/UserPrototype";

const PrototypeDesignPattern = () => {
  const [users, setUsers] = useState<User[]>([]);

  const userPrototype = new UserPrototype();

  const addUser = () => {
    const newUser = userPrototype.clone();
    newUser.name = `User ${users.length + 1}`;
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrototypeDesignPattern;
