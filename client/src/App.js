import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/components/Nav";
import Signup from "./pages/components/Signup";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
