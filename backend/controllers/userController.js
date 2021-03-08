import asyncHandler from 'express-async-handler';
import UserModel from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';
import sanitize from '../utils/sanitize.js';

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid password or email');
  }
});

// @desc Gets user profile
// @route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Update user profile
// @route PATCH /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(sanitize(req.body._id));
  if (user) {
    //TODO
    // if (user.password !== req.body.oldPassword) {
    //   res.status(401);
    //   throw new Error('Wrong old password');
    // }
    user.name = sanitize(req.body.name) || user.name;
    user.email = sanitize(req.body.email) || user.email;
    if (req.body.password) {
      user.password = sanitize(req.body.password);
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email: sanitize(email) });
  if (userExists) {
    res.status(400);
    throw new Error('User already registered');
  }
  const user = await UserModel.create({
    name: sanitize(name),
    email: sanitize(email),
    password: sanitize(password),
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Gets all users profile
// @route GET /api/users/(:id)
// @access Private
export const getUsersAdmin = asyncHandler(async (req, res) => {
  var users;
  if (!req.params.id) {
    users = await UserModel.find({}).select('-password');
  } else {
    users = await UserModel.findById(req.params.id).select('-password');
  }

  if (users) {
    if (!req.params.id) res.json(users);
    else res.json([users]);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
