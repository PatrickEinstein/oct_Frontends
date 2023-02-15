import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";

const Router = () => {
  <Routes>
    <Route path="signup" element={SignupPage} />
    <Route path="/" element={HomePage} />
    <Route path="/events" element={EventsPage} />
  </Routes>;
};

export default Router;
