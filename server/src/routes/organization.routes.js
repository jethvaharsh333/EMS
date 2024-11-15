import { Router } from "express";
import { registerOrganization } from "../controllers/organization.controller.js";

const router = Router();

router.route("/register").post(registerOrganization);

export default router;