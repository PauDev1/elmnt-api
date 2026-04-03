import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { validateProductQuery, validateProductBody, validateProductId } from '../middleware/productValidation.js'; 

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', validateProductQuery, getProducts);

router.get('/:id', validateProductId,getProductById);
router.post('/', protect, validateProductBody, createProduct);    
router.put('/:id', protect, validateProductId, validateProductBody, updateProduct);  
router.delete('/:id', protect, validateProductId, deleteProduct); 

export default router;