import React from "react";
import { Link } from "react-router-dom";
import AuthPage from "../components/AuthPage";
import styles from "../styles";

const SignupPage = () => {
  return (
    <div className="h-screen flex px-3">
      <section className="flex-1">Image section</section>
      <section className="flex-1">
        <header>Octave Logo</header>
        <h2 className="text-lg">Signup</h2>
        <form action="" className="border flex flex-col gap-y-3 px-3">
          <div className={`${styles.inputContainer}`}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
            />
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
