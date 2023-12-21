const express = require("express");
const Tasks = require("../../models/tasks");
const mongoose = require('mongoose');
const updateTaskRoute = express.Router();

updateTaskRoute.patch("/api/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const item = req.body;
    const newStatus = item.status;
    console.log(newStatus);
    const query = { _id: new mongoose.Types.ObjectId(id) };
    const updateDoc = {
      $set: {
        status: newStatus,
      },
    };
    const result = await Tasks.updateOne(query, updateDoc);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = updateTaskRoute;
