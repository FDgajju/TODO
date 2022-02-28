const express = require("express");
const route = express.Router();

const { createTodo, updateTodo, getTodo } = require("../controller/todoController");

route.post("/", createTodo)
route.get("/", getTodo)
route.put("/:id", updateTodo);

module.exports = route