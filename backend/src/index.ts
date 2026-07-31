import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT;

app.listen(() => {
  console.log(`Server running on port: ${port}`)
})
