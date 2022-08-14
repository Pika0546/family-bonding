import express from "express";
import { getHome } from "./SiteController";

const router = express.Router();

router.get('/', getHome)

export default router;