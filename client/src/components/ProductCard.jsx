import React from "react";

import { Link } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyExists = existingCart.find((item) => item._id === product._id);

    if (alreadyExists) {
      alert("Already In Cart");

      return;
    }

    existingCart.push({
      ...product,

      qty: 1,
    });

    localStorage.setItem(
      "cartItems",

      JSON.stringify(existingCart),
    );

    alert("Product Added To Cart");
  };

  const addToWishlist = (e) => {
    e.preventDefault();

    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];

    const alreadyExists = wishlistItems.find(
      (item) => item._id === product._id,
    );

    if (alreadyExists) {
      alert("Already In Wishlist");

      return;
    }

    wishlistItems.push(product);

    localStorage.setItem(
      "wishlistItems",

      JSON.stringify(wishlistItems),
    );

    alert("Added To Wishlist");
  };

  return (
    <div
      className="

      group

      bg-white

      rounded-3xl

      overflow-hidden

      border

      border-slate-200

      shadow-lg

      hover:shadow-2xl

      hover:-translate-y-3

      transition-all

      duration-500

      "
    >
      <Link to={`/product/${product._id}`}>
        {/* IMAGE */}

        <div
          className="

          relative

          overflow-hidden

          "
        >
          <img
            src={product.image}
            alt={product.name}
            className="

            w-full

            h-60

            object-cover

            group-hover:scale-110

            transition-all

            duration-700

            "
          />

          {/* CATEGORY */}

          <span
            className="

            absolute

            top-4

            left-4

            bg-cyan-100

            text-cyan-700

            px-3

            py-1

            rounded-full

            text-xs

            font-bold

            "
          >
            {product.category}
          </span>

          {/* HEART */}

          <button
            onClick={addToWishlist}
            className="

            absolute

            top-4

            right-4

            w-11

            h-11

            rounded-full

            bg-white

            shadow-lg

            flex

            items-center

            justify-center

            hover:bg-red-500

            hover:scale-110

            transition-all

            duration-300

            "
          >
            <FaHeart
              className="

              text-gray-400

              hover:text-white

              text-lg

              transition-all

              duration-300

              "
            />
          </button>
        </div>

        {/* DETAILS */}

        <div className="p-5">
          <h2
            className="

            text-xl

            font-bold

            text-slate-800

            group-hover:text-cyan-600

            transition-all

            duration-300

            "
          >
            {product.name}
          </h2>

          <div
            className="

            mt-3

            flex

            items-center

            gap-3

            "
          >
            <p
              className="

              text-3xl

              font-extrabold

              text-cyan-600

              "
            >
              ₹{product.price}
            </p>

            <p
              className="

              text-gray-400

              line-through

              "
            >
              ₹{Math.floor(product.price * 1.3)}
            </p>
          </div>

          <p
            className="

            text-green-600

            text-sm

            font-semibold

            mt-2

            "
          >
            30% OFF
          </p>

          <div className="flex items-center gap-1 mt-3">
            <span className="text-yellow-400 text-lg">★★★★☆</span>

            <span className="text-gray-500 text-sm">(4.5)</span>
          </div>

          <p
            className="

            text-gray-500

            text-sm

            mt-2

            "
          >
            Premium Quality Product
          </p>
        </div>
      </Link>

      {/* BUTTON */}

      <div className="px-5 pb-5">
        <button
          onClick={addToCart}
          className="

          w-full

          py-3

          rounded-2xl

          font-bold

          text-white

          bg-gradient-to-r

          from-cyan-500

          to-blue-600

          hover:scale-105

          hover:shadow-xl

          hover:shadow-cyan-300

          active:scale-95

          transition-all

          duration-300

          "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
