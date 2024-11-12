import express, { Application } from 'express'
import cors from 'cors';
const app:Application = express()
import userRoute from './src/app/modules/user/user.route'
import contactRoute from './src/app/modules/contact/contact.route'
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/user', userRoute)
app.use("/api/v1", contactRoute)

export default app