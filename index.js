import express from "express";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
// const path = require("path");
// const port = process.env.PORT || 8000;
// const posts = require("./routes/posts");

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(8000, () => {
  console.log(`server is running  on port 8000`);
});
