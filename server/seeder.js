import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./config/models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [

  {
    name: "iPhone 15",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    description: "Apple smartphone",
    category: "Mobile",
    countInStock: 10,
  },

  {
    name: "Samsung S24",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    description: "Samsung flagship phone",
    category: "Mobile",
    countInStock: 8,
  },

  {
    name: "Nike Shoes",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Running shoes",
    category: "Shoes",
    countInStock: 20,
  },

  {
    name: "Puma Sneakers",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    description: "Stylish sneakers",
    category: "Shoes",
    countInStock: 15,
  },

  {
    name: "Gaming Laptop",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High performance laptop",
    category: "Electronics",
    countInStock: 5,
  },

  {
    name: "Smart Watch",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Fitness smartwatch",
    category: "Electronics",
    countInStock: 12,
  },

  {
    name: "Bluetooth Headphones",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Wireless headphones",
    category: "Electronics",
    countInStock: 25,
  },

  

  {
    name: "Adidas Hoodie",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Warm hoodie",
    category: "Clothing",
    countInStock: 18,
  },

  {
    name: "Leather Wallet",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
    description: "Premium wallet",
    category: "Accessories",
    countInStock: 30,
  },

];

const seedProducts = async () => {

  try {

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Added");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

seedProducts();