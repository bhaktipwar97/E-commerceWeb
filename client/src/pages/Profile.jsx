import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import API from "../services/api";

const Profile = () => {

  const [products, setProducts] =
    useState([]);

  const [darkMode, setDarkMode] =
    useState(

      localStorage.getItem(
        "darkMode"
      ) === "true"

    );

  const userInfo =
    JSON.parse(

      localStorage.getItem(
        "userInfo"
      )

    ) || {};

  const cartItems =
    JSON.parse(

      localStorage.getItem(
        "cartItems"
      )

    ) || [];

  const wishlistItems =
    JSON.parse(

      localStorage.getItem(
        "wishlistItems"
      )

    ) || [];

  const fetchProducts =
    async () => {

      try {

        const { data } =
          await API.get(
            "/products"
          );

        setProducts(data);

      }

      catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchProducts();

  }, []);

  useEffect(() => {

    localStorage.setItem(

      "darkMode",

      darkMode

    );

  }, [darkMode]);

  const myProducts =

    products.filter(

      (product) =>

        String(

          product.user?._id

        ) ===

        String(

          userInfo?._id

        )

    );

  return (

    <div

      className={`

      min-h-screen

      p-10

      transition-all

      duration-500

      ${

        darkMode

        ?

        "bg-[#111827] text-white"

        :

        "bg-gray-100 text-black"

      }

      `}

    >

      {/* TOP */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">

          My Profile

        </h1>

        <button

          onClick={() =>

            setDarkMode(

              !darkMode

            )

          }

          className="px-5 py-2 rounded-xl bg-cyan-500 text-white"

        >

          {

            darkMode

            ?

            "☀ Light"

            :

            "🌙 Dark"

          }

        </button>

      </div>

      {/* PROFILE */}

      <div

        className={`

        p-8

        rounded-3xl

        shadow-xl

        mb-8

        ${

          darkMode

          ?

          "bg-[#1f2937]"

          :

          "bg-white"

        }

        `}

      >

        <p className="text-xl mb-4">

          <span className="font-bold">

            Name :

          </span>

          {" "}

          {userInfo?.name}

        </p>

        <p className="text-xl">

          <span className="font-bold">

            Email :

          </span>

          {" "}

          {userInfo?.email}

        </p>

      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold">

            My Products

          </h2>

          <p className="text-6xl mt-4 font-bold">

            {myProducts.length}

          </p>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold">

            Cart Items

          </h2>

          <p className="text-6xl mt-4 font-bold">

            {cartItems.length}

          </p>

        </div>

        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold">

            Wishlist

          </h2>

          <p className="text-6xl mt-4 font-bold">

            {wishlistItems.length}

          </p>

        </div>

      </div>

      {/* MY PRODUCTS */}

      <div

        className={`

        p-8

        rounded-3xl

        shadow-xl

        mb-10

        ${

          darkMode

          ?

          "bg-[#1f2937]"

          :

          "bg-white"

        }

        `}

      >

        <h1 className="text-3xl font-bold mb-6">

          My Added Products

        </h1>

        {

          myProducts.length === 0

          ?

          (

            <h2>

              No Products Added

            </h2>

          )

          :

          (

            myProducts.map(

              (product) => (

                <div

                  key={product._id}

                  className="flex justify-between items-center border-b border-gray-500 py-5"

                >

                  <div>

                    <h2 className="text-2xl font-bold">

                      {product.name}

                    </h2>

                    <p className="text-cyan-500 text-xl mt-2">

                      ₹{product.price}

                    </p>

                  </div>

                  <img

                    src={product.image}

                    alt={product.name}

                    className="w-24 h-24 rounded-2xl object-cover"

                  />

                </div>

              )

            )

          )

        }

      </div>

      {/* WISHLIST */}

      <div

        className={`

        p-8

        rounded-3xl

        shadow-xl

        ${

          darkMode

          ?

          "bg-[#1f2937]"

          :

          "bg-white"

        }

        `}

      >

        <h1 className="text-3xl font-bold mb-6">

          ❤️ My Wishlist

          (

          {wishlistItems.length}

          )

        </h1>

        {

          wishlistItems.length === 0

          ?

          (

            <h2>

              Wishlist Empty

            </h2>

          )

          :

          (

            <div className="grid md:grid-cols-3 gap-6">

              {

                wishlistItems.map(

                  (item) => (

                    <div

                      key={item._id}

                      className={`

                      rounded-3xl

                      overflow-hidden

                      shadow-xl

                      hover:scale-105

                      transition-all

                      duration-300

                      ${

                        darkMode

                        ?

                        "bg-[#111827]"

                        :

                        "bg-gray-50"

                      }

                      `}

                    >

                      <img

                        src={item.image}

                        alt={item.name}

                        className="h-56 w-full object-cover"

                      />

                      <div className="p-5">

                        <h2 className="text-2xl font-bold">

                          {item.name}

                        </h2>

                        <p className="text-cyan-500 text-2xl mt-3">

                          ₹{item.price}

                        </p>

                        <Link

                          to={`/product/${item._id}`}

                        >

                          <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl">

                            View Product

                          </button>

                        </Link>

                      </div>

                    </div>

                  )

                )

              }

            </div>

          )

        }

      </div>

    </div>

  );

};

export default Profile;