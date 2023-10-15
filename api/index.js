import express from "express";
import mongoose from "mongoose";
import userRoute from "../api/routes/user.route.js"
import authRoute from "../api/routes/auth.user.js"
import listingRoute from "../api/routes/listing.route.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use( express.json() );
app.use( cookieParser() );

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB is Connected !"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3000; // Use the PORT environment variable if defined, otherwise use 3000.

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
} );


// path APi Route
app.use( "/api/user", userRoute );
app.use( "/api/auth", authRoute );
app.use('/api/listing', listingRoute)

app.use( ( err, req, res, next ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status( statusCode ).json( {
        success: false,
        statusCode: statusCode,
        message: message
    })
})
