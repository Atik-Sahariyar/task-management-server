const express = require('express');
const createNewUserController = require('../../controller/users/createNewUserController');
const creatNewUserRoute = express.Router();


creatNewUserRoute.post('/api/users', createNewUserController);

module.exports = creatNewUserRoute;