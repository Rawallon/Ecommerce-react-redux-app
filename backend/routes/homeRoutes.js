import express from 'express';
import {
  getFeaturedCategoryData,
  getMessageData,
} from '../controllers/homeController.js';

const router = express.Router();

router.route('/message').get(getMessageData);

router.route('/featCategory').get(getFeaturedCategoryData);

export default router;
