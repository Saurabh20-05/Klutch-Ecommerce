import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const role = user?.user?.role;

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600 transition";

  const mobileActiveClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b px-4 md:px-8 lg:px-10 py-4">
      <div className="flex justify-between items-center">

        <NavLink
          to={role === "vendor" ? "/vendor" : "/"}
          className="flex flex-col leading-tight"
        >
          <span className="text-2xl font-bold text-blue-600 tracking-wide">
            Klutch
          </span>

          <span className="text-xs text-gray-500">
            Vendor Marketplace
          </span>
        </NavLink>

        <div className="hidden md:flex flex-wrap justify-end gap-4 md:gap-8 items-center text-sm font-medium text-gray-700">

          {role === "customer" && (
            <>
              <NavLink to="/" end className={activeClass}>
                Home
              </NavLink>

              <NavLink to="/cart" className={activeClass}>
                Cart
              </NavLink>

              <NavLink to="/orders" className={activeClass}>
                Orders
              </NavLink>

              <NavLink to="/my-returns" className={activeClass}>
                Returns
              </NavLink>
            </>
          )}

          {role === "vendor" && (
            <NavLink to="/vendor" className={activeClass}>
              Vendor Panel
            </NavLink>
          )}

          {role === "admin" && (
            <NavLink to="/admin" className={activeClass}>
              Admin Panel
            </NavLink>
          )}

          {!user ? (
            <>
              <NavLink to="/login" className={activeClass}>
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition"
            >
              Logout
            </button>
          )}

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 text-gray-700 font-medium">

          {role === "customer" && (
            <>
              <NavLink
                to="/"
                end
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/cart"
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </NavLink>

              <NavLink
                to="/orders"
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Orders
              </NavLink>

              <NavLink
                to="/my-returns"
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Returns
              </NavLink>
            </>
          )}

          {role === "vendor" && (
            <NavLink
              to="/vendor"
              className={mobileActiveClass}
              onClick={() => setMenuOpen(false)}
            >
              Vendor Panel
            </NavLink>
          )}

          {role === "admin" && (
            <NavLink
              to="/admin"
              className={mobileActiveClass}
              onClick={() => setMenuOpen(false)}
            >
              Admin Panel
            </NavLink>
          )}

          {!user ? (
            <>
              <NavLink
                to="/login"
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={mobileActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-left"
            >
              Logout
            </button>
          )}

        </div>
      )}
    </nav>
  );
}