const { Router } = require("express")
const tasksController = require("../controllers/tasks.controller")
const route = Router();

route.post("/tasks", tasksController.createTask)

route.get("/tasks", tasksController.getAllTasks)

module.exports = route;