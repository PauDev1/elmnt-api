import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { validateProductQuery, validateProductBody } from '../middleware/productValidation.js'; 

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', validateProductQuery, getProducts);

router.get('/:id', getProductById);
router.post('/', protect, validateProductBody, createProduct);    
router.put('/:id', protect, validateProductBody, updateProduct);  
router.delete('/:id', protect, deleteProduct); 

export default router;