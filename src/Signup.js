import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const nav = useNavigate();

  function handleSubmit() {
    if (password === confirm) nav("/home");
  }
  return (
    <div className="login_signup_container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Organization: </label>
          <input value={org} onChange={(e) => setOrg(e.target.value)}></input>
        </div>
        <div className="input_container">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>First Name: </label>
          <input
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>Last Name: </label>
          <input value={last} onChange={(e) => setLast(e.target.value)}></input>
        </div>
        <div className="input_container">
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>Confrim Password : </label>
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          ></input>
        </div>
        <div classname="input_container">
          <input type="checkbox" className="checkbox"></input>
          <label>
            I agree to the <a href="google.com">terms and conditions</a>
          </label>
        </div>
        <button>SIGN UP</button>
      </form>
    </div>
  );
}

export default Signup;
