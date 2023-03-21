import React from "react";
const Card = ({ title, text, type }) => {
    return (<div className={`border-2 ${type === "primary" ? "border-primary" : "border-secondary"} w-full max-w-lg lg:max-w-md h-80 px-4 flex flex-col items-center justify-center rounded-lg`}>
      <h3 className="text-primary font-bold text-2xl my-4 w-full">{title}</h3>
      <p className="text-lg my-2">{text && text}</p>
    </div>);
};
export default Card;
