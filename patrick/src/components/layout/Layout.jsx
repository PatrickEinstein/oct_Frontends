import { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (<Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </Fragment>);
};
export default Layout;
