import React, { useState } from "react";
import InputDiv from "../components/signup/InputDiv";
import SignupForm from "../components/signup/SignupForm";
import SignupInput from "../components/signup/SignupInput";

const Signup = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password1, setPassword1] = useState<string>();
  const [password2, setPassword2] = useState<string>();
  return (
    <div className="flex h-screen">
      <section className="w-1/2 border border-red-700 h-full hidden lg:block">
        Hmm
      </section>
      <section className="w-full lg:w-1/2 border border-green-700 h-full flex flex-col justify-center items-center px-4">
        <h2 className="text-center text-6xl">Octave Logo</h2>
        <h2 className="text-4xl text-center my-5">Signup</h2>
        <SignupForm>
          <InputDiv>
            <SignupInput
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              placeholder={"First Name"}
              title={"First Name"}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="text"
              value={lastName}
              placeholder={"Last Name"}
              title={"Last Name"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="text"
              value={username}
              placeholder={"Username"}
              title={"Username: This field is required"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="password"
              value={password1}
              placeholder={"Password"}
              title={"Password"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <SignupInput
              type="password"
              value={password2}
              placeholder={"Confirm Password"}
              title={"Confirm Password"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value);
              }}
            />
          </InputDiv>
          <div>
            <button
              type="submit"
              className="bg-primary block p-2 w-full text-xl text-white font-medium rounded"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
              }}
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
