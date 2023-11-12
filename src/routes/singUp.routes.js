import express, { Router } from "express";
const router = express.Router();
/*
 * importing a controllers from  `controllers` folder
 */
import { singInUser, singUpUser } from "../controllers/signUp.controllers.js";

/*
 * ~ routes
 */

router.route("/signup").post(singUpUser);
router.route("/singin").get(singInUser);

export default router;
