const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    imageUrl: String,
})

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;