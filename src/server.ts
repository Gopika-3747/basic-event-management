import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes';

// Load from .env 
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Middleware 
app.use(express.json());

app.use('/api', eventRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
