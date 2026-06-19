import React, {
  useEffect,
  useState,
} from "react";

const Wishlist = () => {

  const [wishlistItems,
    setWishlistItems] =
    useState([]);

  useEffect(() => {

    const items = JSON.parse(
      localStorage.getItem(
        "wishlistItems"
      )
    ) || [];

    setWishlistItems(items);

  }, []);

  // REMOVE

  const removeWishlist = (
    id
  ) => {

    const updatedItems =
      wishlistItems.filter(
        (item) =>
          item._id !== id
      );

    setWishlistItems(
      updatedItems
    );

    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(
        updatedItems
      )
    );
  };

  return (

    <div className="p-10 min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (

        <div className="bg-white p-10 rounded shadow text-center">

          <h2 className="text-3xl font-bold">
            Wishlist Is Empty
          </h2>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {wishlistItems.map(
            (item) => (

              <div
                key={item._id}
                className="bg-white p-5 rounded shadow"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover rounded"
                />

                <h2 className="text-2xl font-bold mt-3">
                  {item.name}
                </h2>

                <p className="text-xl mt-2">
                  ₹{item.price}
                </p>

                <button
                  onClick={() =>
                    removeWishlist(
                      item._id
                    )
                  }
                  className="bg-red-500 text-white w-full py-2 rounded mt-5"
                >
                  Remove
                </button>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
};

export default Wishlist;