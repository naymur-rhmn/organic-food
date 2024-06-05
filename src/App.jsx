import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import AuthProvider from "./provider/AuthProvider";
import ProductDataProvider from "./provider/ProductDataProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductDataProvider>
          <RouterProvider router={router}></RouterProvider>
        </ProductDataProvider>
      </AuthProvider>
    </>
  );
}

export default App;
