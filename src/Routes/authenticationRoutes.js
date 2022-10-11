import express from "express";
import _ from "lodash";
import authCtrl from "../Controller/Authentication.js";

const router = express.Router();

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.post("/userData", authCtrl.getUser);

export default router;
