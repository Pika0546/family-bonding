import express from 'express'

import { login } from "../api/account/login";
import { logout } from '../api/account/logout';
import { createAccount } from "../api/account/signup";
import { auth } from '../middleware/auth';

const router = express.Router();
router.post('/login', login);
router.post('/logout', auth,logout);
router.post('/', createAccount);

export default router; 