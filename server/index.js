import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const __dirname = path.resolve();

app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello to Tutor's Den API");
});
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server  is running on port ${PORT}`))
  )
  .catch((error) => console.log("Mongo Error", error.message));
mongoose.set("strictQuery", false);
