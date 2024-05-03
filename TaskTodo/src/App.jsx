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

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration" index element={<Registration />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/" index element={<Home />} />
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
