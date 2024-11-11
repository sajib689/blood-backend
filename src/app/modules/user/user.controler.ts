import { Request, Response } from "express";
import { createUserToDb } from "./user.service";

export const createUser = async (res: Response, req: Request) => {
    const data = req.body
    const user = await createUserToDb(data)
    res.status(200).json({
        status: 'success',
        data: user
    })
}