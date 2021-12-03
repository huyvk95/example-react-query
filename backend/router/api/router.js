const { Router } = require("express");

const { router: todoRouter } = require("./todo");

export const router = Router();

router.use("/todo", todoRouter);
