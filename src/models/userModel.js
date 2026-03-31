import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "El nombre de usuario es obligatorio"],
    unique: true, 
    trim: true,
    lowercase: true, 
    minlength: [3, "El usuario debe tener al menos 3 caracteres"]
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: [6, "La contraseña debe tener al menos 6 caracteres"]
  },
  role: {
    type: String,
    default: 'admin'
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;