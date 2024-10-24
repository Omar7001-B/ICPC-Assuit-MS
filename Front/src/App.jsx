import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import TrainingsHome from "./components/TrainingsHome/TrainingsHome";
import ApplicationsHome from "./components/ApplicationsHome/ApplicationsHome";
import Settings from "./Pages/Settings/Settings";
const routes = createBrowserRouter([
  { index: true, element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/settings", element: <Settings /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      { index: true, element: <TrainingsHome /> },
      { path: "/home/applications", element: <ApplicationsHome /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
