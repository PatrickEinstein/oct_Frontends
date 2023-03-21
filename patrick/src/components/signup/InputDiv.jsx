import React from "react";
const InputDiv = ({ children }) => {
    return (<div className="bg-orange-300 rounded flex focus-within:shadow-lg">
      {children}
    </div>);
};
export default InputDiv;
