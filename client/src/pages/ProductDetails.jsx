import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import API from "../services/api";

const ProductDetails = () => {

  const { id } =
    useParams();

  const [product,
    setProduct] =
    useState({});

  const userInfo =
    JSON.parse(
      localStorage.getItem(
        "userInfo"
      )
    );

  // FETCH PRODUCT

  const fetchProduct =
    async () => {

      try {

        const { data } =
          await API.get(
            `/products/${id}`
          );

        setProduct(data);

      } catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchProduct();

  }, []);

  // ADD TO CART

  const addToCart = () => {

    const cartItems =
      JSON.parse(
        localStorage.getItem(
          "cartItems"
        )
      ) || [];

    cartItems.push({

      ...product,

      qty: 1,

    });

    localStorage.setItem(

      "cartItems",

      JSON.stringify(
        cartItems
      )

    );

    alert(
      "Product Added To Cart"
    );

  };

  // ADD TO WISHLIST

  const addToWishlist =
    () => {

      const wishlistItems =
        JSON.parse(
          localStorage.getItem(
            "wishlistItems"
          )
        ) || [];

      const alreadyExists =

        wishlistItems.find(

          (item) =>

            item._id ===

            product._id

        );

      if (

        alreadyExists

      ) {

        alert(

          "Already In Wishlist"

        );

        return;

      }

      wishlistItems.push(

        product

      );

      localStorage.setItem(

        "wishlistItems",

        JSON.stringify(

          wishlistItems

        )

      );

      alert(

        "Added To Wishlist"

      );

    };

  // DELETE PRODUCT

  const deleteHandler =
    async () => {

      try {

        await API.delete(

          `/products/${product._id}`,

          {

            headers: {

              Authorization:

                `Bearer ${localStorage.getItem("token")}`,

            },

          }

        );

        alert(
          "Product Deleted"
        );

        window.location.href =
          "/";

      }

      catch (error) {

        console.log(
          error
        );

        alert(
          error.response?.data?.message
        );

      }

    };

  // OWNER CHECK

  const isOwner =

    userInfo &&

    (

      product.user ===

      userInfo._id ||

      product.user?._id ===

      userInfo._id

    );

  return (

    <div className="min-h-screen bg-slate-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* IMAGE */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-5">

            <img

              src={product.image}

              alt={product.name}

              className="w-full h-[500px]

              object-cover

              rounded-2xl

              hover:scale-105

              transition-all

              duration-500"

            />

          </div>

          {/* DETAILS */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h1 className="text-4xl font-bold text-slate-800">

              {product.name}

            </h1>

            <p className="text-3xl font-bold text-cyan-600 mt-5">

              ₹{product.price}

            </p>

            <div className="mt-4">

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">

                {product.category}

              </span>

            </div>

            <p className="text-gray-600 text-lg leading-8 mt-7">

              {product.description}

            </p>

            <p className="mt-7 text-lg">

              <span className="font-bold">

                Stock :

              </span>

              {" "}

              {product.countInStock}

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button

                onClick={addToCart}

                className="px-7 py-3

                rounded-xl

                bg-slate-900

                text-white

                font-semibold

                hover:bg-cyan-500

                hover:scale-105

                transition-all

                duration-300"

              >

                Add To Cart

              </button>

              

              {

                isOwner && (

                  <>

                    <button

                      onClick={() =>

                        window.location.href =

                        `/admin/edit-product/${product._id}`

                      }

                      className="px-7 py-3

                      rounded-xl

                      bg-blue-500

                      text-white

                      font-semibold

                      hover:bg-blue-600

                      hover:scale-105

                      transition-all

                      duration-300"

                    >

                      Edit

                    </button>

                    <button

                      onClick={deleteHandler}

                      className="px-7 py-3

                      rounded-xl

                      bg-red-500

                      text-white

                      font-semibold

                      hover:bg-red-600

                      hover:scale-105

                      transition-all

                      duration-300"

                    >

                      Delete

                    </button>

                  </>

                )

              }

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ProductDetails;