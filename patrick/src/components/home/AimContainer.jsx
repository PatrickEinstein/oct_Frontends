import React from "react";
const AimContainer = ({ image, title, text }) => {
    return (<figure className={`w-full max-w-lg h-fit lg:max-w-md h-80 px-4 flex flex-col items-center justify-center rounded-lg `}>
      <img src={image} alt={title}/>
      <figcaption className="text-center">
        <h3 className="text-2xl font-bold my-3">{title}</h3>
        <p className="text-lg">{text}</p>
      </figcaption>
    </figure>);
};
export default AimContainer;
