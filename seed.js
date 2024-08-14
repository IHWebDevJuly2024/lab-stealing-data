const mongoose = require("mongoose");
require("dotenv").config();
const Character = require("./models/Character.model");
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const characters = response.data.results.map((character) => {
      return {
        name: character.name,
        imageUrl: character.image,
      };
    });
    return characters;
  } catch (error) {
    console.log("Error fetching the data", error);
  }
};



mongoose
  .connect(process.env.MONGODB)
  .then((response) => {
    console.log(`Connected to the database: ${response.connections[0].name}`);
    return fetchData()
  })
  .then((data)=>{
    Character.insertMany(data);
  })
  .catch((error) => console.error(error));

