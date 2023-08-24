import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from '@/components/Dashboard';
import ErrorPage from '@/components/ErrorPage';
import Login from '@/components/Login';
import CreateAnAccount from '@/components/CreateAccount'
import { auth } from "./firebase-server/firebase";
function App () {




  const router = createBrowserRouter([
    {
path: "/",
element: <Login/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "login/",
      element: <Login />
    },
    {
      path: "createAccount/",
      element: <CreateAnAccount />
    },
    {
      path: "*",
      errorElement: <ErrorPage />,
    }
  ])



  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}




export default App
