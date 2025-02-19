import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";
import detailsRoutes from "./routes/detailsRoute.js";
import profileRoutes from "./routes/profileRoutes.js"


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

let allowedOrigins = ["http://localhost:5173"];
app.use(cors({
    origin: allowedOrigins,
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));

app.get("/", (req, res) =>
{
    res.send("Server is running");
});
app.use("/api/users", userRoutes);
app.use("/api/details", detailsRoutes);
app.use("/api/profile", profileRoutes);


app.listen(port, () => console.log("Server is running on port " + port));
