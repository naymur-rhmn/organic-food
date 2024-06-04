import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Foods from "../components/Foods/Foods";
import FoodDetails from "../components/Foods/FoodDetails";
import DashBoardLayout from "../layout/DashBoardLayout";
import Products from "../components/DashBoard/Products";
import AddProduct from "../components/DashBoard/AddProduct";
import EditProduct from "../components/DashBoard/EditProduct";
import Login from "../components/UserEntry/Login";

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
        path: "shop",
        element: <Foods />,
      },
      {
        path: "shop/foods/:id",
        loader: async ({ params }) => {
          return await fetch(`http://localhost:3000/foods/${params.id}`);
        },
        element: <FoodDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        loader: async () => await fetch("http://localhost:3000/foods"),
        element: <Products />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "edit/:id",
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/foods/${params.id}`),
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
