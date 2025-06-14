// const express = require('express')// method-1
import express from "express"; // method-2     for this update pkg.json  from ==== "type": "index.js", ====
// to =====  ("type": "module", )   =====

import dotenv from "dotenv"; 
import connectDB from "./config/database.js";

dotenv.config({});

const app=express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});

