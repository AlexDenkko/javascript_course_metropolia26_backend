import {listAllUsers, findUserById, addUser} from '../models/user-model.js';

// GET: Hae kaikki käyttäjät
const getAllUsers = (req, res) => {
  const users = listAllUsers();
  res.json(users);
};

// GET: Hae käyttäjä ID:n perusteella
const getUserById = (req, res) => {
  const user = findUserById(req.params.id);

  if (!user) {
    return res.status(404).json({message: 'User not found.'});
  }

  res.json(user);
};

// POST: Lisää uusi käyttäjä
const postUser = (req, res) => {
  const result = addUser(req.body);

  res.status(201).json(result);
};

// PUT: Päivitä käyttäjä
const putUser = (req, res) => {
  res.json({message: 'User item updated.'});
};

// DELETE: Poista käyttäjä
const deleteUser = (req, res) => {
  res.json({message: 'User item deleted.'});
};

export {getAllUsers, getUserById, postUser, putUser, deleteUser};
