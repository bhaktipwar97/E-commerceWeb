import React, {
  useEffect,
  useState,
} from "react";

import API from "../../services/api";

const ManageOrders = () => {

  const [orders, setOrders] =
    useState([]);

  const fetchOrders = async () => {

    try {

      const { data } =
        await API.get(
          "/orders",
          {
            headers: {
              Authorization:
                `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

      setOrders(data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchOrders();

  }, []);

  const deliverHandler = async (
    id
  ) => {

    try {

      await API.put(
        `/orders/${id}/deliver`,
        {},
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(
        "Order Delivered"
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message
      );

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">

          Manage Orders

        </h1>

        {orders.length === 0 ? (

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-semibold text-gray-600">

              No Orders Found

            </h2>

          </div>

        ) : (

          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order._id}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col lg:flex-row justify-between gap-5"
              >

                <div className="space-y-2">

                  <h2 className="text-2xl font-bold">

                    Order ID:
                    {" "}
                    <span className="text-gray-600 text-lg">

                      {order._id}

                    </span>

                  </h2>

                  <p className="text-lg">

                    User:
                    {" "}
                    <span className="font-semibold">

                      {order.user?.name}

                    </span>

                  </p>

                  <p className="text-lg">

                    Total:
                    {" "}
                    <span className="font-bold text-green-600">

                      ₹{order.totalPrice}

                    </span>

                  </p>

                  <p className="text-lg">

                    Payment:
                    {" "}

                    {order.isPaid ? (

                      <span className="text-green-600 font-bold">

                        Paid

                      </span>

                    ) : (

                      <span className="text-red-500 font-bold">

                        Pending

                      </span>

                    )}

                  </p>

                  <p className="text-lg">

                    Delivery:
                    {" "}

                    {order.isDelivered ? (

                      <span className="text-green-600 font-bold">

                        Delivered

                      </span>

                    ) : (

                      <span className="text-yellow-500 font-bold">

                        Processing

                      </span>

                    )}

                  </p>

                </div>

                <div className="flex items-center">

                  {!order.isDelivered && (

                    <button
                      onClick={() =>
                        deliverHandler(
                          order._id
                        )
                      }
                      className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl text-lg transition"
                    >

                      Mark As Delivered

                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
};

export default ManageOrders;