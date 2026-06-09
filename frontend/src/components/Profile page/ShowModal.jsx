import React, { useState, useEffect, useRef } from "react";
import "./ShowModal.css";

const ShowModal = ({ setShowModal }) => {
  const [defaultAddress, setDefaultAddress] = useState(false);
  const cities = [
    { value: "", label: "Choose a zone...", arabic: "" },
    { value: "Akkar", label: "Akkar", arabic: "عكار" },
    { value: "Al-Batroun", label: "Al-Batroun", arabic: "البترون" },
    {
      value: "Al-Bekaa El Gharbi",
      label: "Al-Bekaa El Gharbi",
      arabic: "البقاع الغربي",
    },
    { value: "Al-Chouf", label: "Al-Chouf", arabic: "الشوف" },
    { value: "Al-Danniyeh", label: "Al-Danniyeh", arabic: "الضنية" },
    { value: "Al-Hermel", label: "Al-Hermel", arabic: "الهرمل" },
    { value: "Al-Koura", label: "Al-Koura", arabic: "الكورة" },
    { value: "Al-Matn", label: "Al-Matn", arabic: "المتن" },
    { value: "Al-Miniyeh", label: "Al-Miniyeh", arabic: "المنية" },
    { value: "Al-Nabatieh", label: "Al-Nabatieh", arabic: "النبطية" },
    { value: "Aley", label: "Aley", arabic: "عاليه" },
    { value: "Baabda", label: "Baabda", arabic: "بعبدا" },
    { value: "Baalbek", label: "Baalbek", arabic: "بعلبك" },
    { value: "Bcharri", label: "Bcharri", arabic: "بشري" },
    { value: "Beirut", label: "Beirut", arabic: "بيروت" },
    { value: "Bent Jbeil", label: "Bent Jbeil", arabic: "بنت جبيل" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selectedZone = cities.find((z) => z.value === selected);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add New Address</h3>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            ✕
          </button>
        </div>
        <form action="" className="address-form">
          <div className="form-group">
            <div className="address-details">
              <div className="row">
                <label htmlFor="">Full Address</label>
                <input type="text" name="address" id="" />
              </div>

              <div className="row">
                <label htmlFor="">Additional Details</label>
                <input type="text" name="additional" id="" />
              </div>

              <div className="row">
                <label htmlFor="">City</label>
                <div
                  className="custom-select"
                  ref={dropdownRef}
                  style={{
                    width: 300,
                    fontFamily: "Arial",
                    display: "inline-block",
                  }}
                >
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                      padding: "12px 16px",
                      border: "1px solid #ccc",
                      borderRadius: 6,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "white",
                    }}
                  >
                    <span>{selectedZone?.label || "Choose a zone..."}</span>
                    <span style={{ fontSize: 12, color: "#666" }}>▼</span>
                  </div>

                  {isOpen && (
                    <div
                      style={{
                        position: "absolute",
                        width: 300,
                        marginTop: 4,
                        border: "1px solid #ccc",
                        borderRadius: 6,
                        background: "white",
                        maxHeight: 300,
                        overflowY: "auto",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        zIndex: 1000,
                      }}
                    >
                      {cities.map((zone) => (
                        <div
                          key={zone.value}
                          onClick={() => {
                            setSelected(zone.value);
                            setIsOpen(false);
                          }}
                          style={{
                            padding: "10px 16px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            background:
                              selected === zone.value ? "#1a73e8" : "white",
                            color: selected === zone.value ? "white" : "black",
                          }}
                          onMouseEnter={(e) => {
                            if (selected !== zone.value) {
                              e.target.style.background = "#f0f0f0";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selected !== zone.value) {
                              e.target.style.background = "white";
                            }
                          }}
                        >
                          <span>{zone.label}</span>
                          {zone.arabic && (
                            <span
                              style={{
                                color:
                                  selected === zone.value
                                    ? "rgba(255,255,255,0.9)"
                                    : "#666",
                                fontSize: 14,
                              }}
                            >
                              {zone.arabic}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <label htmlFor="">Add Map Address</label>
                <input type="text" name="map" id="" />
              </div>
            </div>
            <div className="info-details">
              <div className="row">
                <label htmlFor="firstName"> First Name</label>
                <input type="text" name="firstName" id="" />
              </div>
              <div className="row">
                <label htmlFor="lastName"> Last Name</label>
                <input type="text" name="lastName" id="" />
              </div>
              <div className="row">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="text" name="mobileNumber" id="" />
              </div>
              <div className="row default-address">
                <div className="defaultAddresslabels">
                  <p>Default Address</p>
                  <p>Set this as your primary delivery address</p>
                </div>
                <div
                  className={`switch-button ${defaultAddress ? "active" : ""}`}
                  onClick={() => {
                    setDefaultAddress(!defaultAddress);
                  }}
                >
                  <div className="switch-circle"></div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ShowModal;
