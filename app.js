const express = require('express')
const app = express()
const morgan = require('morgan');
const validator = require("email-validator");

const v1UserRouter = require("./v1/routes/userRoutes");


// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.use((req, res, next) => {
    next();
})


app.use("/api/v1/users", v1UserRouter);

module.exports = app;