import express from 'express';
import apiRouter from './api/index.js';

const app = express();
app.use(express.json());
//API-reitit
app.use('/api/v1', apiRouter);

//Testireitti
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Tarjoa staattisia tiedostoja public-kansiosta
app.use('/public', express.static('public'));

export default app;
