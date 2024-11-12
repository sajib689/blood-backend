import { Request, Response } from "express";

export const createContact = async(req: Request, res: Response) => {
    const contact = await req.body
    res.status(200).json({
        status: 'Success',
        data: contact
    })
}