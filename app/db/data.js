import { dbConnection } from "./database";

const { User, Product } = require("./models");

export const usersFetch = async (q, page) => {
  let users;
  const regex = new RegExp(q, "i");
  const item_per_page = 2;
  try {
    const conection = await dbConnection();
    users = await User.find({ username: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));
    const count = await User.find().count();
    return { users, count };
  } catch (error) {
    console.log("=============>", error);
  }
};
export const userFetch = async (id) => {
  try {
    const conection = await dbConnection();
    const user = await User.findById(id);
    return {
      _id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      img: user.img,
      isAdmin: user.isAdmin,
      isActive: user.isActive,
      phone: user.phone,
    };
  } catch (error) {
    console.log("=============> in fetch User <=====", error);
  }
};

export const productsFetch = async (q, page) => {
  let products;
  const regex = new RegExp(q, "i");
  const item_per_page = 2;
  try {
    const conection = await dbConnection();
    products = await Product.find({ title: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));
    const count = await Product.find().count();
    return { products, count };
  } catch (error) {
    console.log("=============>", error);
  }
};

export const productFetch = async (id) => {
  try {
    const conection = await dbConnection();
    const product = await Product.findById(id);
    return {
      _id:product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      stock: product.stock,
      color: product.color,
      desc: product.desc,
    };
  } catch (error) {
    console.log("=============> in fetch User <=====", error);
  }
};
