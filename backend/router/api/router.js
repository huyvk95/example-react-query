import { Router } from "express";

import { router as todoRouter } from "./todo";

export const router = Router();

router.use("/todo", todoRouter);
