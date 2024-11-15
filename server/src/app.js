import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

// routes
import organizationRoutes from "./routes/organization.routes.js";
import adminRoutes from "./routes/admin.routes.js";

app.use("/organization", organizationRoutes);

app.use("/admin", adminRoutes);


export {app}; // Named export 