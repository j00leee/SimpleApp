import './signup.css';
import React from "react";
import { Link } from "react-router-dom"; 

const Signup = () => {
  return (
    <div className="box">
      <div>sign up</div>
      <div>
        <label>First Name</label>
        <input type="text" name="firstBox" class="firstBox" placeholder="First Name"/>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastBox" class="lastBox" placeholder="Last Name"/>
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="emailBox" class="emailBox" placeholder="Email Address"/>
      </div>
      <button>Sign Up</button>
      <div>
        <Link to="/">
          Already have an account?
        </Link>
      </div>
    </div>
  );
}

export default Signup;