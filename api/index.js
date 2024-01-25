import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose.connect("mongodb://localhost:27017/mern--auth").then(() =>{
    console.log("Connected to the MongoDB");
}).catch((err) =>{
    console.log(err);
});

const app= express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


app.use((err, req, res, next ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

