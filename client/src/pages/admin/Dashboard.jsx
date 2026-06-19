import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import API from "../../services/api";

const Dashboard = () => {

  const [products, setProducts] = useState([]);

  const userInfo =
    JSON.parse(localStorage.getItem("userInfo")) || {};

  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const wishlistItems =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];

  const fetchProducts = async () => {

    try {

      const { data } =
        await API.get("/products");

      setProducts(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  const myProducts =
    products.filter(
      (product) =>

        String(product.user?._id) ===
        String(userInfo?._id)
    );

  return (

    <div className="p-10 min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold mb-8">

        Admin Dashboard

      </h1>

      {/* TOP CARDS */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        {/* PROFILE */}

        <Link
          to="/profile"
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
        >

          <div className="flex items-center gap-4">

            <div className="bg-blue-100 p-4 rounded-full">

              <User
                size={30}
                className="text-blue-600"
              />

            </div>

            <div>

              <h2 className="text-2xl font-bold">

                Profile

              </h2>

              <p className="text-gray-500">

                {userInfo?.name}

              </p>

            </div>

          </div>

        </Link>

        {/* MY PRODUCTS */}

        <div className="bg-blue-500 text-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold">

            My Products

          </h2>

          <p className="text-5xl mt-4">

            {myProducts.length}

          </p>

        </div>

        {/* CART */}

        <div className="bg-green-500 text-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold">

            Cart Items

          </h2>

          <p className="text-5xl mt-4">

            {cartItems.length}

          </p>

        </div>

        {/* WISHLIST */}

        <div className="bg-red-500 text-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold">

            Wishlist

          </h2>

          <p className="text-5xl mt-4">

            {wishlistItems.length}

          </p>

        </div>

      </div>

      {/* PROFILE INFO */}

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">

          Profile Info

        </h2>

        <p className="mb-2">

          <span className="font-bold">

            Name :

          </span>

          {" "}

          {userInfo?.name}

        </p>

        <p>

          <span className="font-bold">

            Email :

          </span>

          {" "}

          {userInfo?.email}

        </p>

      </div>

      {/* MY PRODUCTS */}

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">

          My Added Products

        </h2>

        {

          myProducts.length === 0 ?

          (

            <p>

              No Products Added

            </p>

          )

          :

          (

            myProducts.map((product) => (

              <div

                key={product._id}

                className="border-b py-4 flex justify-between items-center"

              >

                <div>

                  <h3 className="text-xl font-bold">

                    {product.name}

                  </h3>

                  <p className="text-gray-600">

                    ₹{product.price}

                  </p>

                </div>

                <img

                  src={product.image}

                  alt={product.name}

                  className="w-20 h-20 rounded-lg object-cover"

                />

              </div>

            ))

          )

        }

      </div>

    </div>

  );

};

export default Dashboard;