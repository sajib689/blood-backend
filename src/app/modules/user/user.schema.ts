import { Schema } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema<IUser>(
  {
    name: { type: String},
    bloodGroup: { 
      type: String, 
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], 
   
    },
    role: { type: String, default: "member" },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female"]},
    email: { type: String, unique: true },
    contactNumber: { type: String },
    emergencyContactNumber: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String},
  },
  { timestamps: true }
);
