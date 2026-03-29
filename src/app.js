import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 

// Conexión
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error:', err));

// Rutas
app.use('/api/products', productRoutes);


app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));