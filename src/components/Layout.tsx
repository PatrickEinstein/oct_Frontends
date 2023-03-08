import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode | string;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
