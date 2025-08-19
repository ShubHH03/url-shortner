import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async(req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Server is running fine",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Health check failed",
            error: error.message
        });
    }
});

export {
    healthCheck
}