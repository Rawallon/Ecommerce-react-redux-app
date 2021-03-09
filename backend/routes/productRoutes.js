import express from 'express';
import {
  addReview,
  createProductAdmin,
  deletProductAdmin,
  getProductByCategory,
  getProductById,
  getProducts,
  getTopProducts,
  updateProductAdmin,
} from '../controllers/productController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProductAdmin);
router.get('/top', getTopProducts);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deletProductAdmin)
  .patch(protect, isAdmin, updateProductAdmin);

router.route('/category/:cat').get(getProductByCategory);

router.route('/:id/reviews').post(protect, addReview);

export default router;
