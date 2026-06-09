import React from "react";
import "./Orders.css";

const Orders = ({ userInfo }) => {
  const user = userInfo;

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="orders-tab">
      <div className="orders-header">
        <h2>My Orders</h2>
        <p>
          You have <span className="order-count">{user.orders.length}</span>{" "}
          orders
        </p>
      </div>

      <div className="orders-list">
        {user.orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-main">
              <div className="order-id">
                <span className="label">Order</span>
                <span className="value">#{order.id}</span>
              </div>

              <div className="order-products">
                <span className="label">Products</span>
                <span className="value">{order.products} items</span>
              </div>

              <div className="order-status">
                <span
                  className={`status-badge ${getStatusClass(order.status)}`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <button
              className="delete-btn"
              disabled={order.status !== "Delivered"}
              onClick={() => console.log("hello")}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
