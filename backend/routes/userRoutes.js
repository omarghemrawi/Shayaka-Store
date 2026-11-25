import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getProfile,
  updateProfile,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/userController.js";

const router = express.Router();

// Profile
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

// Addresses
router.post("/addresses", authMiddleware, addAddress);
router.put("/addresses/:addressId", authMiddleware, updateAddress);
router.delete("/addresses/:addressId", authMiddleware, deleteAddress);

export default router;
