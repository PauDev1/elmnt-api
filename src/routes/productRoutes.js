import express from 'express';

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);    // Nueva!
router.put('/:id', updateProduct);  // Nueva!
router.delete('/:id', deleteProduct); // Nueva!

export default router;