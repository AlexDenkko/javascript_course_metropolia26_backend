import express from 'express';

import {
  getAllCats,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const router = express.Router();

router.route('/').get(getAllCats).post(postCat);

router.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default router;
