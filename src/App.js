import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
