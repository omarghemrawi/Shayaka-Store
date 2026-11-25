import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cartController.js";

const router = express.Router();

// All cart routes require authentication
router.use(authMiddleware);

// Get cart
router.get("/", getCart);

// Add product
router.post("/", addToCart);

// Update quantity
router.put("/:itemId", updateCartItem);

// Remove product
router.delete("/:itemId", removeFromCart);

// Clear cart
router.delete("/clear", clearCart);

export default router;
