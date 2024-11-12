import express from 'express';
import { createContact, getContact } from './contact.controler';
const router = express.Router()

router.post('/create-contact', createContact)
router.get('/contacts', getContact)

export default router