import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
