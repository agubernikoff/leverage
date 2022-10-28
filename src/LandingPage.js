import React from "react";
import { useNavigate } from "react-router-dom";
import fulcrum from "./assets/fulcrum.png";
import vector from "./assets/vector.svg";

function LandingPage() {
  const nav = useNavigate();
  return (
    <div>
      <div className="landing_page">
        <img src={fulcrum} className="fulcrum_land" alt="Fulcrum" />
        <img src={vector} className="vector_land" alt="Fulcrum" />
      </div>
      <div className="button_hold">
        <button className="login_button" onClick={() => nav("/login")}>
          LOGIN
        </button>
        <button className="register_button" onClick={() => nav("/signup")}>
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
