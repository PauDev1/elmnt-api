import dotenv from 'dotenv';
dotenv.config(); 

import app from './app.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
  console.error('❌ ERROR: MONGO_URI no está definida en las variables de entorno');
  process.exit(1); 
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error de conexión:', err.message);
  });