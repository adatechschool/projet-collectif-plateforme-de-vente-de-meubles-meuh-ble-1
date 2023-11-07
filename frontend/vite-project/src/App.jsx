import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import Product from "./pages/Product.jsx";
import Admin from "./pages/Admin.jsx";
import NavigationBar from "./components/navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentMethods from "./pages/Cart.jsx";

function App() {
  const user = localStorage.getItem("user")
  const ProtectedRoute = ({children}) =>{
    if(!user) return <Login/>
    return children
  }
  const Layout = () => {
    return (
      <>
        <NavigationBar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:  
          <Layout />
     ,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <Product /> },
        { path: "/admin", element:(
          <Admin />
       )},
        { path: "/cart", element: (<ProtectedRoute><PaymentMethods /></ProtectedRoute>) },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signin", element: <Signin /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
