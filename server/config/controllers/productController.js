// productController.js

import Product from "../models/Product.js";

// GET ALL PRODUCTS

export const getProducts = async (req, res) => {

  try {

    const products = await Product.find()
      .populate("user", "_id name email");

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET SINGLE PRODUCT

export const getProductById = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      ).populate(
        "user",
        "_id name email"
      );

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// CREATE PRODUCT

export const createProduct = async (
  req,
  res
) => {

  try {

    const product = new Product({

      user: req.user._id,

      name: req.body.name,

      price: req.body.price,

      image: req.body.image,

      category: req.body.category,

      description:
        req.body.description,

      countInStock:
        req.body.countInStock,
    });

    const createdProduct =
      await product.save();

    res.status(201).json(
      createdProduct
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// DELETE PRODUCT

export const deleteProduct = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res.status(404).json({
        message:
          "Product Not Found",
      });
    }

    if (
      product.user.toString() !==
      req.user._id.toString()
    ) {

      return res.status(401).json({
        message:
          "Not Authorized",
      });
    }

    await product.deleteOne();

    res.json({
      message:
        "Product Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// UPDATE PRODUCT

export const updateProduct = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res.status(404).json({
        message:
          "Product Not Found",
      });
    }

    if (
      product.user.toString() !==
      req.user._id.toString()
    ) {

      return res.status(401).json({
        message:
          "Not Authorized",
      });
    }

    product.name =
      req.body.name;

    product.price =
      req.body.price;

    product.image =
      req.body.image;

    product.category =
      req.body.category;

    product.description =
      req.body.description;

    product.countInStock =
      req.body.countInStock;

    const updatedProduct =
      await product.save();

    res.json(updatedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};