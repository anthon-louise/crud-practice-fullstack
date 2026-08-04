import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import noteRouter from "./module/note/route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/notes", noteRouter);

const port = process.env.PORT;

app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀Server running on port: ${port}`);
})
