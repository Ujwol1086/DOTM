import express from "express";
import { loginController, resendMPIN, verifyMPIN } from "../controllers/LoginController.js";

const router = express.Router();

router.post("/login", loginController); // POST request to handle login

router.post("/verify-mpin", verifyMPIN);

router.post("/resend-mpin", resendMPIN);

export default router;
