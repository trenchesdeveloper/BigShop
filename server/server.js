import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import color from "colors";
import authRouter from "./routes/authRoutes.js";

const app = express();
// configure dotenv
dotenv.config();

// MIDDLEWARE
app.use(express.json());

// DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected".cyan.underline.bold));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = 5000 || process.env.PORT;

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "you hit a new route" });
});


// MOUNT ROUTERS
app.use("api/auth", authRouter);

app.listen(PORT, () => console.log(`app running on port ${PORT}`.yellow.bold));
