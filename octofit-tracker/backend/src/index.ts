import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(express.json())

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker API running on port ${PORT}`)
})
