import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
