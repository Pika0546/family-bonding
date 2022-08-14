import express from "express";
import { createAccount, getAccountList, getHome } from "./SiteController";

const router = express.Router();

router.get('/', getAccountList)

export default router;