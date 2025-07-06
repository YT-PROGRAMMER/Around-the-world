import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Country from "./pages/country";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // ✅ الصفحة الرئيسية
        { path: ":country", element: <Country /> }, // باقي الصفحات
        { path: "*", element: <NoPage /> }, // باقي الصفحات
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
