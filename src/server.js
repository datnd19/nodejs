import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
const app = express();
const PORT = process.env.PORT || 8080;
import { createJWT, verifyToken } from "./middleware/JWTAction";
//config CORS
configCors(app);

//config view engine
configViewEngine(app);
//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//connectDB
connection();

//test JWT
createJWT();
let data = verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGF0IiwiYWdlIjoyMCwiaWF0IjoxNjk1MTczMTA0fQ.L4vrIYLx3mXOEBVTHsGsbLmAJOiZl3J7Uba-yj4IP4s"
);
console.log(data);
//init web routes
initWebRoutes(app);
initApiRoutes(app);
app.listen(PORT, () => {
  console.log("Hello");
});
