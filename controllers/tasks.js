const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find(req.body)
  res.json({tasks});
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
};

const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id)
  // res.json({ id: req.params.id });
  res.json({task})
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
