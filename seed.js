const mongoose = require("mongoose");
require("dotenv").config();
const Character = require("./models/Character.model");
const axios = require('axios');
const { log } = require("console");

mongoose.connect(process.env.MONGODB_URI)
  .then((response) => {
    console.log("connected to the database", response.connections[0].name);
    fillDatabase();
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  })

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const result =  response.data.results.map((character) => {
      return {
        name: character.name,
        imageUrl: character.image
      }
    })
    return result
  } catch (error) {
    console.log(error);
  }
}

const fillDatabase = async () => {
  try {
    const characters = await fetchData()
    if (characters) {
      const insertedCharacters = await Character.insertMany(characters)
      console.log("Charachters added: ", insertedCharacters.length)
    }
  } catch (error) {
    console.log("error inserting the data", error)
  }
}



