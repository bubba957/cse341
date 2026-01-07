/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const app = express();

/* ***********************
 * Routes
 *************************/
app.use('/', require('./routes'));

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {console.log(`app listening on ${port}`)})