const express = require("express");
const Tasks = require("../../models/tasks");
const mongoose = require('mongoose');
const updateTaskRoute = express.Router();

updateTaskRoute.patch("/api/tasks/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = req.body;
    const query = { _id: new mongoose.Types.ObjectId(id) };
    const updateDoc = {
      $set: {
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        priority: task.priority,
      },
    };
    const result = await Tasks.updateOne(query, updateDoc);
    
    res.send(result);
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = updateTaskRoute;
