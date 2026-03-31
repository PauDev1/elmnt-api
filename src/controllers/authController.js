import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 1. Verificar si el usuario ya existe
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // 2. Encriptar la contraseña (Hashing)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Crear y guardar el nuevo usuario
    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "Admin registrado con éxito",
      user: { id: newUser._id, username: newUser.username, role: newUser.role }
    });

  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // El token dura 1 día, se puede tambien '12h' si quiero que dure 12 horas por ej
    );

    res.json({
      message: "Login exitoso",
      token,
      user: { username: user.username, role: user.role }
    });

  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};