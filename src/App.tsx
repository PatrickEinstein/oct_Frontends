import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
