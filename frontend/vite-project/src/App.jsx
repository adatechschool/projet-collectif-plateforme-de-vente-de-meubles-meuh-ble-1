import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <Product /> },
        { path: "/admin", element: <Admin /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
