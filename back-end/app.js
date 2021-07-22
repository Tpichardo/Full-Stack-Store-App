// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const boutiqueController = require("./controllers/boutiqueController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Boujee Bettty Boutique");
});


app.use("/boutique", boutiqueController);

app.get("*", (req, res) => {
  res.status(404).send("page not found")
})

// EXPORT
module.exports = app;
