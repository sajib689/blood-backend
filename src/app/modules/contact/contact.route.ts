import express from 'express';
import { createContact } from './contact.controler';
const router = express.Router()

router.post('/create-contact', createContact)

export default router