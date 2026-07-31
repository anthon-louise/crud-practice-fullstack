import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(errorHandler);

app.listen(() => {
  console.log(`🚀Server running on port: ${port}`)
})
