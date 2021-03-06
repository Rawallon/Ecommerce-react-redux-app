import express from 'express';
import {
  addOrderItems,
  getOrderById,
  getOrderUserOrders,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);

router.route('/myorders').get(protect, getOrderUserOrders);

router.route('/:id/pay').put(protect, updateOrderToPaid);

router.route('/:id').get(protect, getOrderById);

export default router;
