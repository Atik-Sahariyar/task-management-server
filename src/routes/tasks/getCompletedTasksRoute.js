const express = require("express");
const Tasks = require("../../models/tasks");
const getCompletedTasksRoute = express.Router();

getCompletedTasksRoute.get("/api/tasks/completed", async (req, res) => {
  try {
    const filter = { status: 'completed'};
    const result = await Tasks.find(filter);
    res.send(result);
  } catch (error) {
    console.error("Error  getting todo tasks data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = getCompletedTasksRoute;