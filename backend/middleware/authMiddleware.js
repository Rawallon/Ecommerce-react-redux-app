import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Remove "bearer" from the token
      let token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);
      // Saves as "req.user"
      req.user = await UserModel.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Bad token');
    }
  } else {
    res.status(401);
    throw new Error('No token');
  }
});

export const isAdmin = (req, res, next) => {
  // req.user is passed by protect middleware
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized');
  }
};
