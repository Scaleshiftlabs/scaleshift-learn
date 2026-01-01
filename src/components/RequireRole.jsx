import { Navigate } from "react-router-dom";
import { useAuthRole } from "../hooks/useAuthRole";

export default function RequireRole({ role: requiredRole, children }) {
  const { isLoaded, isSignedIn, role } = useAuthRole();

  if (!isLoaded) {
    return <div style={{ color: "white" }}>Loading…</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
