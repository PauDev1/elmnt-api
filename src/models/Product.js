import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  volume: { type: String },
  stock: { type: Number, default: 0 },
  image: { type: String },
  ingredients: { type: String },
  usage: { type: String }
}, { 
  timestamps: true 
});

const Product = mongoose.model('Product', productSchema, 'products');

export default Product;