/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const app = express();
const mongodb = require('./data/database');

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
// mongodb.initDb((err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
        app.listen(port, () => {console.log(`database listening on ${port}`)});
//     }
// });
