import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/blog'
  mongoose.connection.on('open', () => {
    console.info('Connected to database', DATABASE_URL)
  })
  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
