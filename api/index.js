import express from "express";
import mongoose from "mongoose";
import userRoute from "./api/routes/user.route.js";
import authRoute from "./api/routes/auth.user.js";
import listingRoute from "./api/routes/listing.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB is Connected!"))
    .catch((err) => console.error(err));

const port = process.env.PORT || 3000;

// Serve the static files
app.use(express.static(path.join(__dirname, 'client/dist')));

// API Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use('/api/listing', listingRoute);

// Catch-all route for SPA (Single Page Application) client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
