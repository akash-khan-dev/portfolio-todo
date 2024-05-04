import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import { NotLogin } from "./PrivateRoute/NotLogin";
import { LoginUser } from "./PrivateRoute/LoginUser";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<NotLogin />}>
          <Route path="/login" index element={<Login />} />
          <Route path="/registration" index element={<Registration />} />
        </Route>
        <Route element={<LoginUser />}>
          <Route path="/" index element={<Home />} />
        </Route>
        <Route path="/verify/:token" element={<EmailVerification />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
