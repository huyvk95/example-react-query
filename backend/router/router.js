const { Router } = require("express");

const { router: apiRouter } = require("./api");

const router = Router();

router.use("/api", apiRouter);

module.exports = { router };
