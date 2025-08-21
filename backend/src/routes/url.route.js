import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";
import { generateShortId } from "../controllers/url.controller.js";

const router = Router();

router.route("/healthcheck").post(healthCheck)
router.route("/shorten").post(generateShortId)



export default router