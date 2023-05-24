import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Nav from "./pages/components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthProvider><Nav /></AuthProvider>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>


        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
