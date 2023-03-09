import { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode | string;
} & Omit<React.ComponentProps<"div">, "children">;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
