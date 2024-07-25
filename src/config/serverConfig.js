const dotenv= require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    DB_SYNC:process.env.DB_SYNC,
}