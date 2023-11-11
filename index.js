import express from "express";
import { config } from "dotenv";
import connectDB from "./src/db/database.js";
import router from "./src/routes/singUp.routes.js";
const app = express();
const port = 3000;
config();
connectDB();

/*
 * ~ middleware
 */
app.use(express.json());

/*
 * ~ routes
 */
app.use("/api", router);

/*
 * ~ starting server from here
 */
const start = async () => {
  try {
    await app.listen(port, () => {
      console.log("port is listening in ", port);
    });
  } catch (error) {
    console.log("error occurred at server starting ~~", error);
    process.exit(1);
  }
};
start();
