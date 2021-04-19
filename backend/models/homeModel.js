import mongoose from 'mongoose';

const homeModel = mongoose.Schema(
  {
    messageTitle: { type: String, required: true },
    messageSubtitle: { type: String, required: true },
    messageColor: { type: String, required: true },
    messageLink: { type: String, required: true },
    messageButton: { type: String, required: true },
    messageImage: { type: String, required: true },
    featuredCategoryImage: { type: String, required: true },
    featuredCategoryTitle: { type: String, required: true },
    featuredCategoryColor: { type: String, required: true },
    featuredCategoryCategoryName: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const HomeData = mongoose.model('HomeInformation', homeModel);

export default HomeData;
