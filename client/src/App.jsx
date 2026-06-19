import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ADMIN */

import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import EditProduct from "./pages/admin/EditProduct";
import ManageOrders from "./pages/admin/ManageOrders";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/profile" element={<Profile />} />

        {/* ADMIN ROUTES */}

        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/add-product" element={<AddProduct />} />

        <Route path="/admin/manage-products" element={<ManageProducts />} />

        <Route path="/admin/edit-product/:id" element={<EditProduct />} />

        <Route path="/admin/manage-orders" element={<ManageOrders />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
