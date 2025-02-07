import express from "express";
import { loginController, verifyMPIN, resendMPIN } from "../controllers/MPINController.js";

const router = express.Router();

// Route to handle MPIN login
router.post("/mpinlogin", loginController);

// Route to verify MPIN
router.post("/verifympin", verifyMPIN);

// Route to resend MPIN
router.post("/resendmpin", resendMPIN);

export default router;