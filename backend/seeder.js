import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import Post from './models/postModel.js'
import connectDB from './config/db.js'
import posts from './data/postData.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
      await Post.deleteMany()
      await Post.insertMany(posts)
      console.log('Data Imported!'.green.inverse)
      process.exit()
    } catch (error) {
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
}

const destroyData = async () => {
    try {
      await Post.deleteMany()
  
      console.log('Data Destroyed!'.red.inverse)
      process.exit()
    } catch (error) {
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
}
  

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()    
}