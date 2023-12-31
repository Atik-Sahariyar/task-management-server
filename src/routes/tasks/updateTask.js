const express = require("express");
const Tasks = require("../../models/tasks");
const mongoose = require('mongoose');
const updateTaskStatus = express.Router();

updateTaskStatus.patch("/api/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = req.body;
    const newStatus = task.status;
    const query = { _id: new mongoose.Types.ObjectId(id) };
    const updateDoc = {
      $set: {
        status: newStatus,
      },
    };
    const result = await Tasks.updateOne(query, updateDoc);
    res.send(result);
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = updateTaskStatus;
