import { Request, Response } from "express";
import { createContactToDb, getContactFromDb } from "./contact.service";

export const createContact = async(req: Request, res: Response) => {
    const contact = await createContactToDb(req.body)
    res.status(200).json({
        status: 'Message Sent Successfully!',
        data: contact
    })
}

export const getContact = async (req: Request, res: Response) => {
    const contacts = await getContactFromDb()
    res.status(200).json({contacts})
}