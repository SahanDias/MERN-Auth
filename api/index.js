import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js';


mongoose.connect("mongodb://localhost:27017/Users").then(() =>{
    console.log("Connected to the MongoDB");
}).catch((err) =>{
    console.log(err)
});

const app= express();

app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});

app.use("/api/user", userRoutes);

