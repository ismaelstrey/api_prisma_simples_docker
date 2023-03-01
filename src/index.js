import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import routes from "./routes";

dotenv.config()
const port = process.env.PORT || 3001
const app = express();
app.use(cors())
app.use(express.json())

routes(app)
app.listen(port, () => console.log(`http://localhost:${port}`))