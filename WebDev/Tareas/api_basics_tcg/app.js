// Miguel Enrique Soria A01028033 22/04/2024

"use strict";

import express from 'express';
const port = 5000;
const app = express();
// Card template for the wanted parameters of the cards in the game
let card_template = ["id", "name", "type_id", "type_name", "hp", "speed", "speed_cost", "atk", "def"];

let card_list = [
{
  "id": 1, 
  "name": "Faust", 
  "type_id": 1, 
  "type_name": "Identity", 
  "hp": 15, 
  "speed": 3, 
  "speed_cost": "NULL", 
  "atk": "NULL", 
  "def": "NULL"
},
{
  "id": 2,
  "name": "Mephistopheles",
  "type_id": 2,
  "type_name": "Attack Card",
  "hp": "NULL",
  "speed": "NULL",
  "speed_cost": 2,
  "atk": 4,
  "def": "NULL"
}
];

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

  for (let i = 0; i < card_template.length; i++) {
    if (!card.hasOwnProperty(card_template[i])) {
      res.status(200).send(`Card is missing ${card_template[i]}.`);
      return;
    }
  }
  if (card_list.find((c) => c.id === card.id)) {
    res.status(200).send("Card already exists.");
  } else { 
    card_list.push(card);
    res.status(200).send("Card added into card list.");
}});

app.delete("/delete_card/:id", (req, res) => {
  const id = req.params.id;
  const card = card_list.find((card) => card.id == id);
  if (card) {
    card_list = card_list.filter((card) => card.id !== id);
    res.json(card_list);
  } else {
    res.status(200).send("Card not found in the card list.");
  }
});

app.put("/update_card/:id", (req, res) => {
  const id = req.params.id;
  // Get the fields to update
  const updatedFields = req.body;

  const cardIndex = card_list.findIndex((card) => card.id == id);
  if (!cardIndex) {
    res.status(200).send("Card not found in the card list.");
    return;
  }

  if (updatedFields.id) {
    // ID protection
    res.status(200).send("Cannot update card id.");
    return;
  }

  const existingCard = card_list[cardIndex];
  for (const field in updatedFields) {
    // Update only the fields that are present in the card template
    existingCard[field] = updatedFields[field];
  }
  res.status(200).send("Card updated successfully.");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
