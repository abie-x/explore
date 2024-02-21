import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'  
import connectDB from './config/db.js'
import postRoute from '../backend/routes/postRoute.js'

dotenv.config()

//connecting to the database
connectDB()

//initializing the express app
const app = express()


// this for integrating backend and frontend
app.use(cors())
app.use(express.json())   

app.use('/api/posts', postRoute)

//initializing the port
console.log(process.env.PORT)
const port = process.env.PORT || 3001

app.listen(port, console.log(`Server running on port ${port}`))

