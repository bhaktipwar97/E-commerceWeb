import React, { useState } from "react";
import API from "../services/api";

const Login = () => {

  const [formData, setFormData] = useState({
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

      const res = await API.post(
        "/auth/login",
        formData
      );

      console.log(res.data);

      if (res.data.token) {

        // SAVE TOKEN

        localStorage.setItem(
          "token",
          res.data.token
        );

        // SAVE USER INFO

        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            _id: res.data._id,
            name: res.data.name,
            email: res.data.email,
          })
        );

        alert(
          "Login Successful"
        );

        window.location.href =
          "/";

      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message
      );

    }
  };

  return (

    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h1 className="text-3xl font-bold mb-5">
          Login
        </h1>

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
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;