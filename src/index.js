import dotenv from 'dotenv';
dotenv.config(); 

import app from './app.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
  })
  .catch(err => console.error('❌ Error:', err));