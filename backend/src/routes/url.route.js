import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";
import { deleteUrl, generateShortId, getStats, redirectToOriginalUrl, updateOriginalUrl } from "../controllers/url.controller.js";

const router = Router();

router.route("/healthcheck").post(healthCheck)
router.route("/shorten").post(generateShortId)
router.route("/:shortCode").put(updateOriginalUrl).delete(deleteUrl)
router.route("/stats/:shortCode").get(getStats)



export default router