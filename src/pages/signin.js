import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const backgroundUrl =
    "https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg";
  const logoUrl = "/2.png";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    }

    if (isValid) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  const handleSignInClick = () => {
    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    }

    if (isValid) {
      console.log("Signing in with:", email, password);
      alert("Sign in successful!");
      window.location.href = "/home";
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="login-container">
        <img src={logoUrl} alt="Netflix Logo" className="login-logo" />
        <h1 className="login-heading">Sign In</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <button
            type="button"
            className="login-button"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </form>

        <div className="signup-link">
          <p>
            New to Netflix?{" "}
            <span className="signup-text">
              <Link to="/sinup">Sign up now.</Link>
            </span>
          </p>
        </div>
        <div className="back-button-container">
          <Link to="/home" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
