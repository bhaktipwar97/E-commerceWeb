import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import API from "../../services/api";

const EditProduct = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
      countInStock: "",
    });

  const fetchProduct = async () => {

    try {

      const { data } =
        await API.get(`/products/${id}`);

      setFormData(data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchProduct();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.put(
        `/products/${id}`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Product Updated");

      navigate(
        "/admin/manage-products"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.response.data.message
      );

    }
  };

  return (
    <div className="max-w-xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-5">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="number"
          name="countInStock"
          value={formData.countInStock}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <button className="bg-black text-white px-5 py-3 rounded w-full">
          Update Product
        </button>

      </form>

    </div>
  );
};

export default EditProduct;