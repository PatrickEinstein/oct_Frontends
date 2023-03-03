import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "../styles";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className="h-screen flex px-3">
      <section className="flex-1 hidden lg:block">Image section</section>
      <section className="flex-1 flex flex-col justify-center items-center">
        <header>Octave Logo</header>
        <h2 className="text-3xl text-center my-2">Signup</h2>
        <form
          action=""
          className="border rounded-2xl flex flex-col gap-y-5 p-5 max-w-xl w-full"
        >
          <div className={`${styles.inputContainer}`}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`${styles.input}`}
              value={password1}
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="cursor-pointer h-full flex items-center"
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>

          <div className={styles.inputContainer}>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              className={`${styles.input}`}
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <span
              onClick={() => {
                setShowPassword2(!showPassword2);
              }}
              className="cursor-pointer h-full flex items-center"
            >
              {showPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className={`${styles.buttonContainer} `}>
            <button
              type="submit"
              className={`${styles.button} ${styles.signupButton}`}
            >
              Signup
            </button>
          </div>
          <div className="flex justify-between">
            <div>Login With Facebook</div>
            <div>Login With Google</div>
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className={`text-red-700 font-extrabold`}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
