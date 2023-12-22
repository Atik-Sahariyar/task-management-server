const express = require("express");
const Tasks = require("../../models/tasks");
const getToDoTasksRoute = express.Router();

getToDoTasksRoute.get("/api/tasks/todo", async (req, res) => {
  try {
    const filter = { status: 'todo'};
    const result = await Tasks.find(filter);
    res.send(result);
  } catch (error) {
    console.error("Error  getting todo tasks data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = getToDoTasksRoute;