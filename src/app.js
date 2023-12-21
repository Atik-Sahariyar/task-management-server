const express = require("express");
require("dotenv").config();
const app  = express();
const applyMiddleware = require('./middleware/applyMiddleware')
const globalErrorHandler = require("./utils/globalErrorHandler");
const creatNewUserRoute = require("./routes/users/createNewUserRoute");


//middileare
applyMiddleware(app);

// users related api rutes
app.use(creatNewUserRoute);




app.get('/', (req, res) => {
    res.send('Task Management server is running');
});


// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
