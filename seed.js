const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");
const Character = require("./models/Character.model")

mongoose.connect(process.env.MONGODB_URL)
    .then((response) => {
        console.log("Connected to the database", response.connections[0].name);
        return fetchData()
    })
    .then((data) => {
        Character.insertMany(data)
    })
    .catch((err) => {
        console.error("Error connecting to database",err);
        
    })

const fetchData = async() => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        
        const characters = response.data.results.map((character) => {
            return {
                name: character.name,
                imageUrl: character.image,
            }
        })
        return characters;
    }
    catch(error) {
        console.log("Error fetching data". error);
    }
    
}

