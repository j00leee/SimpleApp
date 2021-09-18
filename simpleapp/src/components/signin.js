import './signin.css';
import React from "react";
import { Link } from "react-router-dom"; 

const Signin = () => {
  return (
    <div className="box">
      <div>sign in</div>
      <div>
        <label>Email Address</label>
        <input type="email" name="emailBox" class="emailBox" placeholder="Email Address"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="passwordBox" class="passwordBox" placeholder="Password"/>
      </div>
      <div>Forgot Password?</div>
      <button>Log In</button>
      <div>
        <Link to="signup">
          Need an account? Create One Here
        </Link>
      </div>
    </div>
  );
}

export default Signin;