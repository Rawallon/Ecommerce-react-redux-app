import asyncHandler from 'express-async-handler';
import OrderModel from '../models/orderModel.js';
import ProductModel from '../models/productModel.js';
import sanitize from '../utils/sanitize.js';

// @desc Create new order
// @route POST /api/orders
// @access Private
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    orderItemsQty,
    shippingAddress,
    paymentMethod,
  } = req.body;
  let iArr = [];
  let itemsPrice = 0;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No items in this order');
  } else {
    for (const item in orderItems) {
      await ProductModel.findById(sanitize(orderItems[item]))
        .then((res) => {
          iArr.push({ id: res._id, price: res.price });
          itemsPrice += res.price * orderItemsQty[orderItems[item]];
        })
        .catch((err) => {
          res.status(404);
          throw new Error('Item in order not found, try again later');
        });
    }

    let shippingPrice = +itemsPrice > 100 ? 0 : 100;
    let taxPrice = Number(0.15 * +itemsPrice).toFixed(2);
    let totalPrice = +itemsPrice + +taxPrice + +shippingPrice;
    const order = new OrderModel({
      user: req.user._id,
      orderItems: iArr,
      orderItemsQty: sanitize(orderItemsQty),
      shippingAddress: sanitize(shippingAddress),
      paymentMethod: sanitize(paymentMethod || 'Paypal'),
      itemsPrice: sanitize(itemsPrice),
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @desc Gets order by id
// @route GET /api/orders/:id
// @access Private
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(sanitize(req.params.id)).populate(
    'user',
    'name email',
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
