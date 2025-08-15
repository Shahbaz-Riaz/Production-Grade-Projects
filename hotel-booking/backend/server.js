import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import {clerkMiddleware} from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDb(); // Connect to the database
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(clerkMiddleware()); // Use Clerk middleware for authentication
dotenv.config();


// API to listen for Clerk webhooks
app.use('/api/clerk-webhooks', clerkWebhooks);

app.get('/', (req, res) => {
  res.send('Welcome to the Hotel Booking API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




