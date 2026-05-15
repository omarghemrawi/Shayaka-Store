import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Sign.css";
const Sign = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const [isSignIn, setIsSignIn] = useState(mode === "login");
  useEffect(() => {
    setIsSignIn(mode === "login");
  }, [mode]);
  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="sign">
      <div className={`card-container ${isSignIn ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <h1>Sign Up</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>
              I agree to <a href="#">Terms</a> & <a href="#">Privacy</a>
            </span>
          </label>
          <button>Sign Up</button>
          <a href="#" onClick={toggleForm}>
            Already have an account?
          </a>
        </div>

        <div className="card-face card-back">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
          <div className="Recover">
            <a href="#">Forget password?</a>
            <a href="#" onClick={toggleForm}>
              Don't have an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
