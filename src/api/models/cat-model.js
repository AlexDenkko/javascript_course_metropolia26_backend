const catItems = [
  {
    cat_id: 1,
    cat_name: 'Misu',
    weight: 4.5,
    owner: 'John Doe',
    filename: 'misu.jpg',
    birthdate: '2020-01-01',
  },
  {
    cat_id: 2,
    cat_name: 'Luna',
    weight: 3.8,
    owner: 'Jane Doe',
    filename: 'luna.jpg',
    birthdate: '2021-05-15',
  },
];

const listAllCats = () => {
  return catItems;
};

const findCatById = (id) => {
  return catItems.find((cat) => cat.cat_id == id);
};

const addCat = (cat) => {
  const newId =
    catItems.length > 0
      ? Math.max(...catItems.map((cat) => cat.cat_id)) + 1
      : 1;

  const newCat = {
    cat_id: newId,
    ...cat,
  };

  catItems.push(newCat);

  return {cat_id: newId};
};

export {listAllCats, findCatById, addCat};
