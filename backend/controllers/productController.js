import asyncHandler from 'express-async-handler';
import ProductModel from '../models/productModel.js';
import sanitize from '../utils/sanitize.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
});

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await ProductModel.findById(sanitize(req.params.id));

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Fetch all product of a given category
// @route GET /api/products/category/:cat
// @access Public
export const getProductByCategory = asyncHandler(async (req, res) => {
  const category = await ProductModel.find({
    category: sanitize(req.params.cat),
  });

  if (category.length > 0) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error('Category is empty');
  }
});

// @desc Delete a product
// @route GET /api/products/:id
// @access Private
export const deletProductAdmin = asyncHandler(async (req, res) => {
  const object = await ProductModel.findById(sanitize(req.params.id));

  if (object) {
    await object.remove();
    res.status(200).json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Object not found');
  }
});

// @desc Update product data
// @route PATCH /api/product/
// @access Private
export const updateProductAdmin = asyncHandler(async (req, res) => {
  const object = await ProductModel.findById(sanitize(req.params.id));
  if (object) {
    object.name = sanitize(req.body.name) || object.name;
    object.price = sanitize(req.body.price) || object.price;
    object.category = sanitize(req.body.category) || object.category;
    object.brand = sanitize(req.body.brand) || object.brand;
    object.description = sanitize(req.body.description) || object.description;
    object.countInStock =
      sanitize(req.body.countInStock) || object.countInStock;

    const updatedObj = await object.save();
    res.json(updatedObj);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
