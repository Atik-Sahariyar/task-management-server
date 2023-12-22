const express = require("express");
const Tasks = require("../../models/tasks");
const getMyTasksRoute = express.Router();

getMyTasksRoute.get("/api/tasks/myTasks/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { aouthorEemail: email}
    const result = await Tasks.find(filter);
    res.send(result)
  } catch (error) {
    console.error("Error  getting my tasks data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = getMyTasksRoute;