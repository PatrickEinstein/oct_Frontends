import React from "react";

const InputDiv = ({ children }: React.ComponentProps<"div">) => {
  return (
    <div className="bg-orange-300 rounded flex focus-within:shadow-lg">
      {children}
    </div>
  );
};

export default InputDiv;
