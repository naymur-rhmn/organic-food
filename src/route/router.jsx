import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Foods from "../components/Foods/Foods";
import FoodDetails from "../components/Foods/FoodDetails";
import DashBoardLayout from "../layout/DashBoardLayout";
import Products from "../components/DashBoard/Products/Products";
import AddProduct from "../components/DashBoard/AddProduct/AddProduct";
import EditProduct from "../components/DashBoard/EditProduct/EditProduct";
import Login from "../components/UserEntry/Login";
import Register from "../components/UserEntry/Register";
import PrivateRoute from "./PrivateRoute";
import Users from "../components/DashBoard/Users/Users";
import DeleteUser from "../components/DashBoard/Users/DeleteUser";
import FoodShop from "../components/Shop/FoodShop";
import Shop from "../pages/Shop";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../components/DashBoard/Home/Dashboard";
import Review from "../components/DashBoard/Review/Review";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/foods/:id",
        loader: async ({ params }) => {
          return await fetch(
            `https://organic-food-server-beige.vercel.app/foods/${params.id}`
          );
        },
        element: <FoodDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/edit/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://organic-food-server-beige.vercel.app/foods/${params.id}`
          ),
        element: <EditProduct />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },

      {
        path: "user/delete",
        element: <DeleteUser />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "review",
        element: <Review />,
      },
    ],
  },
]);

export default router;
