import React from "react";
import blue from "./assets/blue_triangle.png";

function LoginSignupFooter() {
  return (
    <div className="footer_hold">
      <div className="login_signup_footer">
        <h3>
          <span>C</span>REATE
        </h3>
        <img src={blue} />
        <h3>
          <span>C</span>ONSTRUCT
        </h3>
      </div>
    </div>
  );
}

export default LoginSignupFooter;
