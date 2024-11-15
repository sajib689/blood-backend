import { Request, Response } from "express";
import { createUserToDb, getUsersFromDb } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await createUserToDb(data);
    res.status(200).json({
        status: 'success',
        data: user
    });
}


export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersFromDb()
    res.status(200).json({users})
}