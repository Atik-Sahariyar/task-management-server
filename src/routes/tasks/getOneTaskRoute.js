const express = require("express");
const Tasks = require("../../models/tasks");
const getOneTaskRoute = express.Router();

getOneTaskRoute.get("/api/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Tasks.findById(id);
    res.send(result)
  } catch (error) {
    console.error("Error  getting ongoing tasks data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = getOneTaskRoute;