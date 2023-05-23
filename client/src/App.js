import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
