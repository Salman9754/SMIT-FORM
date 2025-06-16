import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables from .env file
config();

// Connect to MongoDB
mongoose.connect(process.env.CLUSTER_KEY, {

})
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));