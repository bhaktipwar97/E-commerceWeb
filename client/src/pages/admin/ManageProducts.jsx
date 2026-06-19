import React, {
  useEffect,
  useState,
} from "react";

import API from "../../services/api";

const ManageProducts = () => {

  const [products, setProducts] =
    useState([]);

  const userInfo = JSON.parse(

    localStorage.getItem(
      "userInfo"
    )

  );

  const fetchProducts = async () => {

    try {

      const { data } =

        await API.get(
          "/products"
        );

      console.log(data);

      setProducts(data);

    }

    catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  const deleteHandler = async (
    id
  ) => {

    try {

      await API.delete(

        `/products/${id}`,

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

      fetchProducts();

    }

    catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message

      );

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 px-6 py-8">

      <h1 className="text-4xl font-bold mb-8 text-center">

        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

          Manage Products

        </span>

      </h1>

      <div className="space-y-6">

        {

          products.map((product) => {

            console.log(

              "PRODUCT USER:",

              product.user

            );

            console.log(

              "LOGIN USER:",

              userInfo

            );

            const isOwner =

              userInfo &&

              product.user &&

              (

                String(

                  product.user._id

                )

                ===

                String(

                  userInfo._id

                )

              );

            return (

              <div

                key={product._id}

                className="bg-white

                rounded-3xl

                shadow-lg

                hover:shadow-2xl

                hover:-translate-y-1

                transition-all

                duration-300

                p-5

                flex

                flex-col

                md:flex-row

                justify-between

                items-center

                gap-5"

              >

                {/* LEFT */}

                <div className="flex items-center gap-5">

                  <img

                    src={product.image}

                    alt={product.name}

                    className="w-28 h-28

                    object-cover

                    rounded-2xl

                    shadow

                    hover:scale-105

                    transition-all

                    duration-300"

                  />

                  <div>

                    <h2 className="text-2xl font-bold text-slate-800">

                      {product.name}

                    </h2>

                    <p className="text-cyan-600 font-bold text-lg mt-1">

                      ₹{product.price}

                    </p>

                    <p className="text-gray-500 mt-1">

                      {product.category}

                    </p>

                  </div>

                </div>

                {/* RIGHT */}

                {

                  isOwner && (

                    <div className="flex gap-4">

                      <button

                        onClick={() =>

                          window.location.href =

                          `/admin/edit-product/${product._id}`

                        }

                        className="px-6 py-2

                        rounded-xl

                        bg-gradient-to-r

                        from-cyan-500

                        to-blue-600

                        text-white

                        font-semibold

                        hover:scale-105

                        transition-all

                        duration-300"

                      >

                        Edit

                      </button>

                      <button

                        onClick={() =>

                          deleteHandler(

                            product._id

                          )

                        }

                        className="px-6 py-2

                        rounded-xl

                        bg-gradient-to-r

                        from-red-500

                        to-pink-500

                        text-white

                        font-semibold

                        hover:scale-105

                        transition-all

                        duration-300"

                      >

                        Delete

                      </button>

                    </div>

                  )

                }

              </div>

            );

          })

        }

      </div>

    </div>

  );

};

export default ManageProducts;