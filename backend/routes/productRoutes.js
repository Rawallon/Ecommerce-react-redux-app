import express from 'express';
import {
  addReview,
  createProductAdmin,
  deleteProductAdmin,
  getCategoryNames,
  getFeaturedProducts,
  getProductByCategory,
  getProductById,
  getProducts,
  getTopProducts,
  updateProductAdmin,
} from '../controllers/productController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
//.post(protect, isAdmin, createProductAdmin);

router.route('/featured/:category?').get(getFeaturedProducts);

router.route('/top/:category?').get(getTopProducts);

router.route('/:id').get(getProductById);
//.delete(protect, isAdmin, deleteProductAdmin)
//.patch(protect, isAdmin, updateProductAdmin);

router.route('/category/name').get(getCategoryNames);

router.route('/category/:category').get(getProductByCategory);

router.route('/:id/reviews').post(protect, addReview);

export default router;
