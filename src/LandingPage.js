import React from "react";
import fulcrum from "./assets/fulcrum.png";
import vector from "./assets/vector.svg";

function LandingPage() {
  return (
    <div>
      <div className="landing_page">
        <img src={fulcrum} className="fulcrum_land" />
        <img src={vector} className="vector_land" />
      </div>
      <div className="button_hold">
        <button className="login_button">LOGIN</button>

        <button className="register_button">REGISTER</button>
      </div>
    </div>
  );
}

export default LandingPage;
