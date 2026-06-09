import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import {
  ShoppingCart,
  ShoppingBag,
  ShoppingBasket,
  Store,
  Menu,
  X,
} from "lucide-react";
import { Search, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = ({ login }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${hidden ? "navbar-hidden" : ""}`}
      >
        <h1>Shayaka</h1>
        <div className="nav-items">
          <ul className="nav-links">
            <li className="desktop-only">
              <Link to="/">Home</Link>
            </li>
            <li className="desktop-only">
              <Link to="/collections">Collections</Link>
            </li>
            <li className="desktop-only">
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
                  <Link to="/profile">
                    <User size={20} />
                  </Link>
                </li>
                <li className="menu-icon mobile-only">
                  <Menu size={20} onClick={() => setMenuOpen(!menuOpen)} />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign?mode=login">Login</Link>
                </li>
                <li>
                  <Link to="/sign?mode=signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/collections" onClick={() => setMenuOpen(false)}>
                Collections
              </Link>
            </li>
            <li>
              <Link to="/sale" onClick={() => setMenuOpen(false)}>
                Sale
              </Link>
            </li>
            {!login && (
              <>
                <li>
                  <Link
                    to="/sign?mode=login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign?mode=signup"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
