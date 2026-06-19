import React, { useEffect, useState } from "react";

const Cart = () => {

  const [cartItems, setCartItems] =
    useState([]);

  useEffect(() => {

    const items = JSON.parse(
      localStorage.getItem(
        "cartItems"
      )
    ) || [];

    const updatedItems =
      items.map((item) => ({
        ...item,
        qty: item.qty || 1,
      }));

    setCartItems(
      updatedItems
    );

  }, []);

  const increaseQty = (id) => {

    const updatedCart =
      cartItems.map(
        (item) =>

          item._id === id

            ? {

                ...item,

                qty:
                  item.qty + 1,

              }

            : item

      );

    setCartItems(
      updatedCart
    );

    localStorage.setItem(

      "cartItems",

      JSON.stringify(
        updatedCart
      )

    );

  };

  const decreaseQty = (id) => {

    const updatedCart =
      cartItems.map(
        (item) =>

          item._id === id &&
          item.qty > 1

            ? {

                ...item,

                qty:
                  item.qty - 1,

              }

            : item

      );

    setCartItems(
      updatedCart
    );

    localStorage.setItem(

      "cartItems",

      JSON.stringify(
        updatedCart
      )

    );

  };

  const removeFromCart = (id) => {

    const updatedCart =

      cartItems.filter(

        (item) =>

          item._id !== id

      );

    setCartItems(
      updatedCart
    );

    localStorage.setItem(

      "cartItems",

      JSON.stringify(
        updatedCart
      )

    );

  };

  const totalPrice =

    cartItems.reduce(

      (acc, item) =>

        acc +

        item.price *

        item.qty,

      0

    );

  return (

    <div className="min-h-screen bg-slate-100 px-4 py-5">

      <h1 className="text-3xl font-bold text-slate-800 mb-6">

        Shopping Cart

      </h1>

      {

        cartItems.length === 0 ?

        (

          <div className="bg-white p-8 rounded-2xl shadow text-center">

            <h2 className="text-2xl font-bold text-slate-700">

              Cart Is Empty

            </h2>

          </div>

        )

        :

        (

          <div className="grid md:grid-cols-3 gap-6">

            {/* LEFT */}

            <div className="md:col-span-2 space-y-4">

              {

                cartItems.map(

                  (item) => (

                    <div

                      key={item._id}

                      className="bg-white p-4 rounded-2xl shadow

                      hover:shadow-xl

                      hover:-translate-y-1

                      transition-all duration-300

                      flex flex-col md:flex-row

                      justify-between

                      items-center

                      gap-4"

                    >

                      <div className="flex items-center gap-4">

                        <img

                          src={item.image}

                          alt={item.name}

                          className="w-20 h-20

                          object-cover

                          rounded-xl

                          hover:scale-105

                          transition"

                        />

                        <div>

                          <h2 className="text-lg font-bold text-slate-800">

                            {item.name}

                          </h2>

                          <p className="text-base text-cyan-600 font-semibold mt-1">

                            ₹{item.price}

                          </p>

                        </div>

                      </div>

                      <div className="flex flex-col items-center gap-3">

                        <div className="flex items-center gap-2">

                          <button

                            onClick={() =>

                              decreaseQty(

                                item._id

                              )

                            }

                            className="bg-slate-200

                            hover:bg-slate-300

                            px-3 py-1

                            rounded-lg

                            text-base"

                          >

                            -

                          </button>

                          <span className="text-lg font-bold">

                            {item.qty}

                          </span>

                          <button

                            onClick={() =>

                              increaseQty(

                                item._id

                              )

                            }

                            className="bg-cyan-500

                            text-white

                            hover:bg-cyan-600

                            px-3 py-1

                            rounded-lg

                            text-base"

                          >

                            +

                          </button>

                        </div>

                        <button

                          onClick={() =>

                            removeFromCart(

                              item._id

                            )

                          }

                          className="bg-red-500

                          text-white

                          px-4 py-2

                          text-sm

                          rounded-lg

                          hover:bg-red-600

                          transition"

                        >

                          Remove

                        </button>

                      </div>

                    </div>

                  )

                )

              }

            </div>

            {/* RIGHT */}

            <div className="bg-white p-5 rounded-2xl shadow h-fit">

              <h2 className="text-xl font-bold text-slate-800 mb-5">

                Order Summary

              </h2>

              <div className="space-y-3">

                <div className="flex justify-between text-sm">

                  <span>

                    Items

                  </span>

                  <span className="font-semibold">

                    {cartItems.length}

                  </span>

                </div>

                <div className="border-t pt-3 flex justify-between text-xl font-bold">

                  <span>

                    Total

                  </span>

                  <span className="text-cyan-600">

                    ₹{totalPrice}

                  </span>

                </div>

              </div>

              <button

                onClick={() =>

                  window.location.href =
                  "/checkout"

                }

                className="w-full mt-5

                py-2

                rounded-xl

                bg-slate-900

                text-sm

                text-white

                hover:bg-cyan-500

                transition"

              >

                Proceed To Checkout

              </button>

            </div>

          </div>

        )

      }

    </div>

  );

};

export default Cart;