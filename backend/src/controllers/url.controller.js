import { asyncHandler } from "../utils/asyncHandler.js";
import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";

const generateShortId = asyncHandler(async (req, res) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).json({ error: "url is required" });
  }

  const shortCode = nanoid(8);

  const storeUrl = await Url.create({
    url: url,
    shortCode: shortCode,
    accessCount: 0,
  });

  // console.log("Url stored", storeUrl);

  const newShortUrl = `${process.env.BASE_URL}/${shortCode}`;

  return res.status(201).json({
    success: true,
    message: "Short URL created successfully",
    data: {
      url,
      shortCode,
      newShortUrl,
    },
  });
});

const redirectToOriginalUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;
  console.log(req.params);

  const originalUrl = await Url.findOne({
    shortCode,
  });

  if (!originalUrl) {
    return res.status(404).json({ error: "URL not found" });
  }

  return res.redirect(originalUrl.url);
});

export { generateShortId, redirectToOriginalUrl };
