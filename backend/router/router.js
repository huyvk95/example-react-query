const { Router } = require("express");

const { router: apiRouter } = require("./api");

export const router = Router();

router.use("/api", apiRouter);
