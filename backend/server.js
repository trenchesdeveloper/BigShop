import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import color from "colors";
import globalErrorHandler from "./controllers/errorControllers.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

const app = express();
// configure dotenv
dotenv.config();

// MIDDLEWARE
app.use(express.json());
//app.use(cors());

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
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`app running on port ${PORT}`.yellow.bold));
