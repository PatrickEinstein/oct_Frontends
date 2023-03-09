import React from "react";
import Button from "../layout/Button";

type SupportContainerProps = {
  title: string;
  text: string;
  buttonText: string;
};
const SupportContainer = ({
  title,
  text,
  buttonText,
}: SupportContainerProps) => {
  return (
    <div className="flex py-12">
      <div className="flex-1">
        <h3 className="text-3xl font-bold my-4">{title}</h3>
        <p className="text-lg">
          {text}
          <br />
          <br />
          <Button text={buttonText} variant="secondary" className="py-1 px-8" />
        </p>
      </div>
      <div className="hidden lg:block flex-1"></div>
    </div>
  );
};

export default SupportContainer;
