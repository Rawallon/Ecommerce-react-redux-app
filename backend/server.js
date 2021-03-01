import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productsRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Try hitting /API');
  console.warn('Hit the API!');
});

app.use('/api/products', productsRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} on port ${PORT}`),
);
