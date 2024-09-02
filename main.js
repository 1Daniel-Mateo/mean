import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import * as dotenv from "dotenv";
// import userRoutes from "./router";
dotenv.config();


const app  = express();
app.use(cors());
app.use(express.json)



//Conexion base de datos
mongoose.Promise = global.Promise;
const db = "mongodb:://localhost:27017/courses_udemy";
mongoose.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(mongoose => console.log("Conectado a  la base de datos"))
.catch(err => console.log(err));

