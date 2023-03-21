import React, { useState } from "react";
import InputDiv from "../components/signup/InputDiv";
import SignupForm from "../components/signup/SignupForm";
import SignupInput from "../components/signup/SignupInput";
import BulbImage from "./../assets/images/bulb.png";
import OctaveLogo from "./../assets/images/OctaveLogo.png";
// import {useDispatch} from "react-redux"

const Signup = () => {
  // const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(name);
    console.log(email);
    console.log(password);

    if (password !== confirmPassword) {
      alert("passwords don't match");
    }

    try {
      const savedUserResponse = await fetch(
        "http://localhost:5000/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
        }
      );
      const savedUser = await savedUserResponse.json();
      console.log(savedUserResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <section className="w-1/2 h-full hidden lg:block max-w-xl">
        <img src={BulbImage} alt="" className="w-full h-full " />
      </section>
      <section className="w-full flex-1 lg:w-1/2 h-full flex flex-col justify-center items-center px-4">
        <h2 className="text-center text-6xl">
          <img src={OctaveLogo} alt="Octave Incorporations" />
        </h2>
        <h2 className="text-4xl text-center my-5">Signup</h2>
        <SignupForm onSubmit={handleSubmit}>
          <InputDiv>
            <SignupInput
              type="text"
              onChange={(e) => setName(e.target.value)}
              // name ="name"
              value={name}
              placeholder={"name"}
              title={"First Name"}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="text"
              // name="lastName"
              value={lastName}
              placeholder={"Last Name"}
              title={"Last Name"}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="text"
              // name ="userName"
              value={userName}
              placeholder={"Username"}
              title={"Username: This field is required"}
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="text"
              // name = "email"
              value={email}
              placeholder={"email"}
              title={"Username: This field is required"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="password"
              // name ="password"
              value={password}
              placeholder={"Password"}
              title={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="password"
              // name="confirmPassword"
              value={confirmPassword}
              placeholder={"Confirm Password"}
              title={"Confirm Password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputDiv>
          <div>
            <button
              type="submit"
              className="bg-secondary block p-2 w-full text-xl text-white font-medium rounded"
              // onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </SignupForm>
      </section>
    </div>
  );
};
export default Signup;
