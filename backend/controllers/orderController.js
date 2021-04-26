import mercadopago from 'mercadopago';
import asyncHandler from 'express-async-handler';
import OrderModel from '../models/orderModel.js';
import ProductModel from '../models/productModel.js';
import sanitize from '../utils/sanitize.js';
import Mongoose from 'mongoose';
import axios from 'axios';

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

    let pref;
    let shippingPrice = +itemsPrice > 100 ? 0 : 100;
    let taxPrice = Number(0.15 * +itemsPrice).toFixed(2);
    let totalPrice = +itemsPrice + +taxPrice + +shippingPrice;

    if (paymentMethod === 'MercadoPago') {
      mercadopago.configurations.setAccessToken(
        process.env.MERCADO_PAGO_ACCESS_TOKEN,
      );
      let preference = {
        items: [
          {
            title: 'Ecommerce Test!',
            quantity: 1,
            unit_price: totalPrice,
          },
        ],
        back_urls: {
          success: `http://localhost:3000/profile`,
          failure: `http://localhost:3000/profile`,
          pending: `http://localhost:3000/profile`,
        },
        auto_return: 'approved',
      };
      await mercadopago.preferences
        .create(preference)
        .then(function (response) {
          pref = response.body.id;
          //res.json({ id: response.body.id });
        })
        .catch(function (error) {
          console.log(error);
          res.status(500);
          throw new Error('MercadoPago API Error, try again');
        });
    }
    var order = new OrderModel({
      user: req.user._id,
      orderItems: iArr,
      orderItemsQty: sanitize(orderItemsQty),
      shippingAddress: sanitize(shippingAddress),
      paymentMethod: sanitize(paymentMethod || 'PayPal'),
      paymentId: pref,
      itemsPrice: sanitize(itemsPrice),
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    if (paymentMethod === 'MercadoPago') {
      const config = {
        headers: {
          Authorization: 'Bearer ' + process.env.MERCADO_PAGO_ACCESS_TOKEN,
        },
      };
      const data = {
        back_urls: {
          success: `http://localhost:3000/order/${order._id}/pay`,
          failure: `http://localhost:3000/order/${order._id}/pay`,
          pending: `http://localhost:3000/order/${order._id}/pay`,
        },
      };
      axios.put(
        `https://api.mercadopago.com/checkout/preferences/${pref}`,
        data,
        config,
      );
      // await fetch(`https://api.mercadopago.com/checkout/preferences/${pref}`, {
      //   method: 'PUT',
      //   headers: config,
      //   body: data,
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
    }

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc Gets order by id
// @route GET /api/orders/:id
// @access Private
export const getOrderById = asyncHandler(async (req, res) => {
  if (!Mongoose.Types.ObjectId.isValid(sanitize(req.params.id))) {
    res.status(404);
    throw new Error('Order not found');
  }
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

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({}).populate('user', 'name email');

  if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
export const putUpdateOrderPay = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(sanitize(req.params.id));

  if (order) {
    switch (order.paymentMethod) {
      case 'MercadoPago':
        order.isPaid = req.body.status === 'approved';
        order.paidAt = req.body.status === 'approved' ? Date.now() : null;
        order.paymentResult = {
          id: req.body.payment_id,
          status: req.body.status,
          update_time: Date.now(),
          email_Address: null,
        };
        break;

      case 'PayPal':
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_Address: req.body.payer.email_address,
        };
        break;

      default:
        res.status(500);
        throw new Error('Error with the paying method from your order');
        break;
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private
export const putUpdateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(sanitize(req.params.id));

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Get logged user orders
// @route GET /api/orders/myorders
// @access Private
export const getOrderUserOrders = asyncHandler(async (req, res) => {
  const order = await OrderModel.find({ user: req.user._id });
  res.json(order);
});
