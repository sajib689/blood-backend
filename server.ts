import mongoose from "mongoose";
import app from "./app";
require('dotenv').config()

const port:number = 5000

async function connectDb() {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/blood-donation`)
        app.listen(port, () => {
            console.log(`The server start on the ${port}`)
        })
    } catch(error) {
        console.error('Failed to connect to database', error);
    }
}
connectDb()