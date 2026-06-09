import React from "react";
import ProfileContent from "../components/Profile page/ProfileContent.jsx";
import Orders from "../components/Profile page/Orders.jsx";
import Addresses from "../components/Profile page/Addresses.jsx";
import { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const userInfo = {
    firstName: "Omar",
    lastName: "ghemrawi",
    email: "omar@gmail.com",
    phone: "+961 70 000 000",
    addresses: [
      {
        country: "Lebanon",
        city: "Beirut",
        building: "Building A",
        street: "123 Main St",
        postalCode: "1100",
      },
      {
        type: "Work",
        country: "Lebanon",
        city: "Beirut",
        building: "Building B",
        street: "456 Business Rd",
        postalCode: "1100",
      },
    ],
    orders: [
      {
        id: "12345",
        products: 2,
        status: "Delivered",
      },
      {
        id: "12346",
        products: 1,
        status: "Pending",
      },
      {
        id: "12347",
        products: 3,
        status: "Shipped",
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("account");
  const menu = [
    { label: "My Account", value: "account" },
    { label: "Orders", value: "orders" },
    { label: "Addresses", value: "addresses" },
  ];
  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-user">
          <div className="profile-image">
            <img src="https://i.pravatar.cc/150" alt="" />
          </div>

          <h2>{userInfo.name}</h2>
          <p>{userInfo.email}</p>
        </div>
        <div className="profile-menu">
          {menu.map((item) => (
            <button
              className={` ${activeTab === item.value ? "active" : ""}`}
              onClick={() => setActiveTab(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="logout-btn">Logout</button>
      </div>

      {activeTab === "account" && <ProfileContent userInfo={userInfo} />}
      {activeTab === "orders" && <Orders userInfo={userInfo} />}
      {activeTab === "addresses" && <Addresses userInfo={userInfo} />}
    </div>
  );
};

export default ProfilePage;
