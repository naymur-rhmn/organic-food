import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Loading from "../components/Loading/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
