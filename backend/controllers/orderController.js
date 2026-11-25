import Order from "../models/orderModel.js";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const { shippingAddress, shippingMethod, paymentMethod } = req.body;

    // Get user's cart
    const cart = await Cart.findOne({
      userId: req.user.id,
    }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty",
      });
    }

    // Prepare order items and calculate subtotal
    let subtotal = 0;
    const orderItems = [];

    for (const item of cart.items) {
      const product = item.productId;

      if (!product || !product.isActive) {
        return res.status(400).json({
          success: false,
          message: "One or more products are unavailable",
        });
      }

      if (item.quantity > product.stock) {
        return res.status(400).json({
          success: false,
          message: `${product.name} has insufficient stock`,
        });
      }

      const finalPrice =
        product.price - (product.price * product.discount) / 100;

      subtotal += finalPrice * item.quantity;

      orderItems.push({
        productId: product._id,
        name: product.name,
        image: product.images[0],
        size: item.size,
        color: item.color,
        price: finalPrice,
        quantity: item.quantity,
      });
    }

    // Calculate shipping fee on the backend
    const shippingFee = 0; // Configure your shipping fees here

    const totalPrice = subtotal + shippingFee;

    // Create order
    const order = await Order.create({
      userId: req.user.id,
      items: orderItems,
      shippingAddress,
      shippingMethod,
      paymentMethod,
      subtotal,
      shippingFee,
      totalPrice,
    });

    // Clear user's cart
    cart.items = [];
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Order
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
