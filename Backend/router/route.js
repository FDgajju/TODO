const express = require("express");
const route = express.Router();

const { createTodo, updateTodo } = require("../controller/todoController");

route.post("/", createTodo);
route.put("/:id", updateTodo);

module.exports = route