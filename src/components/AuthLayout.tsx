import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const AuthLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{outlet}</>;
};
