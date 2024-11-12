import { Schema } from "mongoose";
import { IContact } from "./contact.interface";

export const contactSchema = new Schema <IContact>({
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    message: {
        type: "string",
        required: true,
    }
})