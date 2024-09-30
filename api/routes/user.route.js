import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

//"get" request because we want to get info not send. If you want to send to db use "put or post" request.
router.get("/test", test);

export default router;
