import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import orderRouter from './routes/order.routes.js'
import categoryRouter from './routes/categories.routes.js'

const app = express();

// configure dotenv
dotenv.config();

// conenct to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)
app.use('/api/categories', categoryRouter)

// catch-all route for undefined routes
app.use((req, res, next) => {
  res.status(404).send({ message: 'Route not found bhaiya' });
});

const PORT = process.env.PORT || 5500;

app.use('/',(req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// edits