import express from 'express';
import {
  addOrderItems,
  getOrderById,
  getOrderUserOrders,
  putUpdateOrderPay,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);

router.route('/myorders').get(protect, getOrderUserOrders);

router.route('/:id/pay').put(protect, putUpdateOrderPay);

router.route('/:id').get(protect, getOrderById);

export default router;
