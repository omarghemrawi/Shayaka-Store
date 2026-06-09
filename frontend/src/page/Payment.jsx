import React, { useState } from "react";
import { CreditCard, Truck, ShieldCheck, Lock } from "lucide-react";
import "./Payment.css";

const Payment = ({ cartTotal = 0 }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.phone.length < 8) newErrors.phone = "Invalid phone";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.city.trim()) newErrors.city = "Required";
    if (formData.cardNumber.length < 16) newErrors.cardNumber = "Invalid card";
    if (!formData.cvv || formData.cvv.length < 3) newErrors.cvv = "Invalid CVV";
    if (!formData.cardHolder.trim()) newErrors.cardHolder = "Required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment successful! Order confirmed.");
    }, 2000);
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Left: Form */}
        <div className="payment-form-section">
          <h2>
            <Lock size={20} /> Secure Checkout
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Shipping Info */}
            <div className="form-section">
              <h3>
                <Truck size={18} /> Shipping Information
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.fullName ? "error" : ""}
                  />
                  {errors.fullName && (
                    <span className="error-msg">{errors.fullName}</span>
                  )}
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-msg">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="71 03 66 96"
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && (
                    <span className="error-msg">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className={errors.address ? "error" : ""}
                />
                {errors.address && (
                  <span className="error-msg">{errors.address}</span>
                )}
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Beirut"
                  className={errors.city ? "error" : ""}
                />
                {errors.city && (
                  <span className="error-msg">{errors.city}</span>
                )}
              </div>
            </div>

            {/* Payment Info */}
            <div className="form-section">
              <h3>
                <CreditCard size={18} /> Payment Details
              </h3>
              <div className="form-group">
                <label>Card Holder Name</label>
                <input
                  type="text"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleChange}
                  placeholder="Name on card"
                  className={errors.cardHolder ? "error" : ""}
                />
                {errors.cardHolder && (
                  <span className="error-msg">{errors.cardHolder}</span>
                )}
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formatCardNumber(formData.cardNumber)}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({ ...prev, cardNumber: raw }));
                  }}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  className={errors.cardNumber ? "error" : ""}
                />
                {errors.cardNumber && (
                  <span className="error-msg">{errors.cardNumber}</span>
                )}
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, "");
                      if (val.length >= 2)
                        val = val.slice(0, 2) + "/" + val.slice(2, 4);
                      setFormData((prev) => ({ ...prev, expiryDate: val }));
                    }}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="4"
                    className={errors.cvv ? "error" : ""}
                  />
                  {errors.cvv && (
                    <span className="error-msg">{errors.cvv}</span>
                  )}
                </div>
              </div>
            </div>

            <button type="submit" className="pay-btn" disabled={isProcessing}>
              {isProcessing ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row">
            <span>Tax (11%)</span>
            <span>${(cartTotal * 0.11).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${(cartTotal * 1.11).toFixed(2)}</span>
          </div>

          <div className="secure-badge">
            <ShieldCheck size={16} />
            <span>SSL Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
