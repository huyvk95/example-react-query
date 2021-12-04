const { Router } = require("express");

const router = Router();

let todos = [];

router
  .route("/")
  .get((req, res) => {
    res.send(todos);
  })
  .put((req, res) => {
    try {
      const { id, title } = req.body;
      const todo = todos.find((o) => o.id === id);
      if (!todo) throw new Error("Todo item not found");

      todo.title = title;

      res.send(todo);
    } catch (error) {
      res.status(500).send(error.message);
    }
  })
  .post((req, res) => {
    const { title } = req.body;
    const id = Math.round(Math.random() * 10000);
    const todo = { id, title };

    todos.push(todo);
    res.send(todo);
  })
  .delete((req, res) => {
    const { id } = req.body;
    todos = todos.filter((o) => o.id !== id);

    res.send(todos);
  });

module.exports = { router };
