
require('dotenv').config();

const config = {
    port: process.env.PORT,
    API_KEY: process.env.API_KEY,
    cors: process.env.CORS || 'http://localhost:3000',
    tableName: process.env.TABLE_NAME,
    
}

module.exports = config;

