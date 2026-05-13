import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { ShoppingCart, ShoppingBag, ShoppingBasket, Store } from "lucide-react";
import { Search, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = ({ login }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // triggers after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <h1>Shayaka</h1>
      <div className="nav-items">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/sale">Sale</Link>
          </li>

          {login ? (
            <>
              <li>
                <Link to="/cart">
                  <ShoppingCart size={20} />
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <Heart size={20} />
                </Link>
              </li>
              <li>
                <User size={20} />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
