import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
