import { asyncHandler } from "../utils/asyncHandler.js";
import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";

const generateShortId = asyncHandler(async (req, res) => {
  const { url } = req.body;

  if (!url) {
    res.status(404).json({ error: "url is required" });
  }

  const isUrlValid = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch (err) {
      return false;
    }
  };

  if (!isUrlValid(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  if (url.includes(process.env.BASE_URL)) {
    return res
      .status(400)
      .json({ error: "Cannot shorten URLs from this domain" });
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

  const originalUrl = await Url.findOneAndUpdate(
    {
      shortCode,
    },
    {
      $inc: {
        accessCount: 1,
      },
    }
  );

  if (!originalUrl) {
    return res.status(404).json({ error: "URL not found in DB" });
  }

  return res.redirect(originalUrl.url);
});

const updateOriginalUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;

  if (!shortCode) {
    return res.status(404).json({ error: "Short code not found" });
  }
  const newUrl = req.body.url;

  if (!newUrl) {
    return res.status(404).json({ error: "New URL not found" });
  }

  const updateUrl = await Url.findOneAndUpdate(
    { shortCode },
    {
      url: newUrl,
    },
    {
      new: true,
    }
  );

  return res.status(200).json({
    success: true,
    message: "URL updated successfully",
    updateUrl,
  });
});

const getStats = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;

  const statsData = await Url.findOne({ shortCode });

  return res.status(200).json({
    success: true,
    message: "accessCount fetched successfully",
    originalUrl: statsData.url,
    visitCount: statsData.accessCount,
  });
});

const deleteUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;

  const originalUrl = await Url.findOneAndDelete({ shortCode });

  return res.status(200).json({
    success: true,
    message: "Url deleted successfully",
    deletedCode: originalUrl.shortCode,
    deletedUrl: originalUrl.url,
  });
});

export {
  generateShortId,
  redirectToOriginalUrl,
  updateOriginalUrl,
  getStats,
  deleteUrl,
};
