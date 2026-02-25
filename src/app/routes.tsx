import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RobotsPage from "../pages/robots/RobotsPage";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/robots", element: <RobotsPage /> },
    ],
  },
]);