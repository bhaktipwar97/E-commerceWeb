import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  PlusCircle,
  Package,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");

  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("wishlistItems");

    alert("Logout Successful");
    window.location.href = "/login";
  };

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
        : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400 hover:scale-105"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md text-white shadow-2xl border-b border-slate-800">

      <div className="w-full px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold tracking-wide text-cyan-400 hover:text-cyan-300 transition"
        >
          ShopEase
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-3">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/profile" className={navClass}>
            <User size={18} />
            Profile
          </NavLink>

          <NavLink to="/cart" className={navClass}>
            <ShoppingCart size={18} />
            Cart
            <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </NavLink>

          {token ? (
            <>
              <NavLink
                to="/admin/add-product"
                className={navClass}
              >
                <PlusCircle size={18} />
                Add Product
              </NavLink>

              <NavLink
                to="/admin/manage-products"
                className={navClass}
              >
                <Package size={18} />
                Manage Products
              </NavLink>

              <button
                onClick={logoutHandler}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={navClass}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-cyan-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-cyan-600 transition"
              >
                Register
              </NavLink>
            </>
          )}

        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

            {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-slate-800 px-5 py-5 flex flex-col gap-4">

          <NavLink
            to="/"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <User size={18} />
            Profile
          </NavLink>

          <NavLink
            to="/cart"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingCart size={18} />
            Cart
            <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </NavLink>

          {token ? (
            <>
              <NavLink
                to="/admin/add-product"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                <PlusCircle size={18} />
                Add Product
              </NavLink>

              <NavLink
                to="/admin/manage-products"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                <Package size={18} />
                Manage Products
              </NavLink>

              <button
                onClick={logoutHandler}
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-cyan-500 text-white px-4 py-2 rounded-xl font-semibold text-center hover:bg-cyan-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;