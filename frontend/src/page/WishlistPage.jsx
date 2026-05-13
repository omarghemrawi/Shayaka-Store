import React from "react";
import "./WishlistPage.css";
import pants1 from "../assets/Feature Products/pants1.jpg";
import pants2 from "../assets/Feature Products/pants2.jpg";
import pants3 from "../assets/Feature Products/pants3.jpg";

const WishlistPage = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Oversized Cotton Hoodie",
      category: "Women Fashion",
      description: "Soft premium cotton hoodie with modern oversized fit.",
      newPrice: 89,
      oldPrice: 120,
      image: pants1,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      category: "Men Fashion",
      description: "Classic slim fit jeans with a comfortable stretch.",
      newPrice: 79,
      oldPrice: 110,
      image: pants2,
    },
    {
      id: 3,
      name: "High-Waisted Trousers",
      category: "Women Fashion",
      description: "Elegant high-waisted trousers with a tailored silhouette.",
      newPrice: 99,
      oldPrice: 150,
      image: pants3,
    },
  ];
  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <p>{wishlistItems.length} Items</p>
      </div>

      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your wishlist is empty</h2>
            <p>Start adding your favorite products to the wishlist.</p>
          </div>
        ) : (
          wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <div className="wishlist-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="wishlist-details">
                <span className="product-category">{item.category}</span>

                <h2>{item.name}</h2>

                <p className="product-description">{item.description}</p>

                <div className="product-bottom">
                  <div className="price-section">
                    <span className="new-price">
                      ${item.newPrice.toFixed(2)}
                    </span>
                    <span className="old-price">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="wishlist-actions">
                    <button className="cart-btn">Add To Cart</button>

                    <button className="remove-btn">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
