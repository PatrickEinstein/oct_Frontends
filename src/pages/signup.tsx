import React, { useState } from "react";

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
        <form
          action=""
          method="post"
          className="border-black border-4 py-4 px-2 flex flex-col gap-3 w-full max-w-xl"
        >
          <div className="bg-orange-300 rounded flex focus-within:shadow-lg">
            <input
              className="bg-transparent p-2 placeholder:text-gray-900 flex-1 outline-none "
              type="text"
              value={firstName}
              placeholder={"First Name"}
              title={"First Name"}
            />
          </div>
          <div className="bg-orange-300 rounded flex focus-within:shadow-lg">
            <input
              className="bg-transparent p-2 placeholder:text-gray-900 flex-1 outline-none "
              type="text"
              value={lastName}
              placeholder={"Last Name"}
              title={"Last Name"}
            />
          </div>
          <div className="bg-orange-300 rounded flex focus-within:shadow-lg">
            <input
              className="bg-transparent p-2 placeholder:text-gray-900 flex-1 outline-none "
              type="text"
              value={username}
              placeholder={"Username"}
              title={"Username: This field is required"}
            />
          </div>
          <div className="bg-orange-300 rounded flex focus-within:shadow-lg">
            <input
              className="bg-transparent p-2 placeholder:text-gray-900 flex-1 outline-none "
              type="password"
              name=""
              id=""
              value={password1}
              placeholder={"Password"}
              title={"Password"}
            />
          </div>
          <div className="bg-orange-300 rounded flex focus-within:shadow-lg">
            <input
              className="bg-transparent p-2 placeholder:text-gray-900 flex-1 outline-none "
              type="password"
              name=""
              id=""
              value={password2}
              placeholder={"Confirm Password"}
              title={"Confirm Password"}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-crimson block p-2 w-full text-xl text-white font-medium rounded"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
