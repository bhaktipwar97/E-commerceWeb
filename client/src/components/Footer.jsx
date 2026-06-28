import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (

    <footer className="bg-[#0f172a] text-white border-t border-slate-800 mt-16">

      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}

        <div>

          <h1 className="text-3xl font-bold text-cyan-400 mb-4">

            ShopEase

          </h1>

          <p className="text-gray-400 text-sm leading-7">

            ShopEase is a modern ecommerce
            platform offering quality products,
            secure payments and fast delivery.

          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h2 className="text-lg font-semibold mb-4">

            Quick Links

          </h2>

          <div className="flex flex-col gap-3">

            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              to="/profile"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Profile
            </Link>

            <Link
              to="/cart"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Cart
            </Link>

            <Link
              to="/wishlist"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Wishlist
            </Link>

          </div>

        </div>

        {/* SUPPORT */}

        <div>

          <h2 className="text-lg font-semibold mb-4">

            Support

          </h2>

          <div className="flex flex-col gap-3">

            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">

              Help Center

            </p>

            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">

              Privacy Policy

            </p>

            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">

              Terms & Conditions

            </p>

            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">

              Refund Policy

            </p>

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h2 className="text-lg font-semibold mb-4">

            Contact

          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <p>

              📧 support@shopease.com

            </p>

            <p>

              📞 +91 xxxxxxxxxx

            </p>

            <p>

              📍 Pune, Maharashtra

            </p>

          </div>

          {/* SOCIAL */}

          <div className="flex gap-5 mt-6 text-2xl">

            <span className="hover:scale-110 cursor-pointer transition">

              🌐

            </span>

            <span className="hover:scale-110 cursor-pointer transition">

              📘

            </span>

            <span className="hover:scale-110 cursor-pointer transition">

              📸

            </span>

            <span className="hover:scale-110 cursor-pointer transition">

              💻

            </span>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-slate-800 py-4 text-center text-sm text-gray-500">

        © 2026 ShopEase | Designed & Developed by RK

      </div>

    </footer>

  );

};

export default Footer;