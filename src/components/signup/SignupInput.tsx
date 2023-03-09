import React from "react";

const SignupInput = (props: React.ComponentProps<"input">) => {
  return (
    <input
      className="bg-transparent p-2 placeholder:text-gray-900 flex-1 outline-none"
      {...props}
    />
  );
};

export default SignupInput;
