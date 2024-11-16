import { Request, Response } from "express";
import { createUserToDb, findUserByEmail, getUsersFromDb } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    
    const {email} = req.body
    const exitingUser = await findUserByEmail(email)
    if(exitingUser) {
        return res.status(400).json({ success: false, message: "Email already exists" });
    }
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