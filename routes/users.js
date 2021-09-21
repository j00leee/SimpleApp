import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
import { signin2, signup2 } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

router.post("/signin2", signin2);
router.post("/signup2", signup2);

export default router;