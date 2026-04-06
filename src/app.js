import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();


const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL 
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.get('/health', (req, res) => {
  res.status(200).send('Server is alive and kicking');
});
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

export default app;