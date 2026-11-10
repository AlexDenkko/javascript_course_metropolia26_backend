const userItems = [
  {
    user_id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password',
  },
  {
    user_id: 2,
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@metropolia.fi',
    role: 'admin',
    password: 'password',
  },
];

const listAllUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((user) => user.user_id == id);
};

const addUser = (user) => {
  const newId =
    userItems.length > 0
      ? Math.max(...userItems.map((user) => user.user_id)) + 1
      : 1;

  const newUser = {
    user_id: newId,
    ...user,
  };

  userItems.push(newUser);

  return {user_id: newId};
};

export {listAllUsers, findUserById, addUser};
