import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

//"get" request because we want to get info not send. If you want to send to db use "put or post" request.
router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);

export default router;
