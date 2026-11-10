import {listAllCats, findCatById, addCat} from '../models/cat-model.js';

// GET: Hae kaikki kissat
const getAllCats = (req, res) => {
  const cats = listAllCats();
  res.json(cats);
};

// GET: Hae yksi kissa ID:n perusteella
const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);

  if (!cat) {
    return res.status(404).json({message: 'Cat not found.'});
  }

  res.json(cat);
};

// POST: Lisää uusi kissa
const postCat = (req, res) => {
  const result = addCat(req.body);

  res.status(201).json(result);
};

// PUT: Päivitä kissa
const putCat = (req, res) => {
  res.json({message: 'Cat item updated.'});
};

// DELETE: Poista kissa
const deleteCat = (req, res) => {
  res.json({message: 'Cat item deleted.'});
};

export {getAllCats, getCatById, postCat, putCat, deleteCat};
