import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { setUser, user } = useContext(UserContext);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      login();
      setUser(user);
    }
  }, [user, login, setUser]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
