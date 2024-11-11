import { createUser } from "./user.controler";
import express from "express";
const router = express.Router();

router.post('/create-users', createUser)

export default router