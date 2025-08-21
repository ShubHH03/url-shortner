import mongoose from "mongoose";

const urlSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        shortCode: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
)

export const Url = mongoose.model("Url", urlSchema)