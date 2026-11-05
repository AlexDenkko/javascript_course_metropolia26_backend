import express from 'express';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

//Testireitti
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Palauta kissan tiedot Json-muodossa
app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    cat_name: 'Misu',
    cat_birthday: '2020-01-01',
    weight: 4.5,
    owner_name: 'John Doe',
    img: 'https://loremflickr.com/320/240/cat',
  };

  res.json(cat);
});

// Tarjoa staattisia tiedostoja public-kansiosta
app.use('/public', express.static('public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
