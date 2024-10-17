import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
const routes=createBrowserRouter([
  {path:"/",element:<Landing/>},
  {path:"/login",element:<Login/>}
])
export default function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}