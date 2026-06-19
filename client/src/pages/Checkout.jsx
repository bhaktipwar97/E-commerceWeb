import React, { useState } from "react";

const Checkout = () => {

  const [shippingAddress, setShippingAddress] =
    useState("");

  const [city, setCity] =
    useState("");

  const [postalCode, setPostalCode] =
    useState("");

  const placeOrderHandler = () => {

    if (
      !shippingAddress ||
      !city ||
      !postalCode
    ) {

      alert("Please Fill All Fields");

      return;

    }

    alert("Order Placed Successfully 🎉");

    localStorage.removeItem(
      "cartItems"
    );

    window.location.href = "/";

  };

  return (

    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-8">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8">

        {/* HEADING */}

        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

          Checkout

        </h1>

        {/* SHIPPING ADDRESS */}

        <div className="mb-5">

          <label className="block text-sm font-semibold text-slate-700 mb-2">

            Shipping Address

          </label>

          <input

            type="text"

            placeholder="Enter Shipping Address"

            className="w-full border border-slate-300 rounded-xl p-3 outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            value={shippingAddress}

            onChange={(e) =>

              setShippingAddress(

                e.target.value

              )

            }

          />

        </div>

        {/* CITY */}

        <div className="mb-5">

          <label className="block text-sm font-semibold text-slate-700 mb-2">

            City

          </label>

          <input

            type="text"

            placeholder="Enter City"

            className="w-full border border-slate-300 rounded-xl p-3 outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            value={city}

            onChange={(e) =>

              setCity(

                e.target.value

              )

            }

          />

        </div>

        {/* POSTAL CODE */}

        <div className="mb-7">

          <label className="block text-sm font-semibold text-slate-700 mb-2">

            Postal Code

          </label>

          <input

            type="text"

            placeholder="Enter Postal Code"

            className="w-full border border-slate-300 rounded-xl p-3 outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            value={postalCode}

            onChange={(e) =>

              setPostalCode(

                e.target.value

              )

            }

          />

        </div>

        {/* BUTTON */}

        <button

          onClick={placeOrderHandler}

          className="w-full py-3 rounded-xl

          bg-slate-900

          text-white

          font-semibold

          hover:bg-cyan-500

          hover:scale-105

          transition-all

          duration-300"

        >

          Place Order

        </button>

      </div>

    </div>

  );

};

export default Checkout;