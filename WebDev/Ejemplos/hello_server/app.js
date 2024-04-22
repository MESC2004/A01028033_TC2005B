// Miguel Soria A01028033 22/04/2024
"use strict"


import express from 'express';
const port = 5000;
const app = express();
let card_list = [];
app.use(express.json());


app.get("/name", (req, res) => {
  const salute = "Hello from server";
  res.status(200).send(salute);
});

app.get("/hello/:name", (req, res) => {
  console.log(req.query);
  const salute = `hello ${req.params.name}`;
  res.status(200).send(salute);
});

app.post('/cards', (req, res) => {
  console.log(req.body);
  card_list.push(req.body);
  res.status(200).send('Card Added');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
