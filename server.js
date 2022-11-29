// START SERVER
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
const app = require('./app');
const CryptoJS = require("crypto-js")

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(() => {
    console.log('DB connection successful');
 });

 const port = 3000 || process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});