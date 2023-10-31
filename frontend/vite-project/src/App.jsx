import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/product", element: <Product /> },
    { path: "/admin", element: <Admin /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
