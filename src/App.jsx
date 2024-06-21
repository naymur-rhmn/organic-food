import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import AuthProvider from "./provider/AuthProvider";
import ProductDataProvider from "./provider/ProductDataProvider";
import { CartProvider } from "./provider/CartProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ProductDataProvider>
            <RouterProvider router={router}></RouterProvider>
          </ProductDataProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
