import asyncHandler from 'express-async-handler';
import homeModel from '../models/homeModel.js';

// @desc Fetch homepage message information
// @route GET /api/homepage/message
// @access Public
export const getMessageData = asyncHandler(async (req, res) => {
  const homePageData = await homeModel
    .findOne()
    .select(
      'messageTitle messageSubtitle messageColor messageLink messageButton messageImage -_id',
    );
  res.json(homePageData);
});

// @desc Fetch featured category information
// @route GET /api/homepage/featCategory
// @access Public
export const getFeaturedCategoryData = asyncHandler(async (req, res) => {
  const homePageData = await homeModel
    .findOne()
    .select(
      'featuredCategoryImage featuredCategoryTitle featuredCategoryColor featuredCategoryCategoryName -_id',
    );
  res.json(homePageData);
});
