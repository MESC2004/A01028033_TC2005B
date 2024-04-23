// Miguel Enrique Soria A01028033 22/04/2024

"use strict";

import express from 'express';
const port = 5000;
const app = express();
let card_list = [{"id": "1", "name": "Faust"}];
app.use(express.json());

app.get("/available_cards", (req, res) => {
  if (card_list.length > 0) {
    res.json(card_list);
  } else {
    res.status(200).send("No cards available.");
  }
});

app.get("/lookup/:id", (req, res) => {
  const id = req.params.id;
  const card = card_list.find((card) => card.id === id);
  if (card) {
    res.json(card);
  } else {
    res.status(200).send("Card not found in the card list.");
  }
});  

app.post("/add_card", (req, res) => {
  const card = req.body;
  if (card_list.find((c) => c.id === card.id)) {
    res.status(200).send("Card already exists.");
  } else {
    card_list.push(card);
    res.json(card_list);
    res.status(200).send("Card added into card list.");
  }
});

app.delete("/delete_card/:id", (req, res) => {
  const id = req.params.id;
  const card = card_list.find((card) => card.id === id);
  if (card) {
    card_list = card_list.filter((card) => card.id !== id);
    res.json(card_list);
  } else {
    res.status(200).send("Card not found in the card list.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
