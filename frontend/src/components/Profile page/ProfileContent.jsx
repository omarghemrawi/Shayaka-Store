import React from "react";
import "./ProfileContent.css";
const ProfileContent = (user) => {
  const userInfo = user.userInfo;
  return (
    <div className="profile-content">
      <div className="profile-card">
        <h3>Account Information</h3>
        <div className="info-section">
          <div className="info-row">
            <span>First Name</span>
            <p>{userInfo.firstName}</p>
          </div>
          <div className="info-row">
            <span>Last Name</span>
            <p>{userInfo.lastName}</p>
          </div>

          <div className="info-row">
            <span>Email</span>
            <p>{userInfo.email}</p>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <p>{userInfo.phone}</p>
          </div>
        </div>
        <div className="address-info">
          {userInfo.addresses.map((address, index) => (
            <div key={index} className="address-card">
              <h4>{address.type || "Home Address"}</h4>
              <p>
                {address.building}, {address.street}, {address.city},{" "}
                {address.country} - {address.postalCode}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-card">
        <h3>Recent Orders</h3>

        {userInfo.orders.map((order, index) => (
          <div key={index} className="order-card">
            <div>
              <h4>#{order.id}</h4>
              <p>{order.products} Products</p>
            </div>
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileContent;
