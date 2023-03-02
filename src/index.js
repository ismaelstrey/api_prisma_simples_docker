import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

routes(app);
app.listen({ host: process.env.HOST, port: process.env.PORT }, () =>
    console.log(`${process.env.HOST}:${process.env.PORT}`)
);