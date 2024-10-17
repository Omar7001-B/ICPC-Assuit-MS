import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
const routes = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> }
])
export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}