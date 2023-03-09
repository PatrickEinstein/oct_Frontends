import React from "react";
import { Link } from "react-router-dom";
type NavButtonProps = {
  text: string;
  type?: "primary" | "secondary";
  to: string;
};
const NavButton = ({ text, type, to }: NavButtonProps) => {
  return (
    <Link
      to={to}
      className={`text-white p-2 rounded font-bold ${
        type === "primary" ? "bg-primary" : "bg-secondary"
      }`}
    >
      {text}
    </Link>
  );
};

export default NavButton;
