import React, { useState } from "react";
import "./Addresses.css";
import ShowModal from "./ShowModal";

const Address = ({ userInfo }) => {
  const { addresses } = userInfo;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="address-tab">
      <div className="address-header">
        <h2>My Address</h2>
        <button className="add-address-btn" onClick={() => setShowModal(true)}>
          + Add New Address
        </button>
      </div>

      <div className="address-list">
        {addresses.length === 0 ? (
          <div className="empty-address">
            <p>No addresses saved yet.</p>
            <span>Add your first delivery address.</span>
          </div>
        ) : (
          addresses.map((address, index) => (
            <div key={index} className="address-card">
              <div className="address-type">
                <span>{address.type || "Home"}</span>
                {index === 0 && <span className="default-badge">Default</span>}
              </div>

              <div className="address-details">
                <p className="street">
                  {address.building}, {address.street}
                </p>
                <p className="city">
                  {address.city}, {address.country}
                </p>
                <p className="postal">Postal Code: {address.postalCode}</p>
              </div>

              <div className="address-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
      {showModal && <ShowModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Address;
