import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const connectionUrl = "mongodb://localhost:27017/redditDB";
const port = process.env.PORT || 5000;

mongoose.connect(connectionUrl);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
