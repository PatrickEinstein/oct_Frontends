import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Customers from "./components/Customers";
import Events from "./components/Events";
import EventsBar from "./components/EventsBar";
import NavBar from "./components/NavBar";
import UpcomingEvents from "./components/UpcomingEvents";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
