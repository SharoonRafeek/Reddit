import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.urlencoded({ extended: true }));

const connectionUrl = "mongodb://localhost:27017/redditDB";
const port = process.env.PORT || 5000;

mongoose.connect(connectionUrl);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
