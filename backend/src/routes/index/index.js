import express from "express";
import auth from '../../middleware/auth.js';
import { home, amIAuth } from "./index.controllers.js";

var router = express.Router();

/* GET home page. */
router.get('/', home);
router.get('/auth', auth, amIAuth);

export default router;
