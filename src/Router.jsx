import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";

const Router = () => {
  <Routes>
    <Route path="/" element={HomePage} />
    <Route path="/events" element={EventsPage} />
  </Routes>;
};

export default Router;
