import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "./pages/components/BottomNav";
import { AuthProvider } from "./AuthContext";
import Nav from "./pages/components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Lists from "./pages/Lists";
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/lists" element={<Lists />} />
          </Route>
        </Routes>
        <BottomNav />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
