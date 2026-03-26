import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type:String,
        required: true
    },
    category: {
        type: String,
    required: true,
    trim: true
    },
}, {timestamps: true});

export default mongoose.model("jobs", jobsSchema);