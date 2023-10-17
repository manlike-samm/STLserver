import express from "express";
import {
  getBundle,
  createPost,
  updatePost,
  searchProduct,
  getProducts,
  createLookBook,
  getLookBook,
  updateLookBook,
} from "../controllers/orders.js";

const router = express.Router();
// router.get("/search", getProducts);
router.get("/look", getProducts);
// router.post("/look", createPost);
router.post("/look", createLookBook);
router.put("/look", createLookBook);
router.put("/lookbook/:id", updateLookBook);
router.get("/search", searchProduct);
router.get("/lookbook/:id", getLookBook);

export default router;
