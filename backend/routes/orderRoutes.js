import express from 'express';
import {
  addOrderItems,
  getAllOrders,
  getOrderById,
  getOrderUserOrders,
  putUpdateOrderPay,
} from '../controllers/orderController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, isAdmin, getAllOrders);

router.route('/myorders').get(protect, getOrderUserOrders);

router.route('/:id/pay').put(protect, putUpdateOrderPay);

router.route('/:id').get(protect, getOrderById);

export default router;
