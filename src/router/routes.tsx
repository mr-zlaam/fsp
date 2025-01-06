import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/home";
import { createBrowserRouter } from "react-router-dom";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
