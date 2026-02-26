import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RobotsPage from "../pages/robots/RobotsPage";
import TeamPage from "../pages/team/TeamPage";
import Layout from "./Layout";
import AboutPage from "../pages/team/About";
import GalleryPage from "../pages/team/Gallery";
import ContactPage from "../pages/team/Contact";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/robots", element: <RobotsPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
