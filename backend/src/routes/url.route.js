import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";
import { generateShortId, redirectToOriginalUrl } from "../controllers/url.controller.js";

const router = Router();

router.route("/healthcheck").post(healthCheck)
router.route("/shorten").post(generateShortId)
router.route("/:shortCode").get(redirectToOriginalUrl)



export default router