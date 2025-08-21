import { asyncHandler } from "../utils/asyncHandler.js";
import {nanoid} from "nanoid";
import { Url } from "../models/url.model.js"; 

const generateShortId = asyncHandler(async(req, res) => {

    const originalUrl = req.body.url;

    if(!originalUrl){
        res.status(400).json({ error: "url is required"})
    }

    const shortCode = nanoid(8);

    const storeUrl = await Url.create({
        url: originalUrl,
        shortCode: shortCode,
        accessCount: 0
    })

    console.log("Url stored", storeUrl);

    const newShortUrl = `${process.env.BASE_URL}/${shortCode}`;
    
    return res.status(201).json({
        success: true,
        message: "Short URL created successfully",
        data: {
            originalUrl,
            shortCode,
            newShortUrl
        }
    });

})

const getOriginalUrl = asyncHandler(async(req, res) => {
    
})

export {
    generateShortId
}