import { createUser, getUsers } from "./user.controler";
import express from "express";
const router = express.Router();

router.post('/create-users', createUser)
router.get('/users', getUsers)

export default router