import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/users/User";
import Product from "./pages/products/Products";
import SingleUser from "./pages/user/SingleUser";
import SingleProduct from "./pages/product/SingleProduct";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import "./app.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <User />,
        },
        {
          path: "/user/:id",
          element: <SingleUser />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
