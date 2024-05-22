// Miguel Soria A01028033 22/04/2024
"use strict"


import express from 'express';
import fs from "fs";

const port = 3000;
const app = express();
let card_list = [];
app.use(express.json());
app.use(express.static("public"));

app.get("/html", (req, res) => {
  const file = fs.readFileSync("public/html/html_cheat_sheet.html", "utf-8");
  res.status(200).send(file);
});

app.get("/css", (req, res) => {
  const file = fs.readFileSync("public/html/css_cheat_sheet.html", "utf-8");
  res.status(200).send(file);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});