const connectToDatabase = require('./database'); 
const { fetchAndSaveData } = require('./models/Character.model'); 

connectToDatabase()
    .then(() => fetchAndSaveData()) 
    .catch((err) => console.error('Application error:', err));
