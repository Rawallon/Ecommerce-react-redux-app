import express from 'express';
import asyncHandler from 'express-async-handler';

import ProductModel from '../models/productModel.js';

const router = express.Router();
// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find({});
    res.json(products);
  }),
);

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  }),
);

// @desc Fetch all product of a given category
// @route GET /api/products/category/:cat
// @access Public
router.get(
  '/category/:cat',
  asyncHandler(async (req, res) => {
    const category = await ProductModel.find({ category: req.params.cat });

    if (category.length > 0) {
      res.json(category);
    } else {
      res.status(404);
      throw new Error('Category is empty');
    }
  }),
);

export default router;
