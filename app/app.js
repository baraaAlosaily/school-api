import e from "express";
import express from "express";
import morgan from "morgan";
const app = express();
//Middleware
app.use(morgan("dev"));

export default app;