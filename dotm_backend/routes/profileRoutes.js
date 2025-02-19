import express from "express";
import { getProfileDetails, insertProfileDetails } from "../controllers/profileController.js";

const router = express.Router();

router.post("/profile-details", insertProfileDetails);
router.get("/profile-details/:id", getProfileDetails);


export default router;
 