import express from 'express';
import {
  getFeaturedCategoryData,
  getMessageData,
} from '../controllers/homeController.js';

import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/message').get(getMessageData);

router.route('/featCategory').get(getFeaturedCategoryData);

export default router;
