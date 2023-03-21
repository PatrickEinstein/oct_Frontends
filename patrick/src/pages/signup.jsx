import React, { useState } from "react";
import InputDiv from "../components/signup/InputDiv";
import SignupForm from "../components/signup/SignupForm";
import SignupInput from "../components/signup/SignupInput";
import BulbImage from "./../assets/images/bulb.png";
import OctaveLogo from "./../assets/images/OctaveLogo.png";
const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    return (<div className="flex h-screen">
      <section className="w-1/2 h-full hidden lg:block max-w-xl">
        <img src={BulbImage} alt="" className="w-full h-full "/>
      </section>
      <section className="w-full flex-1 lg:w-1/2 h-full flex flex-col justify-center items-center px-4">
        <h2 className="text-center text-6xl">
          <img src={OctaveLogo} alt="Octave Incorporations"/>
        </h2>
        <h2 className="text-4xl text-center my-5">Signup</h2>
        <SignupForm>
          <InputDiv>
            <SignupInput type="text" onChange={(e) => {
            setFirstName(e.target.value);
        }} value={firstName} placeholder={"First Name"} title={"First Name"}/>
          </InputDiv>
          <InputDiv>
            <SignupInput type="text" value={lastName} placeholder={"Last Name"} title={"Last Name"} onChange={(e) => {
            setFirstName(e.target.value);
        }}/>
          </InputDiv>
          <InputDiv>
            <SignupInput type="text" value={username} placeholder={"Username"} title={"Username: This field is required"} onChange={(e) => {
            setFirstName(e.target.value);
        }}/>
          </InputDiv>
          <InputDiv>
            <SignupInput type="password" value={password1} placeholder={"Password"} title={"Password"} onChange={(e) => {
            setFirstName(e.target.value);
        }}/>
          </InputDiv>
          <InputDiv>
            <SignupInput type="password" value={password2} placeholder={"Confirm Password"} title={"Confirm Password"} onChange={(e) => {
            setFirstName(e.target.value);
        }}/>
          </InputDiv>
          <div>
            <button type="submit" className="bg-secondary block p-2 w-full text-xl text-white font-medium rounded" onClick={(e) => {
            e.preventDefault();
        }}>
              Sign Up
            </button>
          </div>
        </SignupForm>
      </section>
    </div>);
};
export default Signup;
