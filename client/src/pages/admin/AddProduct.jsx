import React, { useState } from "react";
import API from "../../services/api";

const AddProduct = () => {

  const [formData, setFormData] = useState({

    name: "",

    price: "",

    image: "",

    category: "",

    description: "",

    countInStock: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(

        "/products",

        formData,

        {

          headers: {

            Authorization:

              `Bearer ${localStorage.getItem("token")}`,

          },

        }

      );

      alert("Product Added Successfully 🎉");

      window.location.href =

        "/admin/manage-products";

    }

    catch (error) {

      console.log(error);

      alert("Product Not Added");

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-8">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">

        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

          Add Product

        </h1>

        <form

          onSubmit={handleSubmit}

          className="space-y-5"

        >

          <input

            type="text"

            name="name"

            placeholder="Product Name"

            className="w-full border border-slate-300 rounded-xl p-3

            focus:outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            onChange={handleChange}

          />

          <input

            type="number"

            name="price"

            placeholder="Price"

            className="w-full border border-slate-300 rounded-xl p-3

            focus:outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            onChange={handleChange}

          />

          <input

            type="text"

            name="image"

            placeholder="Image URL"

            className="w-full border border-slate-300 rounded-xl p-3

            focus:outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            onChange={handleChange}

          />

          <input

            type="text"

            name="category"

            placeholder="Category"

            className="w-full border border-slate-300 rounded-xl p-3

            focus:outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            onChange={handleChange}

          />

          <textarea

            name="description"

            placeholder="Description"

            rows="4"

            className="w-full border border-slate-300 rounded-xl p-3

            focus:outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            onChange={handleChange}

          />

          <input

            type="number"

            name="countInStock"

            placeholder="Stock"

            className="w-full border border-slate-300 rounded-xl p-3

            focus:outline-none

            focus:border-cyan-500

            focus:ring-2

            focus:ring-cyan-200

            transition"

            onChange={handleChange}

          />

          <button

            type="submit"

            className="w-full py-3 rounded-xl

            bg-slate-900

            text-white

            font-semibold

            hover:bg-cyan-500

            hover:scale-105

            transition-all

            duration-300"

          >

            Add Product

          </button>

        </form>

      </div>

    </div>

  );

};

export default AddProduct;