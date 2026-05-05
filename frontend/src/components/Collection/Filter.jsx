import React from "react";
import { useState } from "react";
import "./Filter.css";
const Filter = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState([]);
  const [value, setValue] = useState(100);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Newest Arrivals");

  const options = [
    "Newest Arrivals",
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
  ];

  const percent = ((value - 20) / (200 - 20)) * 100;
  return (
    <div className="filter-part">
      <div className="filter-head">
        <p>Filter</p>
        <button>Clear All</button>
      </div>
      <div className="category">
        <h3>Category</h3>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="all"
            name="category"
            value="all"
            defaultChecked
          />
          <label htmlFor="all">All Categories (120)</label>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" id="dresses" name="category" value="dresses" />
          <label htmlFor="dresses">Dresses (45)</label>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" id="shoes" name="category" value="shoes" />
          <label htmlFor="shoes">Shoes (30)</label>
        </div>
      </div>
      <div className="price-range">
        <h3>Price Range</h3>
        <div className="price-labels">
          <span>$20</span>
          <input
            type="range"
            min="20"
            max="200"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              background: `linear-gradient(to right, 
              #ff6161 ${percent}%,   /* filled part */
              #e5e5e5 ${percent}%    /* empty part */
            )`,
            }}
          />
          <span>${value}</span>
        </div>
      </div>
      <div className="size-filter">
        <h3>Size</h3>
        <div className="size-btn-container">
          {sizes.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize.includes(size) ? "active" : ""}`}
              onClick={() => {
                setSelectedSize((prev) =>
                  prev.includes(size)
                    ? prev.filter((s) => s !== size)
                    : [...prev, size],
                );
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="sort-by">
        <h3>Sort By</h3>
        <div className="dropdown">
          <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            <span>{selected}</span>
            <span>{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && (
            <div className="dropdown-list">
              {options.map((option) =>
                option === selected ? null : (
                  <ul>
                    <li
                      key={option}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  </ul>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
