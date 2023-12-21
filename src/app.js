const express = require("express");
require("dotenv").config();
const app  = express();
const applyMiddleware = require('./middleware/applyMiddleware')
const globalErrorHandler = require("./utils/globalErrorHandler");
const creatNewUserRoute = require("./routes/users/createNewUserRoute");
const createNewTaskRoute = require("./routes/tasks/createNewTask");
const getToDoTasksRoute = require("./routes/tasks/getToDoTasksRoute");
const getOngoingTasksRoute = require("./routes/tasks/getOngoingTasksRoute");
const getCompletedTasksRoute = require("./routes/tasks/getCompletedTasksRoute");
const updateTaskRoute = require("./routes/tasks/updateTask");


//middileare
applyMiddleware(app);

// users related api routes
app.use(creatNewUserRoute);


// tasks related api routes
app.use(createNewTaskRoute);
app.use(getToDoTasksRoute);
app.use(getOngoingTasksRoute);
app.use(getCompletedTasksRoute);
app.use(updateTaskRoute);



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
