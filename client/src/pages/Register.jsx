import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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

      const res = await API.post("/auth/register", formData);

      alert("Registration Successful");

      console.log(res.data);

      navigate("/login");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h1 className="text-3xl font-bold mb-5">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button className="bg-black text-white w-full py-2 rounded">
          Register
        </button>

      </form>

    </div>
  );
};

export default Register;