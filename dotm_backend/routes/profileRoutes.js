import express from "express";
import { insertAddress, insertApplicant, insertGuardian } from "../controllers/profileController.js";

const router = express.Router();

router.post("/applicant-details", insertApplicant);
router.post("/address-details", insertAddress);
router.post("/guardian-details", insertGuardian);

export default router;
