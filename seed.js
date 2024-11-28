const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");

const Character = require("./models/Character.model");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const charactersArray = response.data.results;
    const allCharacters = charactersArray.map((character) => {
      return { name: character.name, image: character.image };
    });

    Character.insertMany(allCharacters)
    console.log("Characters inserted");
    
  } catch (error) {
    console.log("There is an error: ", error);
  }
};

mongoose
  .connect(process.env.MONGODB_URI)
  .then((response) => {
    console.log("Connected to the database", response.connections[0].name);
    fetchData();
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
