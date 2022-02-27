const todoModel = require("../model/todoModel");

const createTodo = async (req, res) => {
  try {
    const { body } = req;
    await todoModel.create(body);
    const TODOs = await todoModel.find({
      $or: [{ Status: "Open" }, { Status: "In-Progress" }],
    });
    res
      .status(200)
      .send({ Status: "success", message: "todo created", data: TODOs });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { params } = req;
    const { id } = params;

    await todoModel.findOneAndUpdate(
      { _id: id },
      { Status: "Completed" },
      { new: true }
    );
    const doneTasks = await todoModel.find({ Status: "Completed" });

    res
      .status(200)
      .send({ status: "DONE", message: "task Completed", data: doneTasks });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createTodo, updateTodo };