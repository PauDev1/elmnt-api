import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    maxlength: [50, 'El nombre es demasiado largo']
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    maxlength: [150, 'La descripción no puede superar los 150 caracteres']
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [5, 'El precio no puede ser negativo o menos a 5']
  },
  category: {
    type: String,
    required: [true, 'La categoría es obligatoria']
  },
  volume: {
    type: String,
    required: [true, 'El volumen (ej: 30ml) es obligatorio']
  },
  image: {
    type: String,
    required: [true, 'La URL de la imagen es obligatoria'],
    validate: {
      validator: function (v) {
        return /^https?:\/\/res\.cloudinary\.com\/.+/.test(v);
      },
      message: props => `${props.value} No es un enlace válido de Cloudinary`
    }
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'El stock no puede ser negativo']
  },
  //no obligatorios
  ingredients: { type: String },
  usage: { type: String }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema, 'products');

export default Product;