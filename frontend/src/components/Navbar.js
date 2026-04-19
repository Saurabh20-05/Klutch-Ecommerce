import { Link, useNavigate } from "react-router-dom";
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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b px-4 md:px-8 lg:px-10 py-4">
      <div className="flex justify-between items-center">
        <Link
          to={role === "vendor" ? "/vendor" : "/"}
          className="flex flex-col leading-tight"
        >
          <span className="text-2xl font-bold text-blue-600 tracking-wide">
            Klutch
          </span>

          <span className="text-xs text-gray-500">
            Vendor Marketplace
          </span>
        </Link>

        <div className="hidden md:flex flex-wrap justify-end gap-4 md:gap-8 items-center text-sm font-medium text-gray-700">
          {role === "customer" && (
            <>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>

              <Link to="/cart" className="hover:text-blue-600 transition">
                Cart
              </Link>

              <Link to="/orders" className="hover:text-blue-600 transition">
                Orders
              </Link>

              <Link to="/my-returns" className="hover:text-blue-600 transition">
                Returns
              </Link>
            </>
          )}

          {role === "vendor" && (
            <Link to="/vendor" className="hover:text-blue-600 transition">
              Vendor Panel
            </Link>
          )}

          {role === "admin" && (
            <Link to="/admin" className="hover:text-blue-600 transition">
              Admin Panel
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-600 transition">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
              >
                Register
              </Link>
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
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>

              <Link to="/orders" onClick={() => setMenuOpen(false)}>
                Orders
              </Link>

              <Link to="/my-returns" onClick={() => setMenuOpen(false)}>
                Returns
              </Link>
            </>
          )}

          {role === "vendor" && (
            <Link to="/vendor" onClick={() => setMenuOpen(false)}>
              Vendor Panel
            </Link>
          )}

          {role === "admin" && (
            <Link to="/admin" onClick={() => setMenuOpen(false)}>
              Admin Panel
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>

              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
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