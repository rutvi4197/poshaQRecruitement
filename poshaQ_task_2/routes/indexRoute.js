const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

//Create Label
router.post("/create_label", taskController.createLabel);

//Delete Label
router.delete("/delete_label/:id", taskController.deleteLabel);

//Update Label
router.put("/update_label/:id", taskController.updateLabel);

//Create Task
router.post("/create_task", taskController.createTask);

//Delete Task
router.delete("/delete_task/:id", taskController.deleteTask);

//Update Task
router.put("/update_task/:id", taskController.updateTask);

//Get All Task
router.get("/getTask", taskController.getAllTask);

//Move Task Label to other
router.put("/move_task/:labelId", taskController.moveTask);

router.get("/getLabel",taskController.getAllLabel);

module.exports = router;
