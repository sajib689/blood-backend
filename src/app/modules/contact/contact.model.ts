import { model } from "mongoose";
import { IContact } from "./contact.interface";
import { contactSchema } from "./contact.schema";

export const Contact = model<IContact>('Contact', contactSchema)