import { Navigate, useLocation } from "react-router-dom";

export function Auth({ children }) {
  const access_token = localStorage.access_token;
  let location = useLocation();

  if (!access_token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
}

export function AuthLogin({ children }) {
  const access_token = localStorage.access_token;
  let location = useLocation();

  if (access_token) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return children;
}
