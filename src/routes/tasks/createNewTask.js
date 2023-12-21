const express = require("express");
const Tasks = require("../../models/tasks");
const createNewTaskRoute = express.Router();

createNewTaskRoute.post('/api/tasks', async(req, res) =>{
    try{
     const task = req.body;
     const query = { title: task.title };
     const isExistingTask = await Tasks.findOne(query);
     if (isExistingTask) {
       return res.send({ message: 'user already exists', insertedId: null })
     }
     const newTask  = new Tasks(task);
     const result = await newTask.save();
     res.send(result);
    } catch (error) {
        console.error('Error  post user data:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

module.exports = createNewTaskRoute;