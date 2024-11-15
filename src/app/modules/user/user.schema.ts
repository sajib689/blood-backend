import { Schema } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema <IUser>({
    name: {
        type: "string",
        required: true,
    },
    bloodGroup: {
        type: "string",
        required: true,
    },
    role: {
        type: "string",
    },
    dateOfBirth: {
        type: "string",
        required: true,
    },
    gender: {
        type: "string",
        enum: ["male", "female"],
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    contactNumber: {
        type: "string",
        required: true,
    },
    emergencyContactNumber: {
        type: "string",
        required: true,
    },
    presentAddress: {
        type: "string",
        required: true,
    },
    permanentAddress: {
        type: "string",
        required: true,
    }
})