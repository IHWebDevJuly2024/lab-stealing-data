const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios'); 

const characterSchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
}, { collection: 'lab stealing data' }); 

const Character = mongoose.model('Character', characterSchema);

const fetchAndSaveData = async () => {
    const axios = require('axios');
    try {
        console.log('Fetching data from Rick and Morty API...');
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const characters = response.data.results;

        const cleanedCharacters = characters.map(character => ({
            name: character.name,
            imageUrl: character.image, 
        }));

        console.log(`Cleaned ${cleanedCharacters.length} characters. Saving to MongoDB...`);
        const savedCharacters = await Character.insertMany(cleanedCharacters);
        console.log(`Successfully saved ${savedCharacters.length} characters.`);
    } catch (error) {
        console.error('Error fetching or saving data:', error.message);
    }
};


module.exports = { Character, fetchAndSaveData };
