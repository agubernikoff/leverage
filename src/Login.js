import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./LoginSignupFooter";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  function handleSubmit() {
    if (password) nav("/home");
  }

  return (
    <div className="login_signup_container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login_form_container">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          ></input>
        </div>
        <div className="login_form_container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          ></input>
        </div>
        <button className="login_page_button">LOG IN</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
