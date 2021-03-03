import express from 'express';
import {
  getProductByCategory,
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

router.route('/category/:cat').get(getProductByCategory);

export default router;
