
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
// const express = require('express');
// const dotenv = require("dotenv")
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hello");

});


app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{console.log(`server running at port ${PORT}`)});
