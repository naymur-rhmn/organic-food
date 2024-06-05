import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
