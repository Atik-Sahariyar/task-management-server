const express = require('express');
const Tasks = require('../../models/tasks');
const deleteTaskRoute = express.Router();

deleteTaskRoute.delete('/api/task/:id' , async(req, res) => {
    try{
      const id = req.params.id;
      const result = await Tasks.findByIdAndDelete(id);
      res.send(result);
    } catch (error) {
        console.error('Error delete post data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = deleteTaskRoute;

