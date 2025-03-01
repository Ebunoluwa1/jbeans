import { useAuth } from "./auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/sign-in"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;