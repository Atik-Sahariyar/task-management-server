const express = require("express");
const Tasks = require("../../models/tasks");
const getOngoingTasksRoute = express.Router();

getOngoingTasksRoute.get("/api/tasks/ongoing", async (req, res) => {
  try {
    const filter = { status: 'ongoing'};
    const result = await Tasks.find(filter);
    res.send(result);
  } catch (error) {
    console.error("Error  getting ongoing tasks data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = getOngoingTasksRoute;