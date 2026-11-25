import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

// Protect all wishlist routes
router.use(authMiddleware);

// Get wishlist
router.get("/", getWishlist);

// Add product
router.post("/", addToWishlist);

// Clear wishlist
router.delete("/clear", clearWishlist);

// Remove product
router.delete("/:productId", removeFromWishlist);

export default router;
