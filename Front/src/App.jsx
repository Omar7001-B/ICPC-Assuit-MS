import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import TrainingsHome from "./components/TrainingsHome/TrainingsHome";
import ApplicationsHome from "./components/ApplicationsHome/ApplicationsHome";
import Settings from "./Pages/Settings/Settings";
import AdminHome from "./Pages/AdminHome/AdminHome";
import TrainingsAdminHome from "./components/TrainingsAdminHome/TrainingsAdminHome";
import PostTrainingAdminHome from "./components/PostTrainingAdminHome/PostTrainingAdminHome";
import TraineesForTraining from "./components/TrainingsAdminHome/TraineesForTraining";
import ApplicationsForTrainings from "./components/TrainingsAdminHome/ApplicationsForTrainings";
import UpdateTraining from "./components/UpdateTraining/UpdateTraining";
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
  {
    path: "/adminhome",
    element: <AdminHome />,
    children: [
      { index: true, element: <TrainingsAdminHome /> },
      { path: "/adminhome/posttraining", element: <PostTrainingAdminHome  /> },
      { path: "/adminhome/traineesfortraining/:id", element: <TraineesForTraining/> },
      { path: "/adminhome/applicationsfortrainings/:id", element: <ApplicationsForTrainings/> },
      { path: "/adminhome/updatetraining/:id", element: <UpdateTraining/> }
    ],
  }
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
