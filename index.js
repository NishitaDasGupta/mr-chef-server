const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefDetails = require('./data/chefDetails.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
  res.send(chefDetails);
})

app.get('/chefs/:id', (req, res) => {
  
  console.log(id);
  const selectedChef = chefDetails.find( chef => chef.Chef_ID === id);
  res.send(selectedChef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})