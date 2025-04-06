import express from "express";
import { insertDetails } from "../controllers/ApplicantController.js";

const router = express.Router();

router.post("/insert-details", insertDetails);

export default router;
