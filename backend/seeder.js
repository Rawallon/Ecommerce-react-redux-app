import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import homeinformations from './data/homeinformations.js';

import HomeModel from './models/homeModel.js';
import UserModel from './models/userModel.js';
import ProductModel from './models/productModel.js';
import OrderModel from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await HomeModel.deleteMany();
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    const createdHomeInfo = await HomeModel.insertMany(homeinformations);
    const createdUsers = await UserModel.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((item) => ({
      ...item,
      user: adminUser,
    }));

    await ProductModel.insertMany(sampleProducts);

    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(`Error importing: ${error}`);
    process.exit(1);
  }
};

const purgeData = async () => {
  try {
    await HomeModel.deleteMany();
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    console.log('Data pruged!');
    process.exit();
  } catch (error) {
    console.error(`Error purging: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d' || process.argv[2] === '-D') purgeData();
else importData();
