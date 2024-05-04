import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function NotLogin() {
  const user = useSelector((user) => user.userInformation.user);
  return user ? <Navigate to={"/"} /> : <Outlet />;
}
