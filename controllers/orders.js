import express from "express";

import PostProduct from "../models/product.js";
import PostBundle from "../models/bundle.js";
import LookBook from "../models/lookbook.js";

const router = express.Router();

export const getProducts = async (req, res) => {
  try {
    const updatedPost = await PostProduct.find({});
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getBundle = async (req, res) => {
  try {
    const post = await PostBundle.find({});

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { updatedBundle } = req.body;
  const postN = new PostBundle(updatedBundle);

  try {
    await postN.save();

    res.status(201).json(postN);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const createLookBook = async (req, res) => {
  const updatedBundle = req.body;
  const postN = new LookBook(updatedBundle);

  try {
    await postN.save();

    res.status(201).json(postN);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateLookBook = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;

  const updatedBundle = req.body;

  try {
    await LookBook.findByIdAndUpdate(id, updatedBundle, { new: true });
    res.status(201).json({ updatedBundle });
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { id } = req.params;
  const { updatedBundle } = req.body;

  try {
    await PostBundle.findByIdAndUpdate(id, updatedBundle, { new: true });
    res.status(201).json({ updatedBundle });
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const searchProduct = async (req, res) => {
  const inputValue = req.query.q;

  try {
    const result = await PostProduct.find({
      text: { $regex: inputValue, $options: "i" },
    });

    // console.log(result);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};
export const getLookBook = async (req, res) => {
  const productId = req.params.id; // Assuming the ID is in the route parameters

  try {
    const product = await LookBook.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default router;
