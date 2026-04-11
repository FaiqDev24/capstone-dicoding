import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarAdmin from "./components/NavbarAdmin";

export default function Template() {
  const location = useLocation();
  const adminPaths = ['/admin-dashboard', '/admin-reports'];
  const isAdminPage = adminPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {isAdminPage ? <NavbarAdmin /> : <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}