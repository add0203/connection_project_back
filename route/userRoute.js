import express from "express";
const Router = express.Router();

import { register, signIn } from "../controller/userController.js";

Router.route("/register").post(register);
Router.route("/signIn").post(signIn);

export default Router;
