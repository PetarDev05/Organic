import express from "express";

// controllers
import {
  signUpUser,
  loginUser,
  extendUserSession,
  logoutUser,
} from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/extend", extendUserSession);
router.post("/logout", logoutUser);

export default router;
