import express from 'express';

import {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(postUser);

router.route('/:id').get(getUserById).put(putUser).delete(deleteUser);

export default router;
