import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

export function LoginUser() {
  const user = useSelector((user) => user.userInformation.user);
  return user ? <Outlet /> : <Login />;
}
