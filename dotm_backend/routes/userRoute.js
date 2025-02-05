import express from "express";
import loginController from "../controllers/LoginController.js";

const router = express.Router();

router.post("/login", loginController); // POST request to handle login

export default router;
