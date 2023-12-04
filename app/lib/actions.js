"use server";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";
import { revalidatePath } from "next/cache";
import { dbConnection } from "../db/database";
import { Product, User } from "../db/models";
import { redirect } from "next/navigation";
import { genSalt, hash } from "bcrypt";
import bcrypt from "bcrypt";
export const addUser = async (formData) => {
  const convertedToObject = Object.fromEntries(formData);
  try {
    const conection = await dbConnection();
    console.log("========= connected to db to create new user ========");
    const salt = await genSalt(12);
    const hashedPassword = await hash(convertedToObject.password, salt);

    const newUser = new User({
      username: convertedToObject.username,
      email: convertedToObject.email,
      password: hashedPassword,
      phone: convertedToObject.phone,
      isActive: convertedToObject.isActive,
      isAdmin: convertedToObject.isAdmin,
      address: convertedToObject.address,
    });
    await newUser.save();
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/ussers");
  redirect("/dashboard/users");
};
export const addNewUser = async (formData) => {
  const convertedToObject = formData;
  try {
    const conection = await dbConnection();
    console.log("========= connected to db to create new user ========");
    const salt = await genSalt(12);
    const hashedPassword = await hash(convertedToObject.password, salt);

    const newUser = new User({
      username: convertedToObject.username,
      email: convertedToObject.email,
      password: hashedPassword,
    });
    const res = await newUser.save();
    return JSON.stringify(res);
  } catch (error) {
    const e = error.message.substring(
      error.message.indexOf("{") + 1,
      error.message.lastIndexOf("}")
    );
    const splited = e.trim().split(":");

    return splited[0];
  }
};
export const updateUser = async (formdata) => {
  const { id, username, email, password, phone, isAdmin, isActive } =
    Object.fromEntries(formdata);
  const updatedUser = structuredClone({
    username,
    email,
    password,
    phone,
    isAdmin,
    isActive,
  });
  Object.keys(updatedUser).forEach((key) => {
    if (updatedUser[key] === "" || updatedUser[key] === undefined) {
      delete updatedUser[key];
    }
    if (key === "password") {
      const salt = bcrypt.genSaltSync(10);
      updatedUser[key] = bcrypt.hashSync(updatedUser[key], salt);
    }
  });

  try {
    const conection = await dbConnection();
    const updated = await User.findByIdAndUpdate(id, {
      ...updatedUser,
    });
    console.log(updated);
  } catch (error) {
    console.log("=============> in fetch User <=====", error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const deleteUser = async (formData) => {
  const conToObj = Object.fromEntries(formData);
  const id = conToObj.id;
  try {
    const db = await dbConnection();
    const p = await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
};
////////////////////

export const addProduct = async (formData) => {
  const convertedToObject = Object.fromEntries(formData);
  const product = convertedToObject;

  try {
    const conection = await dbConnection();
    console.log("========= connected to db to create new user ========");
    const newProduct = new Product({
      title: product.title,
      category: product.category,
      price: product.price,
      stock: product.stock,
      color: product.color,
      size: product.size,
      desc: product.desc,
    });
    await newProduct.save();
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const deleteProduct = async (formData) => {
  const conToObj = Object.fromEntries(formData);
  const id = conToObj.id;
  try {
    const db = await dbConnection();
    const p = await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
};
export const updateProduct = async (formdata) => {
  const { id, title, category, price, stock, desc } =
    Object.fromEntries(formdata);
  console.log(Object.fromEntries(formdata));
  const updatedProduct = structuredClone({
    title,
    category,
    price,
    stock,
    desc,
  });
  Object.keys(updatedProduct).forEach((key) => {
    if (updatedProduct[key] === "" || updatedProduct[key] === undefined) {
      delete updatedProduct[key];
    }
  });

  try {
    const conection = await dbConnection();
    const updated = await Product.findByIdAndUpdate(id, {
      ...updatedProduct,
    });
  } catch (error) {
    console.log("=============> in fetch User <=====", error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const loginUser = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await dbConnection();
    const data = await User.find({ email: email });
    const user = data[0];
    if (!user) throw new Error("user-not-found");

    const isCorrectPass = await bcrypt.compare(password, user.password);

    if (!isCorrectPass) throw new Error("password-is-wrong");
    // const salt = await genSalt(12);
    // const hashedId = await hash(user.id, salt);
    setCookie("TOKEN", user.id, {
      maxAge: 7200,
      // domain: "dashboard-puce-kappa.vercel.app",
      cookies,
    });
    return JSON.stringify(user);
  } catch (error) {
    return { error: error.message };
  }
};
export const logOut = async (formDada) => {
  setCookie("TOKEN", "", {
    maxAge: -1,
    // domain: "dashboard-puce-kappa.vercel.app",
    cookies,
  });
  redirect("/login");
};
