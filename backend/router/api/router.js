const { Router } = require("express");

const { router: todoRouter } = require("./todo");

const router = Router();

router.use("/todo", todoRouter);

module.exports = { router };
