import React from "react";
import { Link } from "react-router-dom";
import AuthPage from "../components/AuthPage";

const SignupPage = () => {
  return (
    <div>
      <section>Image section</section>
      <section>
        <header>Octave Logo</header>
        <h2>Signup</h2>
        <form action="">
          <div>
            <input type="text" placeholder="First Name" />
          </div>

          <div>
            <input type="text" placeholder="Last Name" />
          </div>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
          <div>
            <div>Login With Facebook</div>
            <div>Login With Google</div>
          </div>
          <div>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
          <div></div>
          <button type="submit">Header Text</button>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
